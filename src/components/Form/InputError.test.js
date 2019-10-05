import React from 'react'
import { mount } from 'enzyme'
import InputError from './InputError'

describe('<InputError />', () => {
    test('render', () => {
        const wrapper = mount(<InputError error="some error message" />)
        expect(wrapper.find('span').length).toBe(1)
        expect(wrapper.text()).toBe('some error message')
    })
})
