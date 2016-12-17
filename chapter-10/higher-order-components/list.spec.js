import React from 'react'
import renderer from 'react-test-renderer'
import List from './list'

test('shows the gists', () => {
  const gists = [{ id: 1, description: 'description' }]
  const component = renderer.create(<List data={gists} />)
  const tree = component.toJSON()

  expect(tree).toMatchSnapshot()
})
