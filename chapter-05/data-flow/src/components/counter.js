import React from 'react'
import Display from './display'
import Buttons from './buttons'

class Counter extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      counter: 0,
    }

    this.handleIncrement = this.handleIncrement.bind(this)
    this.handleDecrement = this.handleDecrement.bind(this)
  }

  handleIncrement() {
    this.setState({
      counter: this.state.counter + 1,
    })
  }

  handleDecrement() {
    this.setState({
      counter: this.state.counter - 1,
    })
  }

  render() {
    return (
      <div>
        <Display counter={this.state.counter} />
        <Buttons
          onDecrement={this.handleDecrement}
          onIncrement={this.handleIncrement}
        />
      </div>
    )
  }

}

export default Counter
