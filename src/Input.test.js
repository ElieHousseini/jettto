import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'

import { findByTestAttr, storeFactory } from '../test/testUtils'
import Input from './Input'

/**
 * Factory function to create a ShallowWrapper for the GuessedWords component.
 * @function setup
 * @param {object} initialState - Initial state for this setup
 * @returns {ShallowWrapper}
 */

const setup = (initialState = {}) => {
  const store = storeFactory(initialState)
  const wrapper = shallow(<Input store={store} />).dive().dive()
  return wrapper
}

describe('render', () => {
  describe('word has not been guessed', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: false }
      wrapper = setup(initialState)
    })
    test('render component without error', () => {
      const component = findByTestAttr(wrapper, 'component-input')
      expect(component.length).toBe(1)
    })
    test('renders input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box')
      expect(inputBox.length).toBe(1)
    })
    test('renders submit button', () => {
      const SubmitButton = findByTestAttr(wrapper, 'submit-button')
      expect(SubmitButton.length).toBe(1)
    })
  })
  describe('word has been guessed', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: true }
      wrapper = setup(initialState)
    })
    test('render component without error', () => {
      const component = findByTestAttr(wrapper, 'component-input')
      expect(component.length).toBe(1)
    })
    test('does not render input box', () => {
      const component = findByTestAttr(wrapper, 'input-box')
      expect(component.length).toBe(0)
    })
    test('does not render submit button', () => {
      const component = findByTestAttr(wrapper, 'submit-button')
      expect(component.length).toBe(0)
    })
  })
})
describe('update state', () => {

})