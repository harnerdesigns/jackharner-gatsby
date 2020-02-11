import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import BlogCard from '../components/blog/blogCard'
import RssCard from '../components/blog/rssCard'
import PageTitle from '../components/pageTitle'

const _ = require("lodash");


class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map(post => (
      <li key={post.node.fields.slug}>
        <Link to={post.node.fields.slug}>
          <h2 className="is-size-2">{post.node.frontmatter.title}</h2>
        </Link>
      </li>
    ))
    const tag = this.props.pageContext.tag
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    let topTags = this.props.pageContext.topTags

    
    topTags = Object.keys(topTags).sort(function (a, b) {
      
      return topTags[a] < topTags[b];
      
    });
    let filteredTags = topTags.filter(topTag => topTag !== tag)

    const tagHeader = `${totalCount} Post${
      totalCount === 1 ? '' : 's'
      } Tagged “${tag}”`

    return (
      <Layout>
        <section className="section">
          <Helmet title={`${tag} Blog Posts | ${title}`} />

          <PageTitle>{tagHeader}</PageTitle>


          <main className="page_body page_body--grid">

            <div className="top-tags">
              <Link to="/blog" style={{ margin: "0 auto 0 0.5em" }}>&laquo; Back to All Posts</Link>

              <ul>
                <li>Top&nbsp;<Link to="/tags">Blog&nbsp;Tags</Link>:</li>
                {filteredTags.map((tag, i) => {
                  const tagLink = `/tags/${_.kebabCase(tag)}/`
                  if (i < 6) {

                    return (<li><Link to={tagLink}>{tag}</Link></li>)

                  }
                })
                }
              </ul>

            </div>

            <div className="blog-posts">
              {posts.filter(post => post.node.frontmatter.title.length > 0)
                .map(({ node: post }, index) => {
                  const ShowCard = (index === 2 ? <RssCard /> : "")
                  return (
                    <>
                      <BlogCard post={post} index={index} />
                      {ShowCard}
                    </>
                  )
                })}
            </div>
          </main>
        </section>
      </Layout>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
query TagPage($tag: String) {
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(limit: 1000, sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {tags: {in: [$tag]}}, fields: {published: {eq: true}, collection: {eq: "blog"}}}) {
    totalCount
    edges {
      node {
        excerpt(pruneLength: 250)
        id
        frontmatter {
          title
          subtitle
          date(formatString: "MMMM DD, YYYY")
          featuredImage {
            childImageSharp {
              resize(width: 500, height: 500, cropFocus: CENTER) {
                src
              }
            }
          }
        }
        fields {
          slug
          collection
          externalLink
          published
        }
      }
    }
  }
}

`