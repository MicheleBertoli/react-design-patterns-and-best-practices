import React from 'react'
import ReactDOM from 'react-dom'
import cssModules from 'react-css-modules'
import styles from './index.css'

const Button = () => <button styleName="button">Click me!</button>

const EnhancedButton = cssModules(Button, styles)

ReactDOM.render(<EnhancedButton />, document.body)
