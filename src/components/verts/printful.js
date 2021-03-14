import React from "react"
import printfulIcon from "../../images/printfulLogo.png"
import Vert from "./vert"

const Printful = () => {
  const link = "https://www.printful.com/a/643178:255a83d8b94d873cd78eec57538ba387"
  return (
    <Vert link={link} image={ printfulIcon } slug="printful" buttonText="Start Selling Merch Today &raquo;" >      
    <h2>Got Designs? Sell Them With ZERO Hassle.</h2>
    <h3>Printful Prints, Packs, & Ships 100s of Products</h3>
    </Vert>

  )
}

export default Printful
