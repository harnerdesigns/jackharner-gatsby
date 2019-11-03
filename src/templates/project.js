import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectCard from "../components/portfolio/projectCard";
// import '../css/blog-post.css';
export default function Template({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO title={post.frontmatter.title} image={post.frontmatter.logo.publicURL} />
        <section class="project__logo">
          <ProjectCard post={post} />
        </section>
      <container className="full black content">

        <main className="project__body">

          {post.frontmatter.images ? <section className="project__images">
            {post.frontmatter.images.map(

              (image, index) => {
                return (
                  <img src={image.childImageSharp.sizes.src}></img>
                )
              }
            )}
          </section> : ""}

          <section className="project__content" dangerouslySetInnerHTML={{ __html: post.html }} />

        </main>

      </container>
    </Layout>
  )
}
export const pageQuery = graphql`
query ProjectByPath($slug: String!) {
  markdownRemark(fields: {slug: {eq: $slug}}) {
 
        id
        html
        frontmatter {
          title
          description
          color
          date(formatString: "MMMM DD, YYYY")
          tags
          images{
            childImageSharp {
              sizes {
                src
              }
            }
          }
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
`