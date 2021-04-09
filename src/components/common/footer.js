import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types"
import React from "react"


import FooterCTA from "./FooterCTA"

import MainMenu from "./mainMenu";

const Footer = ({ siteTitle, footerCTA = true }) => (
  
  <footer className="slim main_footer" >
        {footerCTA && <FooterCTA />}


    <section className="copyright">&copy; 2020 Jack Harner | <a href="https://github.com/harnerdesigns/jackharner-gatsby"> Built With Gatsby</a></section>
    <MainMenu />
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
          <FontAwesomeIcon icon={["fab", "dev"]} />        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/harnerdesigns"
          className="github"
        >
          <FontAwesomeIcon icon={["fab", "github"]} />        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.producthunt.com/@jackharner"
          className="producthunt"
        >
          <FontAwesomeIcon icon={["fab", "product-hunt"]} />
          
        </a>
      </section>

  </footer >

)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer


