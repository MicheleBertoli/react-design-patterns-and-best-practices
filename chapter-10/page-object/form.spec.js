import React from 'react'
import { shallow } from 'enzyme'
import Controlled from './form'
import Page from './page'

test('submits the form', () => {
  const onSubmit = jest.fn()
  const wrapper = shallow(<Controlled onSubmit={onSubmit} />)

  const firstName = wrapper.find('[name="firstName"]')
  firstName.simulate('change', { target: { name: 'firstName', value: 'Christopher' } })

  const lastName = wrapper.find('[name="lastName"]')
  lastName.simulate('change', { target: { name: 'lastName', value: 'Chedeau' } })

  const form = wrapper.find('form')
  form.simulate('submit', { preventDefault: () => {} })

  expect(onSubmit).toHaveBeenCalledWith('Christopher Chedeau')
})

test('submits the form with the page object', () => {
  const onSubmit = jest.fn()
  const wrapper = shallow(<Controlled onSubmit={onSubmit} />)

  const page = new Page(wrapper)
  page.fill('firstName', 'Christopher')
  page.fill('lastName', 'Chedeau')
  page.submit()

  expect(onSubmit).toHaveBeenCalledWith('Christopher Chedeau')
})
