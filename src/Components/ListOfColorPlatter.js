import React, { Component } from 'react'

export class ListOfColorPlatter extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return this.props.newPlate.map((data) => (
            <div key={data.id} className="main_color" style={{ backgroundColor: data.name }}>{data.name}</div>

        ))


    }
}

export default ListOfColorPlatter
