import React from "react"
import bonsaiIcon from "../../images/bonsai-logo.png"
import Vert from "./vert"

const Bonsai = () => {
  const link = "https://bonsai.jackharner.com"
  return (
    <Vert
      link={link}
      image={bonsaiIcon}
      slug="bonsai"
      buttonText="Start A Free Trial Today &raquo;"
    >
      <h3>Automate your Freelance Business With Bonsai</h3>
      <p>
        All-In-One Freelance Time Tracking, Invoicing, Proposal & Contract
        Generator. Bonsai does it all.
      </p>
    </Vert>
  )
}

export default Bonsai
