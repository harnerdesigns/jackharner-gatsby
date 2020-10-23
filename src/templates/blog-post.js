import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogTitle from "../components/blog/blogTitle";
import Button from "../components/atoms/button";
import BlogCard from "../components/blog/blogCard";
import ShareLinks from "../components/social/shareLinks";
import RssCard from "../components/blog/rssCard";
import Brave from "../components/verts/brave";
import Vert from "../components/verts/shuffler";

export default function Template(props) {
  const post = props.data.markdownRemark
  const { related, newsletter } = props.pageContext
  let postContent = post.html
  postContent = postContent.replace("</p>",'</p><script async="true" type="text/javascript" src="//cdn.carbonads.com/carbon.js?serve=CE7ITK7W&placement=jackharnercom" id="_carbonads_js"></script>')
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
      />
      <BlogTitle post={post} />
      <section className="half black content">
        {post.fields.externalLink ? (
          <Button
            href={post.fields.externalLink}
            target="_blank"
            rel="noopener noreferrer"
            icon="external-link-alt"
            label={
              " <strong>See Full Post</strong> @ " +
              post.fields.externalLink.match(
                /^https?:\/\/([^/?#]+)(?:[/?#]|$)/i
              )[1]
            }
            size="large"
            extraStyle={{ width: "80%" }}
          />
        ) : (
          ""
        )}

{(newsletter ? <Link to="/newsletter"><h4 style={{padding: "1rem", background: "var(--color)", color: "var(--text-color)"}}>Originally Sent To My Newsletter. Get Posts Like This A Week Early By <span style={{fontWeight: 900}}>Signing Up &raquo;</span></h4></Link> : "")}

        
        <main
          className={"post__body " + post.fields.slug}
          dangerouslySetInnerHTML={{ __html:  postContent }}
        >
        </main>
      </section>
      <section className="slim black">
        <section className="post__post-content">
          <Vert />
          <ShareLinks post={post} />
          <RssCard />
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
        </section>
      </section>
    </Layout>
  )
}
export const pageQuery = graphql`
query BlogPostByPath($slug: String!) {
  markdownRemark(fields: {slug: {eq: $slug}}) {
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
    fields{
      externalLink
      slug
      ogImage
      date(formatString: "MMMM DD, YYYY")
      unlisted
    }
  }
}
`