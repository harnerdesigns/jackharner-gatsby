import React, { useState } from "react"
import { graphql, Link } from "gatsby"

import Layout from "../../components/layout"
import PageTitle from "../../components/pageTitle"
import Seo from "../../components/seo"
import ReadyToGo from "../../components/ready-to-go"

import bigcommerceLogo from "../../images/logos/bigcommerce.svg"
import shopifyLogo from "../../images/logos/shopify.svg"
import ProjectCard from "../../components/portfolio/projectCard"


const BigCommerce = ({ data, pageContext }) => {

  const { edges: posts } = data.allMarkdownRemark
  return (
    <Layout footerCTA={false} className={"service service--bigcommerce"}>
      <Seo title="Plug 'n Play E-Commerce Developer" />
      <PageTitle>Plug 'n Play E-Commerce Developer</PageTitle>

      <section className="slim black content--centered">

        <div className="grid" style={{alignItems: "center", justifyContent: "center"}}>


          <div>
            <h2>Need an extra hand with your E-Commerce Agency?</h2>
            <h3>Drop me in with your existing clients today! <Link to="/hire-me">Let's Chat &raquo;</Link></h3>
          </div>
        </div>
      </section>


      <section className="brand-perks__grid white slim content--centered grid grid--3">
        <div>
        <img src={shopifyLogo} style={{ maxHeight: "25vh", display: "block", margin: "0 auto",  filter: "invert(1)" }} />

          <h3>Shopify</h3>
          <h4>My abilities with Shopify Liquid flow like water.</h4>
          <Link to="/portfolio/tags/shopify">View My Shopify Work &raquo;</Link>
        </div>
        <div>
        <img src={bigcommerceLogo} style={{ maxHeight: "25vh", display: "block", margin: "0 auto", filter: "invert(1)" }} />

          <h3>BigCommerce</h3>
          <h4>Let me help your clients with their pesky Handlebars and GraphQL issues.</h4>
          <Link to="/portfolio/tags/bigcommerce">View My BigCommerce Work &raquo;</Link>
        </div>
        <div>
          <h3>WordPress</h3>
          <h4>I grew up on PHP and have no intentions of dropping it now.</h4>
          <Link to="/portfolio/tags/wordpress">View My WordPress Work &raquo;</Link>

        </div>
      </section>

      <section className="project-grid slim black grid grid--3">
        <h2>Recent E-Commerce Projects:</h2>
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
query PlugNPlayPageQuery {
  allMarkdownRemark(
    limit: 5
    sort: {
      order: [DESC, DESC]
      fields: [fields___weight, fields___date]
    }
    filter: {
      frontmatter: { tags: { in: ["E-Commerce"] } }
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
