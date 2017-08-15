import React, { Component } from 'react'
import PropTypes from 'prop-types'
import io from 'socket.io-client'
import { ChatInput } from '../ChatInput'

class ListItem extends Component {
  render () {
    return (
      <li>{this.props.data.name}: {this.props.data.message}</li>
    )
  }
}

ListItem.propTypes = {
  data: PropTypes.object
}

class Chat extends Component {
  constructor (props) {
    super(props)
    this.state = {
      messages: []
    }

    this.socket = io(this.props.server)
    this.socket.on('newMessageDown', newMessage => {
      let joined = this.state.messages.concat([newMessage])
      this.setState({ messages: joined })
    })
  }

  render () {
    return (
      <div>
        <ul>
          { this.state.messages.map(message => <ListItem key={message._id} data={message} />) }
        </ul>

        <ChatInput
          socket={this.socket}
        />
      </div>
    )
  }
}

Chat.propTypes = {
  server: PropTypes.string
}

export { Chat, ListItem }
