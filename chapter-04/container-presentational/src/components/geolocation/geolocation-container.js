import React from 'react'
import Geolocation from './geolocation'

class GeolocationContainer extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      latitude: null,
      longitude: null,
    }

    this.handleSuccess = this.handleSuccess.bind(this)
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.handleSuccess)
    }
  }

  handleSuccess({ coords }) {
    this.setState({
      latitude: coords.latitude,
      longitude: coords.longitude,
    })
  }

  render() {
    return (
      <Geolocation {...this.state} />
    )
  }

}

export default GeolocationContainer
