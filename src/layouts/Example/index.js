import React, { Component } from 'react'

const Sample = class Sample extends Component {
  render () {
    const { exampleStore: { counter } } = this.props
    return (
      <div>
        Hello World: Component Counter {counter}
      </div>
    )
  }
}

export default Sample
