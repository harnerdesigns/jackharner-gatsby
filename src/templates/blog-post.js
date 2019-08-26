import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import '../css/blog-post.css';
export default function Template({ data }) {
  const post = data.markdownRemark
      return (
      <Layout>
        <SEO title={post.frontmatter.title} />
        <main className="page_body">
            <div className="blog-post">
                <h1>{post.frontmatter.title}</h1>
                <h2>{post.frontmatter.subtitle}</h2>
                <div
                    className="blog-post-content"
                    dangerouslySetInnerHTML={{ __html: post.html }}
                />
            </div>
        </main>
      </Layout>
    )
}
export const pageQuery = graphql`
  query BlogPostByPath($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        subtitle
      }
    }
  }
`