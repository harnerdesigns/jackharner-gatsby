import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTitle from "../components/pageTitle"
import BlogCard from "../components/blog/blogCard"

import RssCard from "../components/blog/rssCard"
import tagIcons from "./tags/tag-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Brave from "../components/verts/brave"
import TopTags from "../components/common/topTags"

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
      <SEO title="Blog" />
      <PageTitle>Blog</PageTitle>
      <main className="page_body page_body--grid">
        
        <TopTags topTags={topTags} postType='blog' />

        <div className="blog-posts">
          {posts
            .filter(post => post.node.fields.collection === "blog")
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({ node: post }, index) => {
              let ShowCard;
              
              if(index === 2) {ShowCard = <RssCard />}
              if(index === 5) {ShowCard = <Brave />}
              return (
                <>
                  <BlogCard post={post} index={index} />
                  {ShowCard}
                </>
              )
            })}
        </div>
      </main>
    </Layout>
  )
}
export default Blog

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: {
        order: [DESC, DESC]
        fields: [fields___weight, fields___date]
      }
      filter: {
        fields: { published: { eq: true }, collection: { eq: "blog" } }
      }
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            subtitle
            date(formatString: "MMMM DD, YYYY")
            tags
            published
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
            date(formatString: "MMMM DD, YYYY")

          }
        }
      }
    }
  }
`
