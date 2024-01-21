import React, { useState } from "react"
import { graphql, Link } from "gatsby"

import Layout from "../../components/layout"
import PageTitle from "../../components/pageTitle"
import Seo from "../../components/seo"
import ReadyToGo from "../../components/ready-to-go"

import shopifyLogo from "../../images/logos/shopify.svg"
import shopifyBG from "../../images/logos/shopify-bg.png"
import ProjectCard from "../../components/portfolio/projectCard"
import Quotes from "../../components/testimonies/quotes"


const WhyMe = ({ data, pageContext }) => {

  const { edges: posts } = data.projects
  const { quotes } = data.testimonies.frontmatter

  let filteredQuotes = quotes.filter((node) => node.tags && node.tags.includes('Shopify') ? true : false)

  return (
    <Layout footerCTA={false} className={"service service--shopify"}>
      <Seo title="Shopify Theme Development" />
      <PageTitle>Shopify Theme Development</PageTitle>

      <section className="half black">

        <div className="" style={{ alignItems: "center", justifyContent: "center" }}>

          <img src={shopifyLogo} style={{ maxHeight: "25vh", display: "block", margin: "0 auto" }} />

          <div>
            <h2>Custom Shopify Themes Tailored For Your Brand</h2>
          </div>
        </div>
      </section>

      <section className="shopify-bg half content--centered white">
        <h2>Shopify Powers Millions of E-Commerce Businesses In 150+ Countries.</h2>
      </section>

      <section className="project-grid half black grid grid--3 grid--mobile-1">
        <h2>My Recent Shopify Projects:</h2>
        {posts.map(({ node: post }, index) => {
          return <ProjectCard post={post} index={index} />
        })}
      </section>
      <section className="brand-perks__grid white half content--centered grid grid--2 grid--mobile-1">
        <div>
          <h2 style={{fontSize: "6rem", width: "50%", textAlign: "right" }}>How I Can Help:</h2>
        </div>
        <div>
          <h3>Are You Already On Shopify?</h3>
          <p>I can clean up your existing Shopify theme, or start from scratch.</p>

          <h3>Somewhere Else?</h3>
          <p>I can transfer you to the platform trusted by millions.</p>

          <h3>Brand New To E-Commerce?</h3>
          <p>I'll get you all set up and selling online right away!</p>
        </div>
      </section>

      <section className="half shopify-bg shopify-bg--alt">
        <div className="grid-item--full-width">
          <h2>My Shopify Clients Love Me!</h2>
        </div>
        <Quotes quotes={filteredQuotes} />

      </section>



      <ReadyToGo />

    </Layout>
  )
}

export default WhyMe

export const pageQuery = graphql`query ShopifyPagQuery {
  projects: allMarkdownRemark(
    limit: 5
    sort: [{fields: {weight: DESC}}, {fields: {date: DESC}}]
    filter: {frontmatter: {tags: {in: ["Shopify"]}}, fields: {published: {eq: true}, unlisted: {ne: true}, collection: {eq: "portfolio"}}}
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
  testimonies: markdownRemark(frontmatter: {title: {eq: "Testimonies"}}) {
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
}`
