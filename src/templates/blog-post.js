import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogTitle from "../components/blog/blogTitle";
// import '../css/blog-post.css';
export default function Template({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <BlogTitle post={post} />
      <main className="page_body">
        <div className="blog-post">
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
  markdownRemark(fields: {slug: {eq: $slug}}) {
    html
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      title
      subtitle
      featuredImage {
        absolutePath
        childImageSharp {
          sizes {
            ...GatsbyImageSharpSizes
            src
          }
        }
      }
    }
  }
}
`