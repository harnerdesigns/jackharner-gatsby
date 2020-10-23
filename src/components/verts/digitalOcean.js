import React from "react"
import digitaloceanIcon from "../../images/DO_Logo_vertical_white.svg"
import Vert from "./vert"

const DigitalOcean = () => {
  const link = "https://m.do.co/c/66cca12b82bc"
  return (
    <Vert link={link} image={ digitaloceanIcon } slug="digitalocean" buttonText="Check Out DigitalOcean &raquo;" >      
    <h2>Cloud Infrastructure For The Modern Developer</h2>
    <h3>Easily Scalable Virtual Servers starting at $5/mo</h3>
    </Vert>

  )
}

export default DigitalOcean
