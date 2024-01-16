import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { breakpoints } from "../breakpoints"

import FooterCTA from "./FooterCTA"

import MainMenu from "./mainMenu"
import SecondaryMenu from "./secondaryMenu"

const Footer = ({ siteTitle, footerCTA = true }) => (
  <footer className="slim main_footer">
    {footerCTA && <FooterCTA />}

    <MenuGrid>
      <section className="copyright">
        &copy; 2015 - 2023 Jack Harner |{" "}
        <a href="https://github.com/harnerdesigns/jackharner-gatsby">
          {" "}
          Built With Gatsby
        </a>
        <br />
        Denver, CO Freelance Web Developer & E-Commerce Consultant
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
