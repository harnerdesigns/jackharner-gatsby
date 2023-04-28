import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectCard from "../components/portfolio/projectCard"
import ProjectHeader from "../components/portfolio/projectHeader"
import Button from "../components/atoms/button"
import defaultOGImage from "../images/jackHarner-default-OG.jpg"
import _ from "lodash"

export default function Template(props) {
  const post = props.data.markdownRemark
  const { related } = props.pageContext

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title + " - " + post.frontmatter.description}
        description={
          post.frontmatter.title +
          " - " +
          post.frontmatter.description + ", a " +  post.frontmatter.tags[0] + " Project By Jack Harner."
        }
        image={
          post.fields.ogImage ? post.frontmatter.ogImage.childImageSharp.original.src : (post.frontmatter.logo
            ? post.frontmatter.logo.publicURL
            : defaultOGImage)
        }
      />
      <ProjectHeader post={post} />

      {post.fields.externalLink.includes("codepen") && (
              <section className="full black">
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

              </section>
            )}
      <section className="half black">
        <main
          className={
            (post.frontmatter.images && post.frontmatter.images.length > 0
              ? "project__body"
              : "project__body project__body--no-images") + " project--" + _.camelCase(post.frontmatter.title)
          }
        >
          {post.frontmatter.images && post.frontmatter.images.length > 0 ? (
            <section className="project__images">
              {post.frontmatter.images.map((image, index) => {
                console.log(image)
                return image ? (
                  <div class={"img__screen" + (image.childImageSharp.original.height > 700 ? " tall " : " short ") + (image.childImageSharp.original.width > 900 ? " wide " : " narrow ")}>
                    <div className={"img__wrapper"}>
                      <img src={image.childImageSharp.original.src} alt="" />
                    </div>
                  </div>
                  
                  ) : (
                    ""
                    )
                  })}
            </section>
          ) : (
            ""
          )}

          <section className="project__content">
          {post.fields.externalLink && post.wordCount.words > 100 && (
              <Button
                label={post.fields.externalLinkLabel}
                href={post.fields.externalLink}
                size="large"
              />
            )}
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
          <h3>Related Projects</h3>
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
      </section>
    </Layout>
  )
}
export const pageQuery = graphql`
  query ProjectByPath($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      wordCount{
        words
      }
      frontmatter {
        title
        description
        color
        date(formatString: "MMMM DD, YYYY")
        tags
        images {
          childImageSharp {
            original {
              src
              height
              width
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
        unlisted
      }
    }
  }
`
