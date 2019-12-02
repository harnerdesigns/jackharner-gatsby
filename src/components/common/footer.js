import PropTypes from "prop-types"
import React from "react"


import MainMenu from "./mainMenu";

const Footer = ({ siteTitle }) => (
  
  <footer className="slim main_footer" >

    <section className="copyright">&copy; 2019 Jack Harner | <a href="https://github.com/harnerdesigns/jackharner-gatsby"> Built With Gatsby</a></section>
    <MainMenu />

  </footer >

)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer


