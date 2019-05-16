import React, { Component } from 'react'
import '../styles/colorComponent.css'

export class ColorsList extends Component {
    render() {
        const { name } = this.props.color;
        return (
            <div className="main_color" style={{ backgroundColor: name }} onClick={this.props.colorSelect.bind(this, this.props.color)}>
                <p>{name}</p>
            </div>
        )
    }
}

export default ColorsList;
