import React, { Component } from 'react'
import './die.css'
class Die extends Component {
    render(){
        return (
            <div>
                <i className={`dice fas fa-dice-${this.props.face}`}></i>
            </div>
        )
    }
}

export default Die