import React from 'react'
import renderer from 'react-test-renderer'
import TodoTextInput from './TodoTextInput'

test('snapshots are awesome', () => {
  const component = renderer.create(<TodoTextInput onSave={() => {}} />)
  const tree = component.toJSON()

  expect(tree).toMatchSnapshot()
})
