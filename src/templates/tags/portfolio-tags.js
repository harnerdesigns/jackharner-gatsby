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
        <section className="section">
          <SEO title="Project Tags" />

          <PageTitle>Project Tags</PageTitle>

          <main className="page_body page_body--grid">
            <div className="blog-posts">
              {sortedTags.map((tag, index) => {
                const tagLink = `/portfolio/tags/${_.kebabCase(tag)}/`
                return (
                  <Link to={tagLink} className="tag__card">
                    <h2>
                      <FontAwesomeIcon fixedWidth icon={tagIcons[tag]} />
                      {tag}
                    </h2>{" "}
                    <h4>
                      {tags[tag]} Project{tags[tag] > 1 ? "s" : ""}
                    </h4>
                    <div className="tag__post-preview tag__post-preview--portfolio">
                      {posts
                        .filter(({ node: post }) =>
                          post.frontmatter.tags.includes(tag)
                        )
                        .slice(0, 3)
                        .map(({ node: post }) => {
                          if (post.frontmatter.logo) {
                            return (
                              <div
                                style={{ background: post.frontmatter.color }}
                              >
                                <img
                                  src={post.frontmatter.logo.publicURL}
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
                              </div>
                            )
                          } else {return null}
                        })}
                    </div>
                  </Link>
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
  query PortfolioTagsPage {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fields: { published: { eq: true }, collection: { eq: "portfolio" } }
      }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            description
            color
            date(formatString: "MMMM DD, YYYY")
            tags
            logo {
              extension
              publicURL
            }
          }
          fields {
            slug
            collection
          }
        }
      }
    }
  }
`
