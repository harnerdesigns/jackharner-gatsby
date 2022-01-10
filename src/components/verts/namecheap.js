import React from "react"
import namecheapIcon from "../../images/Namecheap_Logo.svg"
import Vert from "./vert"

const Namecheap = () => {
  const link = "https://namecheap.pxf.io/nV95V"
  return (
    <Vert
      link={link}
      image={namecheapIcon}
      slug="namecheap"
      buttonText="Buy or Transfer a Domain Today &raquo;"
    >
      <h2>The Best Place to Buy Domains</h2>
      <h3>Popular Domains Starting at $0.99</h3>
    </Vert>
  )
}

export default Namecheap
