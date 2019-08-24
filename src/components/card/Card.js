import React, { Component } from 'react'
import PersonalInfo from './personelinfo/PersonalInfo'
export default class Card extends Component {
    render() {
        return (
            <div className="card">
                <div>
                    <p className="cardTitle">Personal Card</p>
                    <p className="cardParagraf">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
                <PersonalInfo/>
            </div>
        )
    }
}
