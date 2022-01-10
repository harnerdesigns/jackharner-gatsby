/**
 * PageTitle component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Drips from "./atoms/drips"

const PageTitle = ({ children, subtitle = "" }) => {

  return (
    <header className="page-title slim pink" >
      <Drips color="black" slim/>

      <h1>{children}</h1>
      {subtitle && <h2>{subtitle}</h2>}
    </header>
  )
}

PageTitle.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageTitle
