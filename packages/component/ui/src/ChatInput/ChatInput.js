import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ChatInput extends Component {
  constructor (props) {
    super(props)
    this.state = {
      input: '',
      placeholder: 'What\'s your name?',
      chatStarted: false,
      messages: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.newUser = this.newUser.bind(this)

    this.socket = this.props.socket
  }

  handleChange (e) {
    this.setState({input: e.target.value})
  }

  newUser () {
    this.socket.emit('newUser', this.state.input)
    this.setState({
      placeholder: 'Type your message',
      chatStarted: true
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    if (!this.state.chatStarted) {
      this.newUser()
    } else {
      this.socket.emit('newMessageUp', this.state.input)
    }

    this.setState({input: ''})
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          value={this.state.input}
          onChange={this.handleChange}
          placeholder={this.state.placeholder}
        />
      </form>
    )
  }
}

ChatInput.propTypes = {
  socket: PropTypes.object
}

export { ChatInput }
