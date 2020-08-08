import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ShareLinks from "../components/social/shareLinks"
import RssCard from "../components/blog/rssCard"
import Brave from "../components/verts/brave"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import BlogTitle from "../components/blog/blogTitle"

export default function Template(props) {
  const post = props.data.markdownRemark
  const { next, previous } = props.pageContext
  let postContent = post.html
  postContent = postContent.replace(
    "</p>",
    '</p><script async="true" type="text/javascript" src="//cdn.carbonads.com/carbon.js?serve=CE7ITK7W&placement=jackharnercom" id="_carbonads_js"></script>'
  )
  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <BlogTitle post={post} /> 
      <container className="half black content">
        <Link to="/newsletter" className="newsletter-signup">
          <FontAwesomeIcon icon="envelope" /> Sign Up For My Newsletter & Get
          Early Access To These Posts.
        </Link>
        <main
          className={"post__body " + post.fields.slug}
          dangerouslySetInnerHTML={{ __html: postContent }}
        ></main>
        <Link to="/newsletter" className="newsletter-signup">
          <FontAwesomeIcon icon="envelope" /> Sign Up For My Newsletter & Get
          Early Access To These Posts.
        </Link>
        <nav className="newsletterNavigation">
          {next ? (
            <Link to={next.fields.slug} className="next-post">
              <FontAwesomeIcon icon="arrow-left" /> {next.frontmatter.title}
            </Link>
          ) : (
            ""
          )}
          <h4>Read More</h4>
          {previous ? (
            <Link to={previous.fields.slug} className="previous-post">
              {previous.frontmatter.title}{" "}
              <FontAwesomeIcon icon="arrow-right" />
            </Link>
          ) : (
            ""
          )}
        </nav>
      </container>
      <container className="slim black">
        <section className="post__post-content">
          <Brave />
          <ShareLinks post={post} />
          <RssCard />
        </section>
      </container>
    </Layout>
  )
}
export const pageQuery = graphql`
  query NewsletterByPath($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt(pruneLength: 150)
      wordCount {
        words
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        subtitle
        tags
        featuredImage {
          absolutePath
          childImageSharp {
            sizes {
              ...GatsbyImageSharpSizes
              src
              originalImg
            }
          }
        }
  
        ogImage {
          absolutePath
          childImageSharp {
            sizes {
              ...GatsbyImageSharpSizes
              src
              originalImg
            }
          }
        }
      }
      fields {
        slug
        ogImage
        collection
        unlisted
      }
    }
  }
`
