const _ = require("lodash")
const path = require("path")

const { createFilePath } = require(`gatsby-source-filesystem`)
const { attachFields } = require(`gatsby-plugin-node-fields`)

const { NODE_ENV } = process.env

console.log(NODE_ENV)

function isArticleNode(node) {
  if (node.internal.type !== "MarkdownRemark") {
    return false
  }

  return true
}

function randomNum(min, max, currentIndex = null) {
  var n = []
  var i = 0
  while (i < 3) {
    var num = Math.floor(Math.random() * max) + min
    if (num !== currentIndex && n.indexOf(num) === -1) {
      n.push(num)
      i++
    }
  }
  return n
}

const descriptors = [
  {
    predicate: isArticleNode,
    fields: [
      {
        name: "externalLink",
        getter: node => node.frontmatter.externalLink,
        defaultValue: "",
      },
      {
        name: "externalLinkLabel",
        getter: node => node.frontmatter.externalLinkLabel,
        defaultValue: "Check It Out »",
      },
      {
        name: "published",
        getter: node => node.frontmatter.published,
        defaultValue: false,
        transformer: value => NODE_ENV !== "development" ? value : true
      },
      {
        name: "weight",
        getter: node => node.frontmatter.weight,
        defaultValue: 0,
      },
      {
        name: "ogImage",
        getter: node => node.frontmatter.ogImage,
        defaultValue: "",
      },
    ],
  },
]

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField, deleteNode } = actions

  if (_.get(node, "internal.type") === `MarkdownRemark`) {
    // Get the parent node
    const parent = getNode(_.get(node, "parent"))

    const slug = createFilePath({ node, getNode, basePath: `src/content/blog` })
    createNodeField({
      node,
      name: `slug`,
      value: `${_.get(parent, "sourceInstanceName")}${slug}`,
    })

    createNodeField({
      node,
      name: "collection",
      value: _.get(parent, "sourceInstanceName"),
    })

    attachFields(node, actions, getNode, descriptors)
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  var sortedTopPortfolioTags = {}
  var sortedTopBlogTags = {}

  return graphql(`
    {
      blog: allMarkdownRemark(
        sort: { order: DESC, fields: [fields___weight, frontmatter___date] }
        filter: {
          fileAbsolutePath: { glob: "**/src/content/blog/**/*.md" }
          fields: { published: { eq: true } }
        }
        limit: 1000
      ) {
        edges {
          node {
            id
            excerpt
            fields {
              slug
              collection
              published
              externalLink
            }
            frontmatter {
              title
              subtitle
              tags
              featuredImage {
                childImageSharp {
                  resize(width: 500, height: 500, cropFocus: CENTER) {
                    src
                  }
                }
              }
            }
          }
        }
      }

      portfolio: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: {
          fileAbsolutePath: { glob: "**/src/content/portfolio/**/*.md" }
          fields: { published: { eq: true } }
        }
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
              color
              title
              description
              tags
              logo {
                publicURL
              }
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      reporter.panicOnBuild(
        `Error while running GraphQL query.` + result.errors
      )
      return
    }

    //////////////////////
    //    Blog Pages   //
    ////////////////////

    _.each(result.data.blog.edges, (edge, index) => {
      const edgeCount = result.data.blog.edges.length
      const relatedIndexes = randomNum(0, edgeCount, index)

      const related = [
        result.data.blog.edges[relatedIndexes[0]].node,
        result.data.blog.edges[relatedIndexes[1]].node,
        result.data.blog.edges[relatedIndexes[2]].node,
      ]

      createPage({
        path: `${edge.node.fields.slug}`,
        component: path.resolve("./src/templates/blog-post.js"),
        context: {
          slug: edge.node.fields.slug,
          related,
        },
      })
    })

    // Tag pages:
    let blogTags = []
    // Iterate through each post, putting all found tags into `tags`
    result.data.blog.edges.forEach(edge => {
      if (_.get(edge, `node.frontmatter.tags`)) {
        blogTags = blogTags.concat(edge.node.frontmatter.tags)
      }
    })
    console.log(blogTags)

    // Count Tags To Get Top Tags
    var topBlogTags = blogTags.reduce(function(p, c) {
      p[c] = (p[c] || 0) + 1
      return p
    }, {})

    console.log({ topBlogTags: topBlogTags })

    var sortedTopBlogTagsArray = []
    for (var tag in topBlogTags) {
      sortedTopBlogTagsArray.push([tag, topBlogTags[tag]])
    }

    sortedTopBlogTagsArray.sort(function(a, b) {
      return b[1] - a[1]
    })

    sortedTopBlogTagsArray.forEach(function(item) {
      sortedTopBlogTags[item[0]] = item[1]
    })

    console.log({ sortedTopBlogTags: sortedTopBlogTags })

    blogTags = _.uniq(blogTags)

    // Create All Tags Page
    createPage({
      path: "/blog/tags/",
      component: path.resolve(`src/templates/tags/blog-tags.js`),
      context: {
        topTags: sortedTopBlogTags,
      },
    })

    createPage({
      path: "/blog/",
      component: path.resolve(`src/templates/blog.js`),
      context: {
        topTags: sortedTopBlogTags
      }
    })

    // Make tag pages

    blogTags.forEach(tag => {
      const tagPath = `/blog/tags/${_.kebabCase(tag)}/`

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/tag.js`),
        context: {
          tag,
          topTags: sortedTopBlogTags,
          postType: "blog",
        },
      })
    })

    //////////////////////
    // Portfolio Pages //
    ////////////////////

    _.each(result.data.portfolio.edges, (edge, index) => {
      const edgeCount = result.data.portfolio.edges.length
      const relatedPortfolioIndexes = randomNum(0, edgeCount, index)

      const related = [
        result.data.portfolio.edges[relatedPortfolioIndexes[0]].node,
        result.data.portfolio.edges[relatedPortfolioIndexes[1]].node,
        result.data.portfolio.edges[relatedPortfolioIndexes[2]].node,
      ]

      createPage({
        path: `${edge.node.fields.slug}`,
        component: path.resolve("./src/templates/project.js"),
        context: {
          slug: edge.node.fields.slug,
          related,
        },
      })
    })
    // Tag pages:
    let portfolioTags = []
    // Iterate through each post, putting all found tags into `tags`
    result.data.portfolio.edges.forEach(edge => {
      if (_.get(edge, `node.frontmatter.tags`)) {
        portfolioTags = portfolioTags.concat(edge.node.frontmatter.tags)
      }
    })
    console.log(portfolioTags)

    // Count Tags To Get Top Tags
    var topPortfolioTags = portfolioTags.reduce(function(p, c) {
      p[c] = (p[c] || 0) + 1
      return p
    }, {})

    console.log({ topPortfolioTags: topPortfolioTags })

    var sortedTopPortfolioTagsArray = []
    for (var tag in topPortfolioTags) {
      sortedTopPortfolioTagsArray.push([tag, topPortfolioTags[tag]])
    }

    sortedTopPortfolioTagsArray.sort(function(a, b) {
      return b[1] - a[1]
    })

    sortedTopPortfolioTagsArray.forEach(function(item) {
      sortedTopPortfolioTags[item[0]] = item[1]
    })

    console.log({ sortedTopPortfolioTags: sortedTopPortfolioTags })

    portfolioTags = _.uniq(portfolioTags)

    // Create All Tags Page
    createPage({
      path: "/portfolio/tags/",
      component: path.resolve(`src/templates/tags/portfolio-tags.js`),
      context: {
        topTags: sortedTopPortfolioTags,
      },
    })

    createPage({
      path: "/portfolio/",
      component: path.resolve(`src/templates/portfolio.js`),
      context: {
        topTags: sortedTopPortfolioTags
      }
    })

    // Make tag pages

    portfolioTags.forEach(tag => {
      const tagPath = `/portfolio/tags/${_.kebabCase(tag)}/`

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/tag.js`),
        context: {
          tag,
          topTags: sortedTopPortfolioTags,
          postType: "portfolio",
        },
      })
    })
  })
}
