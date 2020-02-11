import React from "react"
import { Component } from "react"
import Typing from "./Typing"

class ImASlider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      titles: [
        "Web Developer",
        "Problem Solver",
        "Photographer",
        "Graphic Designer",
        "Cat Lover",
        "Entrepreneur",
      ],
    }
  }

  render() {
    return (
      <>
        <h3>
          <span>I'm a&nbsp;</span>
          <span class="title__box">
            <Typing words={this.state.titles} />
          </span>
        </h3>
      </>
    )
  }
}

export default ImASlider
