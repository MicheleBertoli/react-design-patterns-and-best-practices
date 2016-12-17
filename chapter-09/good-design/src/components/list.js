import React from 'react'

class List extends React.PureComponent {

  render() {
    return (
      <ul>
        {this.props.items.map(item => <li key={item}>{item}</li>)}
      </ul>
    )
  }

}

export default List
