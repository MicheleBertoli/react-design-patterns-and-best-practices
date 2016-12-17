import React from 'react'
import Perf from 'react-addons-perf'
import Item from './item'

const statuses = ['open', 'close']

class List extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      items: ['foo', 'bar'],
    }

    this.handleClick = this.handleClick.bind(this)
  }

  componentWillUpdate() {
    Perf.start()
  }

  componentDidUpdate() {
    Perf.stop()
    Perf.printWasted()
  }

  handleClick() {
    const items = this.state.items.slice()
    items.unshift('baz')

    this.setState({
      items,
    })
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.items.map(item => (
            <Item
              key={item}
              item={item}
              onClick={console.log}
              statuses={statuses}
            />
          ))}
        </ul>
        <button onClick={this.handleClick}>+</button>
      </div>
    )
  }

}

export default List
