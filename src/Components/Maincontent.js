import React, { Component } from 'react'
import ColorsList from './ColorsList';

export class Maincontent extends Component {
  render() {
    return this.props.mainColorData.map((color) => (
      <ColorsList colorSelect={this.props.colorSelect} color={color} />
    ))

  }
}

export default Maincontent
