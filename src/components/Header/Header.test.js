import React from 'react'
import { mount } from 'enzyme'
import Header from './Header'

describe('<Header />', () => {
    test('render', () => {
        const wrapper = mount(<Header labelKey="someKey" />)
        expect(wrapper.find('h1').length).toBe(1)
        expect(wrapper.text()).toBe('someKey')
    })

    test('test priority', () => {
        const wrapper = mount(<Header labelKey="someKey" priority={2} />)
        expect(wrapper.find('h2').length).toBe(1)
        expect(wrapper.text()).toBe('someKey')
    })
})
