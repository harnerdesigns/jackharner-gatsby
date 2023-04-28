import React, { useState } from "react"
import { graphql, Link } from "gatsby"

import Layout from "../../components/layout"
import PageTitle from "../../components/pageTitle"
import Seo from "../../components/seo"
import ReadyToGo from "../../components/ready-to-go"

import wordpressLogo from "../../images/logos/wordpress.png"
import ProjectCard from "../../components/portfolio/projectCard"
import Quotes from "../../components/testimonies/quotes"


const BigCommerce = ({ data, pageContext }) => {

  const { edges: posts } = data.projects

  const { quotes } = data.testimonies.frontmatter

  let filteredQuotes = quotes.filter((node) => node.tags && node.tags.includes('WordPress') ? true : false)


  return (
    <Layout footerCTA={false} className={"service service--wordpress"}>
      <Seo title="Custom WordPress Themes & Plugins" />
      <PageTitle>WordPress Theme & Plugin Development</PageTitle>

      <section className="slim content black">

        <div className="grid grid--2" style={{alignItems: "center", justifyContent: "center"}}>

          <img src={wordpressLogo} style={{ maxHeight: "25vh", display: "block", margin: "0 auto" }} />

          <div>
            <h2>WordPress Plugins & Themes Solving YOUR Unique Business Needs</h2>
          </div>
        </div>
      </section>

      <section className="project-grid slim black grid grid--3">
        <h2>Recent WordPress Projects:</h2>
        {posts.map(({ node: post }, index) => {
          return <ProjectCard post={post} index={index} />
        })}
      </section>

      <section className="half">
        <div className="grid-item--full-width">
          <h2>My WordPress Clients Love Me!</h2>
        </div>
        <Quotes quotes={filteredQuotes} />

      </section>



      <ReadyToGo />

    </Layout>
  )
}

export default BigCommerce

export const pageQuery = graphql`
query BigCommercePagQuery {
  projects: allMarkdownRemark(
    limit: 5
    sort: {
      order: [DESC, DESC]
      fields: [fields___weight, fields___date]
    }
    filter: {
      frontmatter: { tags: { in: ["WordPress"] } }
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
  testimonies: markdownRemark(frontmatter: { title: { eq: "Testimonies" } }) {
    fields {
      slug
    }
    frontmatter {
      title
      quotes {
        quote
        link
        by
        title
        tags
      }
    }
  }
}
`
