/**
 * PageSubtitle component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"



const PageSubtitle = ({ children}) => {


  return (
    <header className="page-subtitle">

      <h2>{children}</h2>

     
    </header>


  )
}

PageSubtitle.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageSubtitle
