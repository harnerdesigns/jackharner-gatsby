import React, { useState } from "react"
import { graphql, Link } from "gatsby"

import Layout from "../../components/layout"
import PageTitle from "../../components/pageTitle"
import Seo from "../../components/seo"
import ReadyToGo from "../../components/ready-to-go"

import bigcommerceLogo from "../../images/logos/bigcommerce.svg"
import ProjectCard from "../../components/portfolio/projectCard"


const BigCommerce = ({ data, pageContext }) => {

  const { edges: posts } = data.allMarkdownRemark
  return (
    <Layout footerCTA={false} className={"service service--bigcommerce"}>
      <Seo title="Custom BigCommerce Themes" />
      <PageTitle>Custom BigCommerce Themes</PageTitle>

      <section className="slim content black">

        <div className="grid grid--2" style={{alignItems: "center", justifyContent: "center"}}>

          <img src={bigcommerceLogo} style={{ maxHeight: "25vh", display: "block", margin: "0 auto" }} />

          <div>
            <h2>BigCommerce Themes Unique To You & Your Brand or Small Business</h2>
          </div>
        </div>
      </section>

      <section className="project-grid slim black grid grid--3">
        <h2>Recent BigCommerce Projects:</h2>
        {posts.map(({ node: post }, index) => {
          return <ProjectCard post={post} index={index} />
        })}
      </section>


      <ReadyToGo />

    </Layout>
  )
}

export default BigCommerce

export const pageQuery = graphql`
query BigCommercePagQuery {
  allMarkdownRemark(
    limit: 5
    sort: {
      order: [DESC, DESC]
      fields: [fields___weight, fields___date]
    }
    filter: {
      frontmatter: { tags: { in: ["BigCommerce"] } }
      fields: {
        published: { eq: true }
        unlisted: { ne: true }
        collection: { eq: "portfolio" }
      }
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
          updated(formatString: "MMMM DD, YYYY")
          published
          description
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
          weight
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
}
`