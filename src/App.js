import React, { Component } from 'react';

import ApiForm from './ApiForm.js'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <ApiForm />
      </div>
    );
  }
}

export default App;
