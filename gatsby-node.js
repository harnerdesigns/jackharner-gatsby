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

  // Blog Pages //

  const blogQuery = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
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
    }
  `)

  if (blogQuery.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }


  const allBlogEdges = blogQuery.data.allMarkdownRemark.edges;



  const blogEdges = allBlogEdges.filter(
    edge => edge.node.fields.collection === `blog` && edge.node.fields.published === true
  );
  // Make Blog Pages
  _.each(blogEdges, (edge, index) => {
    const edgeCount = blogEdges.length
    const relatedIndexes = randomNum(0, edgeCount, index);

    const related = [blogEdges[relatedIndexes[0]].node,
    blogEdges[relatedIndexes[1]].node,
    blogEdges[relatedIndexes[2]].node]

    createPage({
      path: `${edge.node.fields.slug}`,
      component: path.resolve("./src/templates/blog-post.js"),
      context: {
        slug: edge.node.fields.slug,
        related
      }
    });
  });




  // Portfolio Pages //

  const portfolioQuery = await graphql(`
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
            published
          }
          frontmatter {
            title
            description
            color
            date(formatString: "MMMM DD, YYYY")
            tags
            images{
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
`)

  if (portfolioQuery.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return
  }

  const portfolioEdges = portfolioQuery.data.allMarkdownRemark.edges.filter(
    edge => edge.node.fields.collection === `portfolio`
  );

  // Make Portfolio Pages

  _.each(portfolioEdges, (edge, index) => {
    const edgeCount = portfolioEdges.length
    const relatedPortfolioIndexes = randomNum(0, edgeCount, index);

    const related = [portfolioEdges[relatedPortfolioIndexes[0]].node,
    portfolioEdges[relatedPortfolioIndexes[1]].node,
    portfolioEdges[relatedPortfolioIndexes[2]].node]

    createPage({
      path: `${edge.node.fields.slug}`,
      component: path.resolve("./src/templates/project.js"),
      context: {
        slug: edge.node.fields.slug,
        related
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

function randomNum(min, max, currentIndex = null){
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