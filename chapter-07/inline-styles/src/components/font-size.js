import React from 'react'

class FontSize extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      value: 16,
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange({ target }) {
    this.setState({
      value: Number(target.value),
    })
  }

  render() {
    return (
      <input
        type="number"
        value={this.state.value}
        onChange={this.handleChange}
        style={{ fontSize: this.state.value }}
      />
    )
  }

}

export default FontSize
