import React, { useState } from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import Seo from "../components/seo"
import FreelanceCountdown from "../components/freelanceCountdown"
import Grid from "../components/testimonies/grid"
import Drips from "../components/atoms/drips"
import ReadyToGo from "../components/ready-to-go"

const Testimonials = ({ data, pageContext }) => {
  console.log(data.testimonies.frontmatter)
  const { quotes } = data.testimonies.frontmatter

  return (
    <Layout footerCTA={false}>
      <Seo title="Client Testimonials" />
      <PageTitle>Client Testimonials</PageTitle>
      <section className="slim black content--centered">

        <div>
          <h2>
            I know that I'm great at what I do, but don't just take my word for it:
          </h2>
        </div>
      </section>
      <section className="half white">
        <Grid quotes={quotes} />
      </section>

      <ReadyToGo />
    </Layout>
  )
}

export default Testimonials

export const pageQuery = graphql`
  query TestimonialsPageQuery {
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
