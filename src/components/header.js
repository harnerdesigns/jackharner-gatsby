import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Headroom from "react-headroom";

import Icon from "../images/icon.png";

const Header = ({ siteTitle }) => (
  <Headroom calcHeightOnResize upTolerance={100}>
  <header className="main_head"

  >
    <Link
      to="/"
      className="logo"
    >
      <img src={Icon} alt="Jack Harner Icon" />
      <h1>
        {siteTitle}
      </h1>
    </Link>
    <nav className="main_nav">
      <Link to="/about">About</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/contact">Contact</Link>
    </nav>
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
 