import React from 'react'
import List from './list'
import Form from './form'

class Todos extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      items: ['foo', 'bar'],
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(value) {
    const items = this.state.items.slice()
    items.unshift(value)

    this.setState({
      items,
    })
  }

  render() {
    return (
      <div>
        <List items={this.state.items} />
        <Form onSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default Todos
