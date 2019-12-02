/**
 * PageTitle component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"




const Button = ({ label, onClick, type, extraStyle, icon, href, ...others }) => {



  if (href) {

   return( <a href={href} style={extraStyle} className={"button button--" + type} {...others}>

{(icon ? <FontAwesomeIcon icon={icon} /> : "")}
          <span className="label" dangerouslySetInnerHTML={label}>

          </span>

</a>)


  } else {


    return (
      <button onClick={onClick} style={extraStyle} className={"button button--" + type} {...others}>
          {(icon ? <FontAwesomeIcon icon={icon} /> : "")}
          <span className="label" dangerouslySetInnerHTML={label}>

          </span>


      </button>


    )
  }
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Button
