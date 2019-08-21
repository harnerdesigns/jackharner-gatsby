/**
 * PageTitle component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "./fontawesome";
import Header from "./header"
import "../scss/style.scss"



const PageTitle = ({ children }) => {


  return (
    <header className="page-title">

      <h1>{children}</h1>

     
    </header>


  )
}

PageTitle.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageTitle
