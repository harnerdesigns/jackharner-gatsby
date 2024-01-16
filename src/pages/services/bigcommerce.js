import React, { useState } from "react"
import { graphql, Link } from "gatsby"

import Layout from "../../components/layout"
import PageTitle from "../../components/pageTitle"
import Seo from "../../components/seo"
import ReadyToGo from "../../components/ready-to-go"

import bigcommerceLogo from "../../images/logos/bigcommerce.svg"
import ProjectCard from "../../components/portfolio/projectCard"
import Quotes from "../../components/testimonies/quotes"


const BigCommerce = ({ data, pageContext }) => {

  const { edges: posts } = data.projects
  const { quotes } = data.testimonies.frontmatter

  let filteredQuotes = quotes.filter((node) => node.tags && node.tags.includes('BigCommerce') ? true : false)

  return (
    <Layout footerCTA={false} className={"service service--bigcommerce"}>
      <Seo title="Custom BigCommerce Themes" />
      <PageTitle>Custom BigCommerce Themes</PageTitle>

      <section className="slim content black">

        <div className="grid grid--2 grid--mobile-1" style={{alignItems: "center", justifyContent: "center"}}>

          <img src={bigcommerceLogo} style={{ maxHeight: "25vh", display: "block", margin: "0 auto" }} />

          <div>
            <h2>BigCommerce Stencil Themes Unique To You & Your Business</h2>
          </div>
        </div>
      </section>
      <section className="brand-perks__grid white half content--centered grid grid--2 grid--mobile-1">
        <div>
          <h2>How I Can Help:</h2>
        </div>
        <div>
          <h3>Custom Theme Development</h3>
          <p>I can clean up your existing BigCommerce theme, or whip up one of my delicious, made from scratch, BigCommerce themes.</p>

          <h3>BigCommerce Theme CI/CD Setup</h3>
          <p>Already building a BigCommerce theme and want an easier deployment process? Let me integrate my BigCommerce Deployment workflow to automate site updates.</p>

          <h3>BigCommerce Store Setup</h3>
          <p>I'll get your store all set up and you selling online right away!</p>
        </div>
      </section>
      <section className="project-grid slim black grid grid--3 grid--mobile-1">
        <h2><Link to="/portfolio/tags/big-commerce">Recent BigCommerce Projects:</Link></h2>
        {posts.map(({ node: post }, index) => {
          return <ProjectCard post={post} index={index} />
        })}
      </section>

      

      {/* <section className="half shopify-bg shopify-bg--alt">
        <div className="grid-item--full-width">
          <h2>My BigCommerce Clients Love Me!</h2>
        </div>
        <Quotes quotes={filteredQuotes} />

      </section> */}

      <ReadyToGo />

    </Layout>
  )
}

export default BigCommerce

export const pageQuery = graphql`query BigCommercePagQuery {
  projects: allMarkdownRemark(
    limit: 5
    sort: [{fields: {weight: DESC}}, {fields: {date: DESC}}]
    filter: {frontmatter: {tags: {in: ["BigCommerce"]}}, fields: {published: {eq: true}, unlisted: {ne: true}, collection: {eq: "portfolio"}}}
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
