import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTitle from "../components/pageTitle"
import ProjectCard from "../components/portfolio/projectCard"

const _ = require("lodash")

const Blog = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark

  let tags = []
  // Iterate through each post, putting all found tags into `tags`
  _.forEach(posts, ({ node: post }) => {
    return (tags = tags.concat(post.frontmatter.tags))
  })

  var map = tags.reduce(function(p, c) {
    p[c] = (p[c] || 0) + 1
    return p
  }, {})
  var topTags = Object.keys(map).sort(function(a, b) {
    return map[a] < map[b]
  })

  return (
    <Layout>
      <SEO title="Portfolio" />
      <PageTitle>Portfolio</PageTitle>
      <main className="page_body page_body--grid">
        <div className="top-tags">
          <ul>
            <li>
              Top&nbsp;<Link to="/portfolio/tags">Project&nbsp;Tags</Link>:
            </li>
            {topTags.map((tag, i) => {
              const tagLink = `/portfolio/tags/${_.kebabCase(tag)}/`
              if (i < 6) {
                return (
                  <li>
                    <Link to={tagLink}>{tag}</Link>
                  </li>
                )
              }
            })}
          </ul>
        </div>

        <div className="projects">
          {posts
            .filter(post => post.node.fields.collection === "portfolio")
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({ node: post }, index) => {
              return <ProjectCard post={post} index={index} />
            })}
        </div>
      </main>
    </Layout>
  )
}
export default Blog

export const pageQuery = graphql`
         query AllBlogsQuery {
           allMarkdownRemark(
             sort: {
               order: [DESC, DESC]
               fields: [fields___weight, frontmatter___date]
             }
             filter: {
               fields: {
                 published: { eq: true }
                 collection: { eq: "portfolio"   }
               }
             }
           ) {
             edges {
               node {
                 excerpt(pruneLength: 250)
                 id
                 frontmatter {
                   title
                   description
                   color
                   date(formatString: "MMMM DD, YYYY")
                   tags
                   logo {
                     extension
                     publicURL
                   }
                 }
                 fields {
                   slug
                   collection
                 }
               }
             }
           }
         }
       `
