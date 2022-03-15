import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/layout"
import PageTitle from "../../components/pageTitle"
import SEO from "../../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import tagIcons from "./tag-icons"

const _ = require("lodash")

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const tags = this.props.pageContext.topTags

    var sortedTags = Object.keys(tags).sort(function(a, b) {
      return tags[a] < tags[b]
    })

    console.log(sortedTags)

    return (
      <Layout>
          <SEO title="Blog Tags" />

          <PageTitle>Blog Tags</PageTitle>

          <main className="page_body page_body--grid">
            <div className="tag-grid">
              {sortedTags.map((tag, index) => {
                const tagLink = (tag === 'WordPress' ? `/blog/tags/wordpress/` :  `/blog/tags/${_.kebabCase(tag)}/`)
                return (
                  <Link to={tagLink} className="tag__card">
                    <FontAwesomeIcon fixedWidth icon={tagIcons[tag]} />
                      <h3>{tag}</h3>
                      <h4>
                        {tags[tag]} Post{tags[tag] > 1 ? "s" : ""}
                      </h4>
                    <div className="tag__post-preview">
                      {posts
                        .filter(({ node: post }) =>
                          post.frontmatter.tags
                            ? post.frontmatter.tags.includes(tag)
                            : false
                        )
                        .map(({ node: post }, i) => {
                          if (i < 4) {
                            return (
                              <img
                                src={
                                  post.frontmatter.featuredImage.childImageSharp
                                    .resize.src
                                }
                                alt={
                                  post.frontmatter.title +
                                  " | " +
                                  post.frontmatter.subtitle
                                }
                                title={
                                  post.frontmatter.title +
                                  " | " +
                                  post.frontmatter.subtitle
                                }
                              />
                            )
                          } else {
                            return ""
                          }
                        })}
                    </div>
                  </Link>
                )
              })}
            </div>
          </main>
      </Layout>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagsPage {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fields: {
          published: { eq: true }
          unlisted: { eq: false }
          collection: { eq: "blog" }
        }
      }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            tags
            title
            subtitle
            featuredImage {
              childImageSharp {
                resize(width: 150, height: 150, cropFocus: CENTER) {
                  src
                }
              }
            }
          }
          fields {
            published
            unlisted
          }
        }
      }
    }
  }
`
