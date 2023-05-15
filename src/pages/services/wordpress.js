import React, { useState } from "react"
import { graphql, Link } from "gatsby"

import Layout from "../../components/layout"
import PageTitle from "../../components/pageTitle"
import Seo from "../../components/seo"
import ReadyToGo from "../../components/ready-to-go"

import wordpressLogo from "../../images/logos/wordpress.svg"
import ProjectCard from "../../components/portfolio/projectCard"
import Quotes from "../../components/testimonies/quotes"
import OgImage from "../../images/services/wordpress-og-photo.png"

const WordPress = ({ data, pageContext }) => {

  const { edges: posts } = data.projects

  const { quotes } = data.testimonies.frontmatter

  let filteredQuotes = quotes.filter((node) => node.tags && node.tags.includes('WordPress') ? true : false)


  return (
    <Layout footerCTA={false} className={"service service--wordpress"}>
      <Seo  title="Custom WordPress Themes & Plugins" image={OgImage} />

      <PageTitle subtitle="WordPress Plugins & Themes Solving YOUR Unique Business Needs">WordPress Theme & Plugin Development</PageTitle>
      <section className="wordpress-bg half content--centered white" style={{ marginTop: "12vw" }}>
        <img src={wordpressLogo} className="wordpress-logo" />

        <h2>Need A WordPress Developer?</h2>

        <h3 className="did-you-know">I've been building with WordPress for over 10 years!</h3>
        <Link to="/hire-me" className="button button--large button--white button--arrow-right">Let's Chat</Link>
      </section>
      <section className="slim black">
        <div className="grid-item--full-width">
          <h2>My WordPress Clients Love Me!</h2>
        </div>
        <Quotes quotes={filteredQuotes} />

      </section>

      <section className="half wordpress-bg wordpress-bg--alt">
      <h2>Let's Build Some Cool WordPress Stuff Together!</h2>
        <h3 className="did-you-know">It's the most flexible CMS while still being insanely user friendly.</h3>

      </section>

      <section className="project-grid slim black grid grid--3">
        <h2><Link to="/portfolio/tags/wordpress">Recent WordPress Projects:</Link></h2>
        {posts.map(({ node: post }, index) => {
          return <ProjectCard post={post} index={index} />
        })}
      </section>
    






      <ReadyToGo />

    </Layout>
  )
}

export default WordPress

export const pageQuery = graphql`query WordPressPagQuery {
  projects: allMarkdownRemark(
    limit: 5
    sort: [{fields: {weight: DESC}}, {fields: {date: DESC}}]
    filter: {frontmatter: {tags: {in: ["WordPress"]}}, fields: {published: {eq: true}, unlisted: {ne: true}, collection: {eq: "portfolio"}}}
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
