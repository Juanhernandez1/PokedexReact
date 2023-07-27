import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class CustomImput111111 extends Component {
  static propTypes = {}
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    console.log('CustomImput mounted')
  }
  componentWillUnmount() {
    console.log('CustomImput unmounted')
}


componentDidUpdate() {  
    console.log('CustomImput did update')
    }

  render() {
    return (
      <div>CustomImput</div>
    )
  }
}

export default CustomImput


