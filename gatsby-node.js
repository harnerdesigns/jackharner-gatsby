const _ = require("lodash");
const path = require("path");

const { createFilePath } = require(`gatsby-source-filesystem`)
const { attachFields } = require(`gatsby-plugin-node-fields`)



exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  const descriptors = [
    {
      predicate: isArticleNode,
      fields: [
        {
          name: 'externalLink',
          getter: node => node.frontmatter.externalLink,
          defaultValue: '',
        },
        {
          name: 'published',
          getter: node => node.frontmatter.published,
          defaultValue: false,
        },
      ]
    }
  ]

  if (_.get(node, "internal.type") === `MarkdownRemark`) {
    // Get the parent node
    const parent = getNode(_.get(node, "parent"));

    const slug = createFilePath({ node, getNode, basePath: `src/content/blog` })
    createNodeField({
      node,
      name: `slug`,
      value: `${_.get(parent, "sourceInstanceName")}${slug}`,
    })

    createNodeField({
      node,
      name: "collection",
      value: _.get(parent, "sourceInstanceName")
    });


    attachFields(node, actions, getNode, descriptors)

  }
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
              collection
            }
            frontmatter {
                  title
                  published
              }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }


  const allEdges = result.data.allMarkdownRemark.edges;



  const blogEdges = allEdges.filter(
    edge => edge.node.fields.collection === `blog`
  );
  const portfolioEdges = allEdges.filter(
    edge => edge.node.fields.collection === `portfolio`
  );

  _.each(blogEdges, (edge, index) => {
    const previous =
      index === blogEdges.length - 1 ? null : blogEdges[index + 1].node;
    const next = index === 0 ? null : blogEdges[index - 1].node;

    createPage({
      path: `${edge.node.fields.slug}`,
      component: path.resolve("./src/templates/blog-post.js"),
      context: {
        slug: edge.node.fields.slug,
        previous,
        next
      }
    });
  });
  _.each(portfolioEdges, (edge, index) => {
    createPage({
      path: `${edge.node.fields.slug}`,
      component: path.resolve("./src/templates/project.js"),
      context: {
        slug: edge.node.fields.slug
      }
    });
  });




}






function isArticleNode(node) {
  if (node.internal.type !== "MarkdownRemark") {
    return false;
  }


  return true;
}