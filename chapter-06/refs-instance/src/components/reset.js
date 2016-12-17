import React from 'react'
import Input from './input'

class Reset extends React.Component {

  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault()

    this.element.reset()
  }

  render() {
    return (
      <form>
        <Input ref={element => (this.element = element)} />
        <button onClick={this.handleClick}>Reset</button>
      </form>
    )
  }

}

export default Reset
