import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectCard from "../components/portfolio/projectCard";
// import '../css/blog-post.css';
export default function Template(props) {
  const post = props.data.markdownRemark
  const { related } = props.pageContext

  return (
    <Layout>
      <SEO title={post.frontmatter.title} image={post.frontmatter.logo.publicURL} />
      <section class="project__logo">
        <ProjectCard post={post} />
      </section>
      <container className="half black content">

        <main className={post.frontmatter.images ? "project__body" : "project__body project__body--no-images"} >

          {post.frontmatter.images ? <section className="project__images">
            {post.frontmatter.images.map(

              (image, index) => {
                return (
                  <img src={image.childImageSharp.sizes.src} alt=""></img>
                )
              }
            )}
          </section> : ""}

          <section className="project__content" dangerouslySetInnerHTML={{ __html: post.html }} />



        </main>

        <nav class="projectNavigation">
          <h3>More Projects</h3>
          <ul>

            {related.map((post, index)=>{
              return <li><ProjectCard post={post} small/></li>
            })}

          </ul>
        </nav>

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