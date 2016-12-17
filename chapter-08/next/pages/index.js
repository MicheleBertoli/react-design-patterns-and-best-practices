import React from 'react'
import fetch from 'isomorphic-fetch'

class App extends React.Component {

  static async getInitialProps() {
    const response = await fetch('https://api.github.com/users/gaearon/gists')
    const gists = await response.json()

    return { gists }
  }

  render() {
    return (
      <ul>
        {this.props.gists.map(gist => (
          <li key={gist.id}>{gist.description}</li>
        ))}
      </ul>
    )
  }

}

App.propTypes = {
  gists: React.PropTypes.array,
}

export default App
