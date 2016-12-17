import React from 'react'

const withInnerWidth = Component => (
  class extends React.Component {

    constructor(props) {
      super(props)

      this.state = {
        innerWidth: window.innerWidth,
      }

      this.handleResize = this.handleResize.bind(this)
    }

    componentDidMount() {
      window.addEventListener('resize', this.handleResize)
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize)
    }

    handleResize() {
      this.setState({
        innerWidth: window.innerWidth,
      })
    }

    render() {
      return <Component {...this.props} {...this.state} />
    }

  }
)

export default withInnerWidth
