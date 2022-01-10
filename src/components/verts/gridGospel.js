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
      buttonText="Buy Now! &raquo;"
    >
      <p>Haven't Quite Mastered CSS Grid Yet?</p>
      <p>Then you NEED to check out</p>
      <div class="book__title">
        <h1>The Grid Gospel</h1>
        <h2>An Intro To CSS Grid</h2>
      </div>
      <h3>Get it Today for <strong>$1</strong> and Receive:</h3>
      <ul>
        <li>20+ Pages of CSS Grid Awesomeness</li>
        <li>A Printable CSS Grid Cheat Sheet</li>
        <li>Access to Live CodePen Examples</li>
      </ul>
    </Vert>
  )
}

export default GridGospel
