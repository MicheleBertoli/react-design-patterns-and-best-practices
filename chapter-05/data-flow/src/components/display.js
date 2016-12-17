import React from 'react'

const Display = ({ counter }) => <h1>{counter}</h1>

Display.propTypes = {
  counter: React.PropTypes.number,
}

export default Display
