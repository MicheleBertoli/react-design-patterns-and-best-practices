import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import RedCircle from './components/red-circle'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <RedCircle x={40} y={40} radius={40} />
      </div>
    )
  }
}

export default App
