import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

import { ChatInput } from './ChatInput.js'

class ChatInputNative extends ChatInput {
  render () {
    return (
      <TextInput
        style={styles.input}
        onChangeText={(input) => this.setState({input})}
        onSubmitEditing={this.handleSubmit}
        value={this.state.input}
        placeholder={this.state.placeholder}
      />
    )
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1
  }
})

export { ChatInputNative as ChatInput }
