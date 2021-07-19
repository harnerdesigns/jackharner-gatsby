import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTitle from "../components/pageTitle"
import BlogCard from "../components/blog/blogCard"

import TopTags from "../components/common/topTags"
import Shuffler from "../components/verts/shuffler"

const Blog = ({ data, pageContext }) => {
  const { edges: posts } = data.allMarkdownRemark
  const tags = pageContext.topTags
    // Iterate through each post, putting all found tags into `tags`
  var topTags = Object.keys(tags).sort(function(a, b) {
    return tags[a] < tags[b] 
  })

  return (
    <Layout>
      <SEO title={`Blog Archive | ${topTags[0]}, ${topTags[1]}, & More `} />
      <PageTitle>Blog</PageTitle>
      <main className="page_body page_body--grid">
        
        <TopTags topTags={topTags} postType='blog' />

        <div className="blog-posts">
          {posts
            .filter(post => post.node.fields.collection === "blog")
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({ node: post }, index) => {
              let ShowCard;
              
              if((index + 1) % 6 ===  0) {ShowCard = <Shuffler index={(index + 1) / 5} />}
              return (
                <>
                  <BlogCard post={post} index={index} large={(index + 1) % 5 === 0 || index === 0} />
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
        fields: { published: { eq: true },  unlisted: { eq: false }, collection: { eq: "blog" } }
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
            updated(formatString: "MMMM DD, YYYY")
            tags
            published
            featuredImage {
              childImageSharp {
                resize(width: 1000, height: 1000, cropFocus: CENTER) {
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
