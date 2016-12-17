import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import { StyleRoot } from 'radium'
import Button from './components/button'

class App extends Component {
  render() {
    return (
      <StyleRoot>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <Button />
        </div>
      </StyleRoot>
    )
  }
}

export default App
