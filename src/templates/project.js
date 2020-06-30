import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectCard from "../components/portfolio/projectCard"
import ProjectHeader from "../components/portfolio/projectHeader"
import Button from "../components/atoms/button"
import defaultOGImage from "../images/Jack-Harner-Open-Graph--large.jpg"


export default function Template(props) {
  const post = props.data.markdownRemark
  const { related } = props.pageContext

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title + " » " + post.frontmatter.description}
        description={
          post.frontmatter.title +
          " - " +
          post.frontmatter.description +
          " By Jack Harner."
        }
        image={post.frontmatter.logo ? post.frontmatter.logo.publicURL : defaultOGImage }
      />
      <ProjectHeader post={post} />
      <container className="half black">
        <main
          className={
            post.frontmatter.images
              ? "project__body"
              : "project__body project__body--no-images"
          }
        >
          {post.frontmatter.images && post.frontmatter.images.length > 0 ? (
            <section className="project__images">
              {post.frontmatter.images.map((image, index) => {
                return image ? <img src={image.childImageSharp.sizes.src} alt="" /> : ""
              })}
            </section>
          ) : (
            ""
          )}

          <section className="project__content">
            {post.html && (
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            )}
            {post.fields.externalLink && (
              <Button
                label={post.fields.externalLinkLabel}
                href={post.fields.externalLink}
                size="large"
              />
            )}
          </section>
        </main>

        <nav class="projectNavigation">
          <h3>More Projects</h3>
          <ul>
            {related.map((post, index) => {
              return (
                <li>
                  <ProjectCard post={post} small />
                </li>
              )
            })}
          </ul>
        </nav>
      </container>
    </Layout>
  )
}
export const pageQuery = graphql`
  query ProjectByPath($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        description
        color
        date(formatString: "MMMM DD, YYYY")
        tags
        images {
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
        externalLink
        externalLinkLabel
      }
    }
  }
`
