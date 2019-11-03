import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Headroom from "react-headroom";

import MainMenu from "./mainMenu";

const Header = ({ siteTitle }) => (
  <Headroom calcHeightOnResize upTolerance={100}>
  <header className="main_head"

  >
    <Link
      to="/"
      className="logo"
    >
      <svg viewBox="0 0 100 100" width="100" height="100" id="logo-icon">
        <circle cx="50" cy="50" r="50" />
      </svg>
      <h1>Jack Harner</h1>
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
 