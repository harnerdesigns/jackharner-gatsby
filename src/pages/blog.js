import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTitle from "../components/pageTitle"
import BlogCard from "../components/blog/blogCard"

const Blog = ({ data }) => {

  const { edges: posts } = data.allMarkdownRemark

  return (

    <Layout>
      <SEO title="Blog" />
        <PageTitle>Blog</PageTitle>
      <main className="page_body page_body--grid">


        <div className="blog-posts">
          {posts
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({ node: post }) => {
              return (
                  <BlogCard post={post} />
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
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
          fields {
            slug
          }
        }
      }
    }
  }
` 