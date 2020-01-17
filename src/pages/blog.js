import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTitle from "../components/pageTitle"
import BlogCard from "../components/blog/blogCard"

import RssCard from "../components/blog/rssCard"

const Blog = ({ data }) => {

  const { edges: posts } = data.allMarkdownRemark

  return (

    <Layout>
      <SEO title="Blog" />
      <PageTitle>Blog</PageTitle>
      <main className="page_body page_body--grid">


        <div className="blog-posts">
          {posts.filter(post => post.node.fields.collection === "blog")
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({ node: post }, index) => {
              const ShowCard = (index === 2 ? <RssCard /> : "")
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
  allMarkdownRemark(sort: {order: [DESC, DESC], fields: [fields___weight, frontmatter___date]}, filter: {fields:{published:{eq:true}}}) {
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
` 