import React, { Component } from "react"

import PropTypes from "prop-types"

import Typist from "react-typist"

import uuid from "uuid"

class Typing extends Component {
  constructor(props) {
    super(props)
  }

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
        <Typist.Backspace key={uuid()} count={word.length} delay={600} />,
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
