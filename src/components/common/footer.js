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
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://patreon.com/jackharner"
          className="patreon"
        >
          <FontAwesomeIcon icon={["fab", "patreon"]} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://instagram.com/jackharner"
          className="instagram"
        >
          <FontAwesomeIcon icon={["fab", "instagram"]} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://dribbble.com/jackharner"
          className="dribbble"
        >
          <FontAwesomeIcon icon={["fab", "dribbble"]} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://dev.to/jackharner"
          className="devto"
        >
          <FontAwesomeIcon icon={["fab", "dev"]} />{" "}
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/harnerdesigns"
          className="github"
        >
          <FontAwesomeIcon icon={["fab", "github"]} />{" "}
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.producthunt.com/@jackharner"
          className="producthunt"
        >
          <FontAwesomeIcon icon={["fab", "product-hunt"]} />
        </a>
      </section>
      <section className="copyright">
        &copy; 2020 - 2023 Jack Harner |{" "}
        <a href="https://github.com/harnerdesigns/jackharner-gatsby">
          {" "}
          Built With Gatsby
        </a>
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
