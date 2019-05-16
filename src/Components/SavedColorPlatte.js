import React, { Component } from 'react'
import ListOfColorPlatter from './ListOfColorPlatter';
import  logo from '../design/TrashIcon.svg'

export class SavedColorPlatte extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.colorPlatter.map((data, i) => (
      <div>
        <p style={colorPlatterHeader}>{data.title}</p>
        <div className="listOfColor">
          <ListOfColorPlatter newPlate={data.data} />
          <div onClick={this.onDeleteCurrentColor} style={deleteBUtton}>
          <img  style={DeleteImage} src={logo}></img>
          </div>
        </div>
      </div>
    ))
  }
}
const deleteBUtton = {
  width: "12%",
  marginTop: "2%",
  marginLeft: "2%",
  padding: "4%",
  border: "1px solid transparent",
  borderRadius: "5px",
  display: "flex",
  position: "relative",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: '#d0d0d0'

}
const DeleteImage = {
  width:"50%",
  opacity:'0.5'
}
const colorPlatterHeader = {
  fontSize:"1.4vw",
  marginLeft:"2.2%",
  marginTop:'2%'
}

export default SavedColorPlatte;
