import React from 'react'

class Focus extends React.Component {

  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.element.focus()
  }

  render() {
    return (
      <div>
        <input type="text" ref={element => (this.element = element)} />
        <button onClick={this.handleClick}>Focus</button>
      </div>
    )
  }

}

export default Focus
