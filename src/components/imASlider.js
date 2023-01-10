import React from "react"
import { Component } from "react"
import Typing from "./Typing"

class ImASlider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      titles: [
        "Web Developer",
        "E-Commerce Consultant",
        "Problem Solver",
        "Entrepreneur",
      ],
    }
  }

  render() {
    return (
      <>
        <h3 className="imASlider">
          <span>I'm a&nbsp;</span>
          <span className="title__box">
            <Typing words={this.state.titles} />
          </span>
        </h3>
      </>
    )
  }
}

export default ImASlider
