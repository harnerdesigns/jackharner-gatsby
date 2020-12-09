import React from "react"
import GridGospelCover from "../../images/The-Grid-Gospel-Cover.png"
import Vert from "./vert"

const GridGospel = () => {
  const link = "https://gridgospel.com?utm_source=jackharner"
  return (
    <Vert
      link={link}
      image={GridGospelCover}
      slug="gridgospel"
      buttonText="Buy Now &raquo;"
    >
        <h2>Haven't Quite Mastered CSS Grid Yet?</h2>
        <p> Then you NEED to check out</p>
        <h1>
          The Grid Gospel: An Intro To CSS Grid
        </h1>
        <p>Get it Today and Receive:</p>
        <ul>
          <li>20+ Pages of CSS Grid Awesomeness</li>
          <li>A Printable CSS Grid Cheat Sheet</li>
          <li>Access to live CodePen examples</li>
        </ul>
    </Vert>
  )
}

export default GridGospel
