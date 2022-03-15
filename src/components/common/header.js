import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Headroom from "react-headroom"

import MainMenu from "./mainMenu"
import logo from "./../../images/jackharner-logo-white-text.svg"

const Header = ({ siteTitle }) => (
  <Headroom calcHeightOnResize upTolerance={50}>
    <header className="main_head">
      <Link to="/" className="logo">
        <img src={logo} alt="Jack Harner Logo" />
      </Link>
      <MainMenu />
    </header>
  </Headroom>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
