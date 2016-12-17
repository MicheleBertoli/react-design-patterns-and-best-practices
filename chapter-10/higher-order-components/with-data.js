import React from 'react'
import getJSON from './get-json'

const withData = url => Component => (
  class extends React.Component {

    constructor(props) {
      super(props)

      this.state = { data: [] }
    }

    componentDidMount() {
      const endpoint = typeof url === 'function' ? url(this.props) : url

      getJSON(endpoint).then(data => this.setState({ data }))
    }

    render() {
      return <Component {...this.props} {...this.state} />
    }

  }
)

export default withData
