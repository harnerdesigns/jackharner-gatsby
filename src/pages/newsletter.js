import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import SEO from "../components/seo"
import { NewsletterForm } from "../components/common/NewsletterForm"


const About = ({ data }) => {
  const { photos } = data.photoRoll.frontmatter

  return (
    <Layout footerCTA={false}>
      <SEO title="About" />
      <container className="full white">
      <NewsletterForm />

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
