import React from "react"
import bonsaiIcon from "../../images/bonsai-logo.png"
import Vert from "./vert"

const Bonsai = () => {
    const link = "https://www.hellobonsai.com/invite?fp_ref=jackharner"
  return (

    <Vert
    link={link}
    image={bonsaiIcon}
    slug="bonsai"
    buttonText="Start A Free Trial Today &raquo;"
  >
      <p>
        All-In-One Freelance Time Tracking, Invoicing, Proposal & Contract Generator. Bonsai does it all.
      </p>
        <h3>Automate your Freelance Business With Bonsai</h3>
    </Vert>
  )
}

export default Bonsai
