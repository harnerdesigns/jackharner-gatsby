import React, { Component } from "react"

import PropTypes from "prop-types"

import Typist from "react-typist"

import uuid from "uuid"

class Typing extends Component {

  static propTypes = {
    words: PropTypes.array.isRequired,
  }

  static defaultProps = {
    words: ["affordable", "accessible", "rewarding"],
  }

  render() {
    const { words } = this.props
    const n = words.map((word, i) => {
      return [
        <span key={uuid()}>{word}</span>,
        <Typist.Backspace key={uuid()} count={word.length} delay={1200} />,
      ]
    })

    return [
      <Typist key={uuid()} onTypingDone={() => this.forceUpdate()}>
        {n}
      </Typist>,
    ]
  }
}

export default Typing
