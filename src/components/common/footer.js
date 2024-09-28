import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { breakpoints } from "../breakpoints"

import FooterCTA from "./FooterCTA"
import FooterMenu from "./footerMenu"


const Footer = ({ siteTitle, footerCTA = true }) => (
  <footer className="slim main_footer">
    {footerCTA && <FooterCTA />}

    <MenuGrid>
      <FooterMenu />
      <section className="socials socials--footer">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/jackharner"
          className="twitter"
        >
          <FontAwesomeIcon icon={["fab", "twitter"]} />
          <span className="sr-only">Twitter</span>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://patreon.com/jackharner"
          className="patreon"
        >
          <FontAwesomeIcon icon={["fab", "patreon"]} />
          <span className="sr-only">Patreon</span>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://instagram.com/jackharner"
          className="instagram"
        >
          <FontAwesomeIcon icon={["fab", "instagram"]} />
          <span className="sr-only">Instagram</span>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://dribbble.com/jackharner"
          className="dribbble"
        >
          <FontAwesomeIcon icon={["fab", "dribbble"]} />
          <span className="sr-only">dribbble</span>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://dev.to/jackharner"
          className="devto"
        >
          <FontAwesomeIcon icon={["fab", "dev"]} />{" "}
          <span className="sr-only">Dev.to</span>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/harnerdesigns"
          className="github"
        >
          <FontAwesomeIcon icon={["fab", "github"]} />{" "}
          <span className="sr-only">GitHub</span>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.producthunt.com/@jackharner"
          className="producthunt"
        >
          <FontAwesomeIcon icon={["fab", "product-hunt"]} />
          <span className="sr-only">Product Hunt</span>
        </a>
      </section>
      <section className="copyright">
        &copy; 2015 - 2023 <a href="/about">Jack Harner</a> |{" "}
        <a href="https://github.com/harnerdesigns/jackharner-gatsby">
          {" "}
          Built With Gatsby
        </a>
        <br />
        <span>Denver, CO Freelance Web Developer & E-Commerce Consultant</span>
      </section>
    </MenuGrid>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;

  @media ${breakpoints.laptopL} {
    width: 50%;
  }

  .main_nav {
    a {
      width: 100%;
    }
  }
`
