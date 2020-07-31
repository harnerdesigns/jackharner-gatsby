import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import styled from "styled-components"
import { Link } from "gatsby"
import { breakpoints } from "../breakpoints"
import braveIcon from "../../images/brave_lion_alt.png"
import Brave from "./brave"
import Newsletter from "./newsletter"

const Vert = ({index}) => {

  switch(index){
    case 1: 
      return(<Newsletter />)    
    case 2: 
      return(<Brave />)
    default:
      return(null)
  }
}

export default Vert
