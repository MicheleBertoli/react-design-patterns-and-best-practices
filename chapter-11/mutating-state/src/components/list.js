import React from 'react'

class List extends React.PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      items: ['foo', 'bar'],
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      items: this.state.items.concat('baz'),
    })
  }

  render() {
    return (
      <div>
        {this.state.items.length}
        <button onClick={this.handleClick}>+</button>
      </div>
    )
  }

}

export default List
