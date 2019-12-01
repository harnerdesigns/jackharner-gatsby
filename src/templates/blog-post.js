import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogTitle from "../components/blog/blogTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from "../components/atoms/button";

// import '../css/blog-post.css';
export default function Template(props) {
  const post = props.data.markdownRemark
  const { previous, next } = props.pageContext
  console.log(previous);
  return (
    <Layout>
      <SEO title={post.frontmatter.title} image={post.frontmatter.featuredImage.childImageSharp.sizes.src} />
      <BlogTitle post={post} />
      <container className="half black content">
        {(post.fields.externalLink ? <Button href={post.fields.externalLink} target="_blank" rel="noopener noreferrer" icon="external-link-alt" label={{__html:  " <strong>See Full Post</strong> @ " + (new URL(post.fields.externalLink)).hostname}}type="large" extraStyle={{width: '80%'}} />
           : "")}
        <main className="post__body" dangerouslySetInnerHTML={{ __html: post.html }}>

        </main>

      </container>
      <nav class="postNavigation">
        <ul>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                <FontAwesomeIcon icon="arrow-left"></FontAwesomeIcon> {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li className="title"><h3>More Posts by Jack Harner</h3></li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} <FontAwesomeIcon icon="arrow-right"></FontAwesomeIcon>

              </Link>
            )}
          </li>
        </ul>
      </nav>
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
            originalImg
          }
        }
      }
    }
    fields{
      externalLink
    }
  }
}
`