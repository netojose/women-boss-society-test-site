import React from 'react'
import { mount } from 'enzyme'
import CenteredContent from './CenteredContent'

describe('<CenteredContent />', () => {
    test('render', () => {
        const wrapper = mount(<CenteredContent>content here</CenteredContent>)
        expect(wrapper.text()).toBe('content here')
    })
})
