import React, { Component } from 'react'
import ListOfAddedColor from './ListOfAddedColor';
import SavedColorPlatte from './SavedColorPlatte';
import '../styles/colorComponent.css';

export class SelectedColor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }
    }
    onChangeInput = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.SelectedColor(this.state.title);
        this.setState({ title: '' });
    }


    render() {
        return (
            <div className="selecedColor">
                <p style={colorPlatterHeader}>Your Current Color Cart Palette</p>
                <div className="listOfColor" >
                    <ListOfAddedColor listOFColor={this.props.selectColor} onDeleteColor={this.props.onDeleteColor.bind(this)} ></ListOfAddedColor>
                </div>
                <form onSubmit={this.onSubmit} >
                    <div className="form-group-inline search_form">
                        <label  style={buttonText} htmlFor="name">Name And Save Your Color Palette</label>
                        <input className="form-control" type="text" name="title" value={this.state.value} placeHolder="Color palette name" onChange={this.onChangeInput.bind(this)}></input>
                        <button type="submit" style={indexButton} className="btn btn-primary" ><span style={buttonText}>Save palette</span></button>
                    </div>
                </form>
                <hr />
                 <div>
                     <p style={colorPlatterHeader}>Previously saved Color Palette</p>
                    <SavedColorPlatte colorPlatter={this.props.formState} onDeleteCurrentColor={this.props.onDeleteCurrentColor} ></SavedColorPlatte>

                </div>
            </div>
            )
         }
}
const indexButton = {
    width: '150px',
    width: '150px',
    border: '1px solid  transperant',
    display: 'inline-block',
    background: '#11079e',
    borderRadius: '28px',
    margin: '0 auto',
    position:'absolute',
    top:'50%',
     left:'110%'
  

}
 const colorPlatterHeader = {
     fontSize:"1.4vw",
     marginLeft:"2.2%",
     marginTop:'2%',
     fontWeight:"bold"
   
 }
 const  buttonText = {
     fontSize:'1vw'
 }



export default SelectedColor
