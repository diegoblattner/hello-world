import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Heading } from 'dojo-component-ui'

class App extends Component {
  render () {
    return (
      <Heading level={1}>Desktop app</Heading>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('[root]')
)
