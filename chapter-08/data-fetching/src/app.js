import React from 'react'

const App = ({ gists }) => (
  <ul>
    {gists.map(gist => (
      <li key={gist.id}>{gist.description}</li>
    ))}
  </ul>
)

App.propTypes = {
  gists: React.PropTypes.array,
}

export default App
