import React, { Component } from 'react';
import './App.css';
import Login from './Login.js';
import Passwordreset from './Passwordreset.js';

class App extends Component {
  render() {
    return (
      <Login></Login>,
      <Passwordreset></Passwordreset> 
    );
  }
}

export default App;
