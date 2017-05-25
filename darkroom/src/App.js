import React, { Component } from 'react';
import 'aframe';
import logo from './logo.svg';
import './App.css';
import './Chat.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Dark Room</h2>
        </div>
        
        <Chat/>
        
      </div>
    );
  }
}

export default App;
