import React from 'react'
import List from './list'

const UserList = ({ users }) => (
  <List collection={users} textKey="bio" titleKey="username" />
)

UserList.propTypes = {
  users: React.PropTypes.array,
}

export default UserList
