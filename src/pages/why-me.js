import React, { useState } from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import Seo from "../components/seo"
import FreelanceCountdown from "../components/freelanceCountdown"
import Grid from "../components/testimonies/grid"
import Drips from "../components/atoms/drips"

import jack from "../images/jack.png"
import EE from "../images/logos/EE.svg"
import WZY from "../images/logos/WZ_Logo.svg"
import MT from "../images/logos/MT_Script_White.svg"
import NR from "../images/logos/national-roofing-logo.svg"
import Shoolu from "../images/logos/shoolu-logo.svg"
import ReadyToGo from "../components/ready-to-go"

const WhyMe = ({ data, pageContext }) => {
  console.log(data.testimonies.frontmatter)
  const { quotes } = data.testimonies.frontmatter

  return (
    <Layout footerCTA={false}>
      <Seo title="Why Hire Me?" />
      <PageTitle>Why Hire Me?</PageTitle>
      <section className="slim black content--centered">

        <div>
          <h2>
            Considering hiring me, but you're on the fence?
          </h2>
          <h3>
            Here's a couple reasons why you should swing that other leg over and{" "}
            <Link to="/hire-me">Hire Me</Link>.
          </h3>
        </div>
      </section>
      <section className="half white">
        <h1>#1 My Clients Love Me:</h1>
        <Grid quotes={quotes.slice(0, 6)} />
        <h2>
          <Link to="/testimonials">
          See All My Client Testimonials &raquo;
        </Link>
        </h2>
      </section>
      <section className="full black">
        {/* <Drips
          color="var(--color)"
          wrapperHeight={"20vh"}
        /> */}
        <FreelanceCountdown
          header="#2 I've Been Freelancing Full Time For:"
          subheader="+ building websites for 10 years before that."
        />
        <h2>So You Could Say I've Been Doing This For A While.</h2>
      </section>

      <section class="full pink">
        <h1>#3 Big Name Companies Trust Me:</h1>
        <div className="client-logo-list">
          <img src={WZY} />
          <img src={EE} />
          <img src={MT} />
          <img src={NR} />
          <img src={Shoolu} />
        </div>
      </section>

      <ReadyToGo />
    </Layout>
  )
}

export default WhyMe

export const pageQuery = graphql`
  query WhyMePageQuery {
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
        }
      }
    }
  }
`
