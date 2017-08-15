import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

import { Heading, Chat } from 'dojo-component-ui'

export default class App extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Heading level={1}>Native app</Heading>
        <Chat server='http://172.16.9.11:1337' />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
