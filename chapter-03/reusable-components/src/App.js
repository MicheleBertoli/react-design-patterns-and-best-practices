import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import PostList from './components/post-list'
import UserList from './components/user-list'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <PostList />
        <UserList users={[{ id: 1, username: 'username', bio: 'bio' }]} />
      </div>
    )
  }
}

export default App
