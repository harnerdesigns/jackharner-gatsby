const _ = require("lodash")
const path = require("path")
const fetch = require("node-fetch")

const { createFilePath } = require(`gatsby-source-filesystem`)
const { attachFields } = require(`gatsby-plugin-node-fields`)
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const { NODE_ENV, CONVERTKIT_SECRET, CONVERTKIT_KEY } = process.env


function isBlogNode(node) {
  if (node.internal.type !== "MarkdownRemark") {
    return false
  }
  if (node.fields.collection !== "blog") {
    return false
  }

  return true
}

function isPortfolioNode(node) {
  if (node.internal.type !== "MarkdownRemark") {
    return false
  }
  if (node.fields.collection !== "portfolio") {
    return false
  }

  return true
}

function randomNum(min, max, currentIndex = null, arrayLength = 4) {
  var n = []
  var i = 0

  while (i < arrayLength) {
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
    predicate: isBlogNode,
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
        transformer: value => (NODE_ENV !== "development" ? value : value),
      },
      {
        name: "unlisted",
        getter: node => node.frontmatter.unlisted,
        defaultValue: false,
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
      {
        name: "date",
        getter: node =>
          node.frontmatter.updated
            ? node.frontmatter.updated
            : node.frontmatter.date,
        defaultValue: "",
      },
    ],
  },

  {
    predicate: isPortfolioNode,
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
        transformer: value => (NODE_ENV !== "development" ? value : true),
      },
      {
        name: "weight",
        getter: node => node.frontmatter.weight,
        defaultValue: 0
      },
      {
        name: "ogImage",
        getter: node => node.frontmatter.ogImage,
        defaultValue: "",
      },
      {
        name: "unlisted",
        getter: node => node.frontmatter.unlisted,
        defaultValue: false,
      },
    ],
  },
]

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField, deleteNode } = actions

  if (_.get(node, "internal.type") === `MarkdownRemark`) {
    // Get the parent node
    const parent = getNode(_.get(node, "parent"))

    const slug = createFilePath({ node, getNode, basePath: `content/blog` })
    // console.log({slug})
    createNodeField({
      node,
      name: `slug`,
      value: `/${_.get(parent, "sourceInstanceName")}${slug}`,
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

  return graphql(`query Everything($drafts: [Boolean]) {
  blog: allMarkdownRemark(
    sort: [{fields: {weight: DESC}}, {fields: {date: ASC}}]
    filter: {fileAbsolutePath: {glob: "**/content/blog/**/*.md"}, fields: {published: {in: $drafts}}}
    limit: 1000
  ) {
    edges {
      node {
        id
        excerpt
        fields {
          date
          slug
          collection
          published
          externalLink
          externalLinkLabel
        }
        frontmatter {
          title
          subtitle
          tags
          published
          featuredImage {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, height: 350, transformOptions: {fit: COVER})
            }
          }
        }
      }
    }
  }
  portfolio: allMarkdownRemark(
    sort: {frontmatter: {date: DESC}}
    filter: {fileAbsolutePath: {glob: "**/content/portfolio/**/*.md"}, fields: {published: {eq: true}}}
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
  newsletter: allMarkdownRemark(
    sort: {frontmatter: {date: DESC}}
    filter: {fileAbsolutePath: {glob: "**/content/blog/**/*.md"}, fields: {published: {eq: true}, unlisted: {eq: false}}, frontmatter: {tags: {in: "Newsletter"}}}
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
          subtitle
          tags
        }
      }
    }
  }
}`, { drafts: NODE_ENV === "development" ? [true, false] : [true] }).then(async result => {
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
      let listedPosts = result.data.blog.edges.filter(({ node }) =>
        node.fields.unlisted ? false : true
      )
      const edgeCount = listedPosts.length
      const relatedIndexes = randomNum(0, edgeCount, index, 4)

      const related = [
        listedPosts[relatedIndexes[0]].node,
        listedPosts[relatedIndexes[1]].node,
        listedPosts[relatedIndexes[2]].node,
        listedPosts[relatedIndexes[3]].node,
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
    // console.log(blogTags)

    // Count Tags To Get Top Tags
    var topBlogTags = blogTags.reduce(function (p, c) {
      p[c] = (p[c] || 0) + 1
      return p
    }, {})

    // console.log({ topBlogTags: topBlogTags })

    var sortedTopBlogTagsArray = []
    for (var tag in topBlogTags) {
      sortedTopBlogTagsArray.push([tag, topBlogTags[tag]])
    }

    sortedTopBlogTagsArray.sort(function (a, b) {
      return b[1] - a[1]
    })

    sortedTopBlogTagsArray.forEach(function (item) {
      sortedTopBlogTags[item[0]] = item[1]
    })

    // console.log({ sortedTopBlogTags: sortedTopBlogTags })

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
        topTags: sortedTopBlogTags,
        drafts: false

      },
    })
    if (NODE_ENV === "development") {
      createPage({
        path: "/blog/drafts/",
        component: path.resolve(`src/templates/blog.js`),
        context: {
          topTags: sortedTopBlogTags,
          drafts: true
        },
      })
    }

    // Make tag pages
    const slugOverrides = {
      WordPress: 'wordpress',
      ATProto: 'atproto',
      BigCommerce: 'bigcommerce'
    }

    const getTagSlug = tag => slugOverrides[tag] || _.kebabCase(tag)

    blogTags.forEach(tag => {

      const tagPath = `/blog/tags/${getTagSlug(tag)}/`

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

      let listedProjects = result.data.portfolio.edges.filter(({ node }) =>
        node.fields.unlisted ? false : true
      )
      const edgeCount = listedProjects.length
      const relatedPortfolioIndexes = randomNum(0, edgeCount, index, 3)

      const related = [
        listedProjects[relatedPortfolioIndexes[0]].node,
        listedProjects[relatedPortfolioIndexes[1]].node,
        listedProjects[relatedPortfolioIndexes[2]].node,
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
    // console.log(portfolioTags)

    // Count Tags To Get Top Tags
    var topPortfolioTags = portfolioTags.reduce(function (p, c) {
      p[c] = (p[c] || 0) + 1
      return p
    }, {})

    // console.log({ topPortfolioTags: topPortfolioTags })

    var sortedTopPortfolioTagsArray = []
    for (var tag in topPortfolioTags) {
      sortedTopPortfolioTagsArray.push([tag, topPortfolioTags[tag]])
    }

    sortedTopPortfolioTagsArray.sort(function (a, b) {
      return b[1] - a[1]
    })

    sortedTopPortfolioTagsArray.forEach(function (item) {
      sortedTopPortfolioTags[item[0]] = item[1]
    })

    // console.log({ sortedTopPortfolioTags: sortedTopPortfolioTags })

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
        topTags: sortedTopPortfolioTags,
      },
    })

    // Make tag pages

    portfolioTags.forEach(tag => {

      const tagPath = `/portfolio/tags/${getTagSlug(tag)}/`

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

    _.each(result.data.newsletter.edges, (edge, index) => {
      const edgeCount = result.data.blog.edges.length
      const relatedBlogIndexes = randomNum(0, edgeCount, index, 3)

      const related = [
        result.data.blog.edges[relatedBlogIndexes[0]].node,
        result.data.blog.edges[relatedBlogIndexes[1]].node,
        result.data.blog.edges[relatedBlogIndexes[2]].node,
      ]

      createPage({
        path: `${edge.node.fields.slug}`,
        component: path.resolve("./src/templates/blog-post.js"),
        context: {
          slug: edge.node.fields.slug,
          newsletter: true,
          related: related,
        },
      })
    })

    let recent3 = result.data.newsletter.edges.filter((edge, index) => {
      if (index > 2) return false

      if (
        edge.node.fields.published &&
        edge.node.fields.published !== "unlisted"
      ) {
        return true
      }
    })

    const subscriberCount = await getSubscriberCount(
      CONVERTKIT_SECRET,
      CONVERTKIT_KEY
    )

    createPage({
      path: "/newsletter/",
      component: path.resolve(`src/templates/newsletter.js`),
      context: {
        recentEmails: recent3,
        subscriberCount: subscriberCount,
      },
    })
  });
}

async function getSubscriberCount(convertkit_secret, convertkit_key) {
  return fetch(
    "https://api.convertkit.com/v3/subscribers?api_key=" +
    convertkit_key +
    "&api_secret=" +
    convertkit_secret
  )
    .then(response => response.json())
    .then(data => {
      // console.log({ convertkitRes: data })
      return data.total_subscribers
    })
    .catch(err => console.error(err))
}
