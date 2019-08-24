import React, { Component } from 'react';
import Card from './components/card/Card';
import Note from './components/note/Note';
import './components/tasarim.css';
import './components/tab.css';

class App extends Component {
 
  render () {
    return (
        <div>
          <Card/>
          <Note/>
        </div>
    )
  }
}

export default App;
