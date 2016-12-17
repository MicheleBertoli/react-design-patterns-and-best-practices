import React from 'react'

import withInnerWidth from './with-inner-width'

const MyComponent = ({ innerWidth }) => <div>innerWidth: {innerWidth}</div>

MyComponent.propTypes = {
  innerWidth: React.PropTypes.number,
}

export default withInnerWidth(MyComponent)
