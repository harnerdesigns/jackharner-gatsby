import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import BlogCard from "../components/blog/blogCard"
import PageTitle from "../components/pageTitle"
import ProjectCard from "../components/portfolio/projectCard"
import TopTags from "../components/common/topTags"
import Vert from "../components/verts/vert"
class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const tag = this.props.pageContext.tag
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const postType = this.props.pageContext.postType

    const postTypeLabels =
      postType === "portfolio"
        ? { single: "Project", plural: "Projects", type: "Project" }
        : { single: "Blog Post", plural: "Blog Posts", type: "Blog" }

    let topTags = this.props.pageContext.topTags
    topTags = Object.keys(topTags).sort(function (a, b) {
      return topTags[a] < topTags[b]
    })

    const tagHeader = `${totalCount} ${tag} ${
      totalCount === 1 ? postTypeLabels.single : postTypeLabels.plural
      }`

    return (
      <Layout>
        <section className="section">
          <Helmet title={`${tag} ${postTypeLabels.plural} | ${title}`} />

          <PageTitle>{tagHeader}</PageTitle>

          <main className="page_body page_body--grid">
            <TopTags topTags={topTags} postType={postType} back={true} exclude={tag} />


            <div className="blog-posts">
              {posts
                .filter(post => post.node.frontmatter.title.length > 0)
                .map(({ node: post }, index) => {
                  let ShowCard;

                  if ((index + 1) % 6 === 0) { ShowCard = <Vert index={(index + 1) / 6} /> }

                  let card =
                    postType === "portfolio" ? (
                      <ProjectCard post={post} index={index} />
                    ) : (
                        <><BlogCard post={post} index={index} large={(index + 1) % 5 === 0 || index === 0} />
                          {ShowCard}</>

                      )

                  return <>{card}</>
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
  query SingleTagPage($tag: String, $postType: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { tags: { in: [$tag] } }
        fields: { published: { eq: true }, unlisted: { eq: false }, collection: { eq: $postType } }
      }
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            subtitle
            date(formatString: "MMMM DD, YYYY")
            published
            featuredImage {
              childImageSharp {
                resize(width: 500, height: 500, cropFocus: CENTER) {
                  src
                }
              }
            }
            logo {
              publicURL
            }
            tags
            color
          }
          fields {
            slug
            collection
            externalLink
            published
            unlisted
          }
        }
      }
    }
  }
`
