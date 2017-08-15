import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Heading extends Component {
  render () {
    const TagName = `h${this.props.level || 1}`

    return (
      <TagName>{ this.props.children }</TagName>
    )
  }
}

Heading.propTypes = {
  children: PropTypes.node,
  level: PropTypes.number
}

export { Heading }
