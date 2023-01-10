import React, { Component } from "react"

import PropTypes from "prop-types"

import Typist from "react-typist"

import { v4 as uuidv4 } from 'uuid';

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
        <span key={uuidv4()}>{word}</span>,
        <Typist.Backspace key={uuidv4()} count={word.length} delay={1200} />,
      ]
    })

    return [
      <Typist key={uuidv4()} onTypingDone={() => this.forceUpdate()}>
        {n}
      </Typist>,
    ]
  }
}

export default Typing
