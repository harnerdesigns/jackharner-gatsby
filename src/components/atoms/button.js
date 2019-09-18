/**
 * PageTitle component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"



const Button = ({ label, onClick, type, extraStyle }) => {


  return (
    <button onClick={onClick} style={extraStyle} className={"button button--" + type}>
 
      {label}

     
    </button>


  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Button
