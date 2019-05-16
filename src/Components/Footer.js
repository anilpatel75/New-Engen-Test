import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div style={addMoreButton}>
                <button onClick={this.props.onButtonClick} className="btn btn-primary" style={indexButton}>Load More</button>
            </div>
        )
    }
}
const addMoreButton = {
    width: '100%',
    overflow: 'auto',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '5%'

}
const indexButton = {
    width: '150px',
    height: '50px',
    border: '1px solid  transperant',
    display: 'inline-block',
    background: '#11079e',
    borderRadius: '28px',
    margin: '0 auto'

}


export default Footer
