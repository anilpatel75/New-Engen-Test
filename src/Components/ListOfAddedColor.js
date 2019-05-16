import React, { Component } from 'react'
import '../styles/colorComponent.css';
import deleteLogo from '../design/TrashIcon.svg'

export class ListOfAddedColor extends Component {
  render() {
    return this.props.listOFColor.map((data) => (
      <div key={data.id} className="main_color" style={{ backgroundColor: data.name }} >
        <p>{data.name}</p>
        <span style={deleteButton} onClick={this.props.onDeleteColor.bind(this, data)}>
          <img src={deleteLogo}></img>
        </span>
      </div>
    ))

  }
}
const deleteButton = {
  position: 'absolute',
  right: '2%',
  top: '2%',
  color: 'white',
  cursor: 'pointer'
}

export default ListOfAddedColor
