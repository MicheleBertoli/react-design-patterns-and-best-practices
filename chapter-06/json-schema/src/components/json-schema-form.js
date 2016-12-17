import React from 'react'
import Form from 'react-jsonschema-form'

const schema = {
  type: 'object',
  properties: {
    firstName: { type: 'string', default: 'Dan' },
    lastName: { type: 'string', default: 'Abramov' },
  },
}

class JSONSchemaForm extends React.Component {

  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit({ formData }) {
    console.log(formData)
  }

  render() {
    return (
      <Form schema={schema} onSubmit={this.handleSubmit} />
    )
  }

}

export default JSONSchemaForm
