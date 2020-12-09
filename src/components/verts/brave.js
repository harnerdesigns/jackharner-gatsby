import React from "react"
import braveIcon from "../../images/Brave-logo-monotone-reversed.svg"
import Vert from "./vert"

const Brave = () => {
    const link = "https://brave.com/jac948"
  return (

    <Vert
    link={link}
    image={braveIcon}
    slug="brave"
    buttonText="Download Brave Today &raquo;"
  >
      <p>
        Want to support your favorite content creators (including me!) just by
        browsing the web? <br />
      </p>
        <h3>A private, secure, and fast web browser that pays YOU to browse.</h3>
    </Vert>
  )
}

export default Brave
