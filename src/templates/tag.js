import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import BlogCard from "../components/blog/blogCard"
import PageTitle from "../components/pageTitle"
import ProjectCard from "../components/portfolio/projectCard"
import TopTags from "../components/common/topTags"
import SEO from "../components/seo"
import tagDescriptions from "./tags/tag-descriptions"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import tagIcons from "./tags/tag-icons"

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const tag = this.props.pageContext.tag
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const postType = this.props.pageContext.postType

    const postTypeLabels =
      postType === "portfolio"
        ? { single: "Project", plural: "Projects", type: "Project" }
        : { single: "Blog Post", plural: "Blog Posts", type: "Blog" }

    let topTags = this.props.pageContext.topTags
    topTags = Object.keys(topTags).sort(function(a, b) {
      return topTags[a] < topTags[b]
    })

    const tagHeader = <>{totalCount} {
      totalCount === 1 ? postTypeLabels.single : postTypeLabels.plural
    } Tagged {tag}</>

    return (
      <Layout>
          <SEO title={`${tag} ${postTypeLabels.plural}`} />

          <PageTitle><FontAwesomeIcon fixedWidth icon={tagIcons[tag]} /> {tagHeader}</PageTitle>
          {tagDescriptions[tag] && <p className="tag__description">{tagDescriptions[tag]}</p>}
          <section className="slim black">
            <TopTags
              topTags={topTags}
              postType={postType}
              back={true}
              exclude={tag}
              limit={5}
            />
          </section>
          <main className="page_body page_body--grid">
            <div className={postType === "blog" ? "blog-posts" : "projects"}>
              {posts
                .filter(post => post.node.frontmatter.title.length > 0)
                .map(({ node: post }, index) => {

                  let card =
                    postType === "portfolio" ? (
                      <ProjectCard post={post} index={index} />
                    ) : (
                      <>
                        <BlogCard
                          post={post}
                          index={index}
                        />
                      </>
                    )

                  return <>{card}</>
                })}

            </div>
          </main>
      </Layout>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`query SingleTagPage($tag: String, $postType: String) {
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(
    limit: 1000
    sort: [{fields: {weight: DESC}}, {fields: {date: DESC}}]
    filter: {frontmatter: {tags: {in: [$tag]}}, fields: {published: {eq: true}, unlisted: {ne: true}, collection: {eq: $postType}}}
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
          updated(formatString: "MMMM DD, YYYY")
          published
          description
          featuredImage {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, height: 350, transformOptions: {fit: COVER})
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
          weight
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
}`
