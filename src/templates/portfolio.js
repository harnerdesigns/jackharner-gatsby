import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTitle from "../components/pageTitle"
import ProjectCard from "../components/portfolio/projectCard"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import tagIcons from "./tags/tag-icons"

const _ = require("lodash")

const Blog = ({ data, pageContext }) => {
  const { edges: posts } = data.allMarkdownRemark

  const tags = pageContext.topTags
    // Iterate through each post, putting all found tags into `tags`
  var topTags = Object.keys(tags).sort(function(a, b) {
    return tags[a] < tags[b]
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
                    <Link to={tagLink}><FontAwesomeIcon fixedWidth icon={tagIcons[tag]} />&nbsp;{tag}</Link>
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