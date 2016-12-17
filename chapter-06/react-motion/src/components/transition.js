import React from 'react'
import { Motion, spring } from 'react-motion'

const Transition = () => (
  <Motion defaultStyle={{ opacity: 0.01 }} style={{ opacity: spring(1) }}>
    {interpolatingStyle => (
      <h1 style={interpolatingStyle}>Hello React</h1>
    )}
  </Motion>
)

export default Transition
