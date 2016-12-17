import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './transition.css'

const Transition = () => (
  <ReactCSSTransitionGroup
    transitionName="fade"
    transitionAppear
    transitionAppearTimeout={500}
  >
    <h1>Hello React</h1>
  </ReactCSSTransitionGroup>
)

export default Transition
