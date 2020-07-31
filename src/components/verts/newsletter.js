import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import styled from "styled-components"
import { Link } from "gatsby"
import { breakpoints } from "../breakpoints"
import braveIcon from "../../images/brave_lion_alt.png"
import { NewsletterForm } from "../common/NewsletterForm"

const Newsletter = () => {
  return (
    <section className="vert vert--newsletter">
      <NewsletterForm />
    </section>
  )
}

export default Newsletter
