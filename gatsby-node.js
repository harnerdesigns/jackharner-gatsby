const _ = require("lodash");
const path = require("path");

const { createFilePath } = require(`gatsby-source-filesystem`)
const { attachFields } = require(`gatsby-plugin-node-fields`)

const { NODE_ENV } = process.env

console.log(NODE_ENV);


function isArticleNode(node) {
  if (node.internal.type !== "MarkdownRemark") {
    return false;
  }


  return true;
}

function randomNum(min, max, currentIndex = null) {
  var n = [];
  var i = 0;
  while (i < 3) {
    var num = Math.floor(Math.random() * max) + min;
    if (num !== currentIndex && n.indexOf(num) === -1) {
      n.push(num);
      i++;
    }
  }
  return n;
}

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
        defaultValue: () => {console.log(NODE_ENV); (NODE_ENV === "development" ? true : false)},
      },
      {
        name: 'weight',
        getter: node => node.frontmatter.weight,
        defaultValue: 0,
      },
      {
        name: 'ogImage',
        getter: node => node.frontmatter.ogImage,
        defaultValue: ''
      }
    ]
  }
]




exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField, deleteNode } = actions;


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

  const docTemplate = path.resolve('src/templates/docTemplate.js');
  const blogTemplate = path.resolve('src/templates/blogTemplate.js');


  return graphql(`
  {
  blog: allMarkdownRemark(sort: {order: DESC, fields: [fields___weight, frontmatter___date]}, filter: {fileAbsolutePath: {glob: "**/src/content/blog/**/*.md"}, fields: {published: {eq: true}}}, limit: 1000) {
    edges {
      node {
        excerpt(pruneLength: 250)
        id
        frontmatter {
          title
          subtitle
          date(formatString: "MMMM DD, YYYY")
          featuredImage {
            childImageSharp {
              resize(width: 500, height: 500, cropFocus: CENTER) {
                src
              }
            }
          }
        }
        fields {
          slug
          collection
          externalLink
          published
        }
      }
    }
  }
  portfolio: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {fileAbsolutePath: {glob: "**/src/content/portfolio/**/*.md"}, fields: {published: {eq: true}}}, limit: 1000) {
    edges {
      node {
        fields {
          slug
          collection
          published
        }
        frontmatter {
          title
          description
          color
          date(formatString: "MMMM DD, YYYY")
          tags
          images {
            childImageSharp {
              sizes {
                src
              }
            }
          }
          logo {
            extension
            publicURL
          }
        }
      }
    }
  }
}
  `).then(result => {


    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }


    _.each(result.data.blog.edges, (edge, index) => {
      const edgeCount = result.data.blog.edges.length
      const relatedIndexes = randomNum(0, edgeCount, index);

      const related = [result.data.blog.edges[relatedIndexes[0]].node,
      result.data.blog.edges[relatedIndexes[1]].node,
      result.data.blog.edges[relatedIndexes[2]].node]

      createPage({
        path: `${edge.node.fields.slug}`,
        component: path.resolve("./src/templates/blog-post.js"),
        context: {
          slug: edge.node.fields.slug,
          related
        }
      });

    });

    _.each(result.data.portfolio.edges, (edge, index) => {
      const edgeCount = result.data.portfolio.edges.length
      const relatedPortfolioIndexes = randomNum(0, edgeCount, index);

      const related = [result.data.portfolio.edges[relatedPortfolioIndexes[0]].node,
      result.data.portfolio.edges[relatedPortfolioIndexes[1]].node,
      result.data.portfolio.edges[relatedPortfolioIndexes[2]].node]

      createPage({
        path: `${edge.node.fields.slug}`,
        component: path.resolve("./src/templates/project.js"),
        context: {
          slug: edge.node.fields.slug,
          related
        }
      });
    });
  });
}






