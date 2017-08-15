import React from 'react'
import { StyleSheet, View, FlatList, Text } from 'react-native'
import { Chat, ListItem } from './Chat.js'
import { ChatInput } from '../ChatInput'

class ListItemNative extends ListItem {
  render () {
    return (
      <Text>{this.props.data.name}: {this.props.data.message}</Text>
    )
  }
}

class ChatNative extends Chat {
  render () {
    return (
      <View style={styles.container}>
        <ChatInput
          socket={this.socket}
        />

        <FlatList
          style={styles.list}
          data={this.state.messages}
          keyExtractor={(message, index) => message._id}
          renderItem={({message}) => <ListItemNative data={message} />}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1
  },
  list: {
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1
  }
})

export {
  ChatNative as Chat,
  ListItemNative as ListItem
}
