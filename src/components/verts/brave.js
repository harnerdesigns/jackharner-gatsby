import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import styled from "styled-components"
import { Link } from "gatsby"
import { breakpoints } from "../breakpoints"
import braveIcon from "../../images/brave_lion_alt.png"

const Brave = () => {
  return (
    <section class="vert vert--brave vert--with-icon">
      <img src={braveIcon} />
      <p>
        Want to support your favorite content creators (including me!) just by
        browsing the web? Check out <a href="https://brave.com/har491">Brave</a>
        , a private, secure and fast web browser that pays YOU to browse.
      </p>

      <a class="button" href="https://brave.com/har491">
        Learn More &raquo;
      </a>
    </section>
  )
}

export default Brave