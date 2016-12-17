import React from 'react'
import Item from './item'

const List = ({ collection, textKey, titleKey }) => (
  <ul>
    {collection.map(item =>
      <Item key={item.id} text={item[textKey]} title={item[titleKey]} />
    )}
  </ul>
)

List.propTypes = {
  collection: React.PropTypes.array,
  textKey: React.PropTypes.string,
  titleKey: React.PropTypes.string,
}

export default List
