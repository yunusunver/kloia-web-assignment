import React, { Component } from 'react';
import './note.css';

export default class Note extends Component {
    render() {
        return (
            <div className="note">
                <div><p id="notes">Notes</p></div>
                <p className="note-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sagittis sit amet sem eget gravida. Duis tellus est, pharetra ac bibendum eu, consequat sed dolor. Duis mollis, augue a dignissim congue, mi felis interdum sapien, nec pellentesque eros erat sed diam. Sed pharetra lobortis interdum. </p>
            </div>
        )
    }
}
