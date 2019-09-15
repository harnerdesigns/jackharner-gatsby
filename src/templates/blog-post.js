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
      <container className="full black content">
        <main className="post__body" dangerouslySetInnerHTML={{ __html: post.html }}>
          
        </main>
        
        </container>
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