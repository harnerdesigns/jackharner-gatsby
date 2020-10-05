import React from "react"
import GridGospelCover from "../../images/The-Grid-Gospel-Cover.png"


const GridGospel = () => {
  return (
    <section className="vert vert--gridgospel vert--with-icon">
      <a className="vert__img-wrap" href="https://gridgospel.com?utm_source=jackharner">

      <img src={GridGospelCover} alt="The Grid Gospel: An Intro To CSS Grid" />
      </a>
      <div className="vert__content">
        <h2>
          Haven't Quite figured out CSS Grid Yet?
</h2>
        <p>      Then you NEED to check out</p><h1><a href="https://gridgospel.com?utm_source=jackharner">The Grid Gospel: An Intro To CSS Grid</a></h1>
        <p>Get it Today and Receive:</p>
        <ul>
          <li>20+ Pages of CSS Grid Awesomeness</li>
          <li>A Printable CSS Grid Cheat Sheet</li>
          <li>Access to live CodePen examples</li>
        </ul>
      </div>
      <a className="button" href="https://gridgospel.com?utm_source=jackharner">
        Buy Now &raquo;
      </a>
    </section>
  )
}

export default GridGospel
