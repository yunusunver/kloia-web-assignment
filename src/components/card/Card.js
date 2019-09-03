import React, { Component } from 'react'
import PersonalInfo from './personelinfo/PersonalInfo'
import './card.css';
export default class Card extends Component {
    render() {
        return (
            <div className="card">
                <div>
                    <p id="personalCa">Personal Card</p>
                    <p id="loremipsum">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
                <PersonalInfo/>
            </div>
        )
    }
}
