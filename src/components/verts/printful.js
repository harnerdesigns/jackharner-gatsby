import React from "react"
import printfulIcon from "../../images/printfulLogo.png"
import Vert from "./vert"

const Printful = () => {
  const link = "https://printful.jackharner.com"
  return (
    <Vert link={link} image={ printfulIcon } slug="printful" buttonText="Start Selling Merch Today &raquo;" >      
    <h2>Got Designs? Sell Them With ZERO Hassle.</h2>
    <h3>Printful Prints, Packs, & Ships 100s of Products</h3>
    </Vert>

  )
}

export default Printful
