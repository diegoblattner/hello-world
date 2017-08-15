import React, { Component } from 'react'
import { Heading, Chat } from 'dojo-component-ui'

class App extends Component {
  render () {
    return (
      <div>
        <Heading level={1}>Web app</Heading>
        <Chat server='http://172.16.9.11:1337' />
      </div>
    )
  }
}

export default App
