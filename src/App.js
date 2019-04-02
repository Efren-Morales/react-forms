import React, { Component } from 'react';
import './App.css';
import Login from './Login.js';
import Passwordreset from './Passwordreset.js';
import Registration from './Registration';

class App extends Component {
  render() {
    return (
      <div>
      <Login/>
      <Passwordreset/>
      <Registration/>
      </div>
    );
  }
}

export default App;
