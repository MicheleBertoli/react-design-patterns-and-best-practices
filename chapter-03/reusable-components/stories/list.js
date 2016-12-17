import React from 'react'
import { storiesOf } from '@kadira/storybook'
import List from '../src/components/list'

const users = [{ id: 1, username: 'username', bio: 'bio' }]

storiesOf('List', module)
  .add('with bio', () => (
    <List collection={users} textKey="bio" titleKey="username" />
  ))
  .add('without bio', () => (
    <List collection={users} titleKey="username" />
  ))
