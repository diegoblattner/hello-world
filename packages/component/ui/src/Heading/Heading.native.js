import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { Heading } from './Heading.js'

class HeadingNative extends Heading {
  render () {
    const level = `h${this.props.level || 1}`

    return (
      <Text style={styles[level]}>{ this.props.children }</Text>
    )
  }
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 16
  }
})

export { HeadingNative as Heading }
