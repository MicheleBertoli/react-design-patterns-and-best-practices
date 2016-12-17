import React from 'react'

class Form extends React.PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      value: '',
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange({ target }) {
    this.setState({
      value: target.value,
    })
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <button onClick={() => this.props.onSubmit(this.state.value)}>+</button>
      </div>
    )
  }

}

export default Form
