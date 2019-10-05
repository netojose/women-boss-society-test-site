import React from 'react'
import { mount } from 'enzyme'
import Form from './Form'

describe('<Form />', () => {
    test('render', () => {
        const wrapper = mount(<Form values={{}}>form content</Form>)
        expect(wrapper.find('form').length).toBe(1)
        expect(wrapper.find('form').text()).toBe('form content')
    })
})
