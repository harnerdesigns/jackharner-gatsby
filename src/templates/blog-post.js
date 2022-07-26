import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogTitle from "../components/blog/blogTitle"
import Button from "../components/atoms/button"
import BlogCard from "../components/blog/blogCard"
import ShareLinks from "../components/social/shareLinks"
import Shuffler from "../components/verts/shuffler"
import NewsletterLink from "../components/blog/NewsletterLink"

export default function Template(props) {
  const post = props.data.markdownRemark
  const { related, newsletter } = props.pageContext
  let postContent = post.html
  postContent = postContent.replace(
    "</p>",
    '</p><script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?serve=CE7ITK7W&placement=jackharnercom" id="_carbonads_js"></script>'
  )
  let postContentArray = postContent.split("{{{vert}}}")

  let postContentMap = postContentArray.map((content, index) => {
    return (
      <>
        <main
          className={"post__body " + post.fields.slug}
          dangerouslySetInnerHTML={{ __html: content }}
        ></main>
        {postContentArray.length - 1 > index ? <Shuffler /> : ""}
      </>
    )
  })
  return (
    <Layout>
      <SEO
        title={`${post.frontmatter.title}${
          post.frontmatter.subtitle ? " | " + post.frontmatter.subtitle : ""
        }`}
        description={post.excerpt}
        image={
          post.fields.ogImage
            ? post.frontmatter.ogImage.childImageSharp.original.src
            : post.frontmatter.featuredImage.childImageSharp.original.src
        }
      />
      <BlogTitle post={post} />
      <section className="half content">
        {post.fields.externalLink ? (
          <Button
            href={post.fields.externalLink}
            target="_blank"
            rel="noopener noreferrer"
            icon="external-link-alt"
            label={
              post.fields.externalLinkLabel
                ? post.fields.externalLinkLabel
                : " <strong>See Full Post</strong> @ " +
                  post.fields.externalLink.match(
                    /^https?:\/\/([^/?#]+)(?:[/?#]|$)/i
                  )[1]
            }
            size="large"
            extraStyle={{ width: "80%", zIndex: 2 }}
          />
        ) : (
          ""
        )}

        {newsletter ? <NewsletterLink /> : ""}

        {postContentMap}
      </section>
      <section className="slim black row" style={{ gridGap: "3rem" }}>
        <Shuffler />
        <section className="post__post-content">
          <nav className="postNavigation">
            <h3>Want More?</h3>
            <ul>
              {related.map((post, index) => {
                return (
                  <li>
                    <BlogCard post={post} small />
                  </li>
                )
              })}
            </ul>
            <ShareLinks post={post} />
          </nav>
        </section>
      </section>
      <section className="slim black"></section>
    </Layout>
  )
}
export const pageQuery = graphql`
  query BlogPostByPath($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt(pruneLength: 150)
      wordCount {
        words
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        updated(formatString: "MMMM DD, YYYY")
        title
        subtitle
        tags
        featuredImage {
          absolutePath
          childImageSharp {
            original {
              
              src
              
            }
          }
        }

        ogImage {
          absolutePath
          childImageSharp {
            original {
              
              src
              
            }
          }
        }
      }
      fields {
        externalLink
        externalLinkLabel
        slug
        ogImage
        date(formatString: "MMMM DD, YYYY")
        unlisted
      }
    }
  }
`
