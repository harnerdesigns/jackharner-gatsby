import React, { useState } from "react"
import { graphql, Link } from "gatsby"

import Layout from "../../components/layout"
import PageTitle from "../../components/pageTitle"
import Seo from "../../components/seo"
import ReadyToGo from "../../components/ready-to-go"

import shopifyLogo from "../../images/logos/shopify.svg"
import ProjectCard from "../../components/portfolio/projectCard"


const WhyMe = ({ data, pageContext }) => {

  const { edges: posts } = data.allMarkdownRemark
  return (
    <Layout footerCTA={false}>
      <Seo title="Shopify Theme Development" />
      <PageTitle>Shopify Theme Development</PageTitle>

      <section className="slim content black">

        <div className="grid grid--2" style={{alignItems: "center", justifyContent: "center"}}>

          <img src={shopifyLogo} style={{ maxHeight: "25vh", display: "block", margin: "0 auto" }} />

          <div>
            <h2>Custom Shopify Themes Tailored For Your Brand or Small Business</h2>
          </div>
        </div>
      </section>

      <section className="slim black grid grid--3">
        <h2>Recent Shopify Projects:</h2>
        {posts.map(({ node: post }, index) => {
          return <ProjectCard post={post} index={index} />
        })}
      </section>


      <ReadyToGo />

    </Layout>
  )
}

export default WhyMe

export const pageQuery = graphql`
query ShopifyPagQuery {
  allMarkdownRemark(
    limit: 5
    sort: {
      order: [DESC, DESC]
      fields: [fields___weight, fields___date]
    }
    filter: {
      frontmatter: { tags: { in: ["Shopify"] } }
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
