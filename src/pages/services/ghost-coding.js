import React, { useState } from "react"
import { graphql, Link } from "gatsby"

import Layout from "../../components/layout"
import PageTitle from "../../components/pageTitle"
import Seo from "../../components/seo"
import ReadyToGo from "../../components/ready-to-go"

import bigcommerceLogo from "../../images/logos/bigcommerce.svg"
import shopifyLogo from "../../images/logos/shopify.svg"
import wordpressLogo from "../../images/logos/wordpress.svg"
import calendarIcon from "../../images/illustrations/calendar.svg"
import ghost from "../../images/illustrations/ghost.svg"

import ProjectCard from "../../components/portfolio/projectCard"


const GhostCoding = ({ data, pageContext }) => {

  const { edges: posts } = data.allMarkdownRemark
  return (
    <Layout footerCTA={false} className={"service service--ghost-coding"}>
      <Seo title="Ghost Coding" />
      <PageTitle>Ghost Coding</PageTitle>

      <section className="slim black content content--centered grid grid--2" style={{alignItems: "center", justifyContent: "center"}}>

          <div><img src={ghost} className="ghost-image bounce" /></div>

          <div>
            <h2>Your clients will never even know I'm there...</h2>
            <h3>Need an extra <span style={{ color: "var(--text-color--inverted)", textShadow: "0 0 15px #fff, 0 0 10px #fff" }}>invisible</span> set of hands for your web development agency?</h3><Link to="/hire-me" className="button button--primary button--large">Let's Chat &raquo;</Link>
          </div>
      </section>


      <section className="brand-perks__grid white half content--centered grid grid--4">
        <div style={{ gridColumn: "1 / -1" }}><h2>White Labeled Web Development Services</h2></div>
        <Link to="/portfolio/tags/shopify">
          <img src={shopifyLogo} style={{ maxHeight: "25vh", display: "block", margin: "0 auto", filter: "invert(1)" }} />

          <h3>Shopify</h3>
          <h4>My skills and abilities with Shopify Liquid flow like water.</h4>
          <Link to="/portfolio/tags/shopify">View My Shopify Work &raquo;</Link>
        </Link>
        <Link to="/portfolio/tags/big-commerce">
          <img src={bigcommerceLogo} style={{ maxHeight: "25vh", display: "block", margin: "0 auto", filter: "invert(1)" }} />

          <h3>BigCommerce</h3>
          <h4>Let me help your clients with their pesky Stencil, Handlebars, and GraphQL issues.</h4>
          <Link to="/portfolio/tags/big-commerce">View My BigCommerce Work &raquo;</Link>
        </Link>
        <Link to="/portfolio/tags/wordpress">
          <img src={wordpressLogo} style={{ maxHeight: "25vh", display: "block", width: "100%", margin: "0 auto", filter: "invert(1)" }} />

          <h3>WordPress / WooCommerce</h3>
          <h4>I grew up on PHP and have no intentions of dropping it now.</h4>
          <Link to="/portfolio/tags/wordpress">View My WordPress Work &raquo;</Link>

        </Link>
      </section>

      <section className="project-grid slim black grid grid--3">
        <h2>Recent E-Commerce Projects:</h2>
        {posts.map(({ node: post }, index) => {
          return <ProjectCard post={post} index={index} />
        })}
      </section>

      <section className="pink half content grid grid--2" style={{alignItems: "center", justifyContent: "center"}}>
        <div><img src={calendarIcon} /></div>
        <h3>I'm more than happy to work under your agency's brand name, communicate directly with your clients, and adapt to your project management processes and timelines.</h3>
      </section>


      <ReadyToGo />

    </Layout>
  )
}

export default GhostCoding

export const pageQuery = graphql`query GhostCodingPageQuery {
  allMarkdownRemark(
    limit: 5
    sort: [{fields: {weight: DESC}}, {fields: {date: DESC}}]
    filter: {frontmatter: {tags: {in: ["E-Commerce"]}}, fields: {published: {eq: true}, unlisted: {ne: true}, collection: {eq: "portfolio"}}}
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
