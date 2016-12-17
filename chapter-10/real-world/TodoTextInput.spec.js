import React from 'react'
import { shallow } from 'enzyme'
import TodoTextInput from './TodoTextInput'

const noop = () => {}

test('sets the text prop as value', () => {
  const text = 'text'
  const wrapper = shallow(<TodoTextInput text={text} onSave={noop} />)

  expect(wrapper.prop('value')).toBe(text)
})

test('uses the placeholder prop', () => {
  const placeholder = 'placeholder'
  const wrapper = shallow(<TodoTextInput placeholder={placeholder} onSave={noop} />)

  expect(wrapper.prop('placeholder')).toBe(placeholder)
})

test('applies the right class names', () => {
  const wrapper = shallow(<TodoTextInput editing newTodo onSave={noop} />)

  expect(wrapper.hasClass('edit new-todo')).toBe(true)
})

test('fires onSave on enter', () => {
  const onSave = jest.fn()
  const value = 'value'
  const wrapper = shallow(<TodoTextInput onSave={onSave} />)

  wrapper.simulate('keydown', { target: { value }, which: 13 })

  expect(onSave).toHaveBeenCalledWith(value)
})

test('does not fire onSave on key down', () => {
  const onSave = jest.fn()
  const wrapper = shallow(<TodoTextInput onSave={onSave} />)

  wrapper.simulate('keydown', { target: { value: '' } })

  expect(onSave).not.toBeCalled()
})

test('clears the value after save if new', () => {
  const value = 'value'
  const wrapper = shallow(<TodoTextInput newTodo onSave={noop} />)

  wrapper.simulate('keydown', { target: { value }, which: 13 })

  expect(wrapper.prop('value')).toBe('')
})

test('updates the text on change', () => {
  const value = 'value'
  const wrapper = shallow(<TodoTextInput onSave={noop} />)

  wrapper.simulate('change', { target: { value } })

  expect(wrapper.prop('value')).toBe(value)
})

test('fires onSave on blur if not new', () => {
  const onSave = jest.fn()
  const value = 'value'
  const wrapper = shallow(<TodoTextInput onSave={onSave} />)

  wrapper.simulate('blur', { target: { value } })

  expect(onSave).toHaveBeenCalledWith(value)
})

test('does not fire onSave on blur if new', () => {
  const onSave = jest.fn()
  const wrapper = shallow(<TodoTextInput newTodo onSave={onSave} />)

  wrapper.simulate('blur')

  expect(onSave).not.toBeCalled()
})
