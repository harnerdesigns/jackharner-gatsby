import PropTypes from "prop-types"
import React from "react"

import { Link } from "gatsby"
import Img from 'gatsby-image'




const MainMenu = () => (
    <nav className="main_nav">
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/mood">Mood</Link>
        <Link to="/contact">Contact</Link>
    </nav>
)

MainMenu.propTypes = {
    post: PropTypes.object,
}

MainMenu.defaultProps = {
    post: {},
}

export default MainMenu



