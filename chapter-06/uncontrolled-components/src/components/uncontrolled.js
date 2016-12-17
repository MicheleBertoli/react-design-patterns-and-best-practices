import React from 'react'

class Uncontrolled extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    })
  }

  handleSubmit(e) {
    e.preventDefault()

    console.log(`${this.state.firstName} ${this.state.lastName}`)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="firstName" onChange={this.handleChange} />
        <input type="text" name="lastName" onChange={this.handleChange} />
        <button>Submit</button>
      </form>
    )
  }

}

export default Uncontrolled
