import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import SEO from "../components/seo"
import { NewsletterForm } from "../components/common/NewsletterForm"

const About = ({ data, pageContext }) => {
  const { recentEmails } = pageContext
  console.log(recentEmails)
  return (
    <Layout footerCTA={false}>
      <SEO title="Jack's Newsletter" />
      <container className="half white">
        <NewsletterForm />
      </container>

      <container className="slim pink">
        <h2>I only send EXPERTLY CRAFTED EMAILS like:</h2>

        <div class="recentEmails">
          {recentEmails.map(({ node: email }) => {
            return (
              <Link to={email.fields.slug} className="newsletter__card">
                {email.frontmatter.title}
              </Link>
            )
          })}
        </div>
      </container>
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query MailingListQuery {
    photoRoll: markdownRemark(frontmatter: { title: { eq: "Photo Roll" } }) {
      fields {
        slug
      }
      frontmatter {
        title
        photos {
          photo {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          link
        }
      }
    }
  }
`
