import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ShareLinks from "../components/social/shareLinks"
import RssCard from "../components/blog/rssCard"
import Brave from "../components/verts/brave"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import BlogTitle from "../components/blog/blogTitle"
import BlogCard from "../components/blog/blogCard"

export default function Template(props) {
  const post = props.data.markdownRemark
  const { related } = props.pageContext
  let postContent = post.html
  postContent = postContent.replace(
    "</p>",
    '</p><script async="true" type="text/javascript" src="//cdn.carbonads.com/carbon.js?serve=CE7ITK7W&placement=jackharnercom" id="_carbonads_js"></script>'
  )
  return (
    <Layout>
<SEO
        title={post.frontmatter.title}
        description={post.excerpt}
        image={
          post.fields.ogImage
            ? post.frontmatter.ogImage.childImageSharp.sizes.src
            : post.frontmatter.featuredImage.childImageSharp.sizes.src
        }
      />      <BlogTitle post={post} /> 
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
        <nav className="postNavigation">
            <h3>Related Posts</h3>
            <ul>
              {related.map((post, index) => {
                return (
                  <li>
                    <BlogCard post={post} small />
                  </li>
                )
              })}
            </ul>
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
        date(formatString: "MMMM DD, YYYY")
        collection
        unlisted
      }
    }
  }
`
