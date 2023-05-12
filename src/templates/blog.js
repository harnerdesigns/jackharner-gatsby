import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTitle from "../components/pageTitle"
import BlogCard from "../components/blog/blogCard"

import TopTags from "../components/common/topTags"

const Blog = ({ data, pageContext }) => {
  const { edges: posts } = data.allMarkdownRemark
  const tags = pageContext.topTags
  const drafts = pageContext.drafts
    // Iterate through each post, putting all found tags into `tags`
  var topTags = Object.keys(tags).filter((tag)=>{
    return tag !== "Newsletter"
  }).sort(function(a, b) {
    return tags[a] < tags[b] 
  })

  return (
    <Layout>
      <SEO title={`${posts.length} ${topTags[0]}, ${topTags[1]}, & ${topTags[2]} Blog Posts `} />
      <PageTitle subtitle={drafts ? "" : "Tutorials, Freelancing, Developing for E-Commerce, Life Updates & More."}>{posts.length} Blog {drafts ? "Drafts" : "Posts"}</PageTitle>
      <section className="slim black">
        {!drafts && <TopTags topTags={topTags} postType='blog' />}
      </section>
      <main className="page_body page_body--grid">
        

        <div className="blog-posts page-width">
          {posts
            .filter(post => post.node.fields.collection === "blog")
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({ node: post }, index) => {
              let ShowCard;
              
              return (
                <>
                  <BlogCard post={post} index={index} />
                  {index === 2 && <div className="grid-item--full-width"><script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?serve=CE7ITK7W&placement=jackharnercom" id="_carbonads_js"></script></div>}
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
  query IndexQuery($drafts: Boolean) {
    allMarkdownRemark(
      sort: {
        order: [DESC, DESC]
        fields: [fields___weight, fields___date]
      }
      filter: {
        fields: { published: { ne: $drafts },  unlisted: { eq: false }, collection: { eq: "blog" } }
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
            unlisted
          }
        }
      }
    }
  }
`
