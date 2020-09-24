import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectCard from "../components/portfolio/projectCard"
import ProjectHeader from "../components/portfolio/projectHeader"
import Button from "../components/atoms/button"
import defaultOGImage from "../images/jackHarner-default-OG.jpg"

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
        image={
          post.frontmatter.logo
            ? post.frontmatter.logo.publicURL
            : defaultOGImage
        }
      />
      <ProjectHeader post={post} />

      {post.fields.externalLink.includes("codepen") && (
              <container className="full black">
                <p
                  className="codepen"
                  data-height="100%"
                  data-theme-id="17675"
                  data-default-tab="result"
                  data-user="jackharner"
                  data-slug-hash="jPmKGe"
                  style={{height: "100vh", boxSizing: 'border-box', display: 'flex', alignItems: 'center', justifyContent:' center', border: '2px solid', margin:" 1em 0", padding: "1em"}}
                  data-pen-title="OS X"
                >
                  <span>
                    See the Pen{" "}
                    <a href="https://codepen.io/jackharner/pen/jPmKGe">OS X</a>{" "}
                    by Jack Harner (
                    <a href="https://codepen.io/jackharner">@jackharner</a>) on{" "}
                    <a href="https://codepen.io">CodePen</a>.
                  </span>
                </p>

              </container>
            )}
      <container className="half black">
        <main
          className={
            post.frontmatter.images && post.frontmatter.images.length > 0
              ? "project__body"
              : "project__body project__body--no-images"
          }
        >
          {post.frontmatter.images && post.frontmatter.images.length > 0 ? (
            <section className="project__images">
              {post.frontmatter.images.map((image, index) => {
                return image ? (
                  <img src={image.childImageSharp.sizes.src} alt="" />
                ) : (
                  ""
                )
              })}
            </section>
          ) : (
            ""
          )}

          <section className="project__content">

            {post.html && (
              <div className="project__text" dangerouslySetInnerHTML={{ __html: post.html }} />
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

        <nav className="projectNavigation">
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
