import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout-min"
import PageTitle from "../components/pageTitle"
import SEO from "../components/seo"

import quicklinksOG from "../images/quick-links-og.png";

import { toLower } from "lodash"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Links = ({ data }) => {
  return (
    <Layout>
      <SEO title="Quick Links" image={quicklinksOG}  />
      <PageTitle>Quick Links</PageTitle>
      
      <section className="slim black">
        <LinksGrid>
          <Link to="/portfolio" className="button button--large">
            See My Portfolio
          </Link>
          <Link to="/newsletter" className="button button--large">
            Join My Newsletter
          </Link>
          <a className="button button--large" href="https://livemusicforecast.com">
            Live Music Forecast
          </a>
          <a className="button button--large" href="https://whatsthatphobia.com">
            What's That Phobia?
          </a>
        </LinksGrid>
      </section>
      <section className="socials socials--footer">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/jackharner"
          className="twitter"
        >
          <FontAwesomeIcon icon={["fab", "twitter"]} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://instagram.com/jackharner"
          className="instagram"
        >
          <FontAwesomeIcon icon={["fab", "instagram"]} />
        </a>
      </section>
    </Layout>
  )
}

export default Links

const LinksGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  max-width: 900px;
  margin-bottom: 2rem;

  .button {
    width: 100%;
  }
`