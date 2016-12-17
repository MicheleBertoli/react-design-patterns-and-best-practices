import React from 'react'

class Controlled extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      firstName: 'Dan',
      lastName: 'Abramov',
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

    this.props.onSubmit(`${this.state.firstName} ${this.state.lastName}`)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={this.state.firstName}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="lastName"
          value={this.state.lastName}
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    )
  }

}

Controlled.propTypes = {
  onSubmit: React.PropTypes.func,
}

export default Controlled
