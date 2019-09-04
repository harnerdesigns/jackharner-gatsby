import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Headroom from "react-headroom";

import Icon from "../../images/icon.png";
import MainMenu from "./mainMenu";
import ColorSwitcher from "./colorSwitcher";

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
<MainMenu />
<ColorSwitcher />
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
 