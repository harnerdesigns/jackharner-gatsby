import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTitle from "../components/pageTitle"
import ProjectCard from "../components/portfolio/projectCard"
import TopTags from "../components/common/topTags"

import portfolioOG from "../images/portfolio-ogImage.png"

const Blog = ({ data, pageContext }) => {
  const { edges: posts } = data.allMarkdownRemark

  const tags = pageContext.topTags
  // Iterate through each post, putting all found tags into `tags`
  var topTags = Object.keys(tags).sort(function(a, b) {
    return tags[a] < tags[b]
  })

  return (
    <Layout >
      <SEO
        title={`Portfolio | ${topTags[0]}, ${topTags[1]}, ${topTags[2]}, & More `}
        description={`Take a closer look at some of Jack's best E-Commerce & Web Development Work. `}
        image={portfolioOG}
      />
      <PageTitle subtitle="Allow me to present some of my best work from throughout my 10+ year career in web development.">Portfolio</PageTitle>
      <section className="slim black">
        <TopTags topTags={topTags} postType="portfolio" />
      </section>
      <main className="page_body page_body--grid">

        <div className="projects">
          {posts
            .filter(post => post.node.fields.collection === "portfolio")
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({ node: post }, index) => {
              return <ProjectCard post={post} index={index} />
            })}
        </div>
      </main>
    </Layout>
  )
}
export default Blog

export const pageQuery = graphql`query AllBlogsQuery {
  allMarkdownRemark(
    sort: [{fields: {weight: DESC}}, {frontmatter: {date: DESC}}]
    filter: {fields: {published: {eq: true}, unlisted: {eq: false}, collection: {eq: "portfolio"}}}
  ) {
    edges {
      node {
        excerpt(pruneLength: 250)
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
}`
