import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

ReactDOM.render(<App gists={window.gists} />, document.getElementById('app'))
