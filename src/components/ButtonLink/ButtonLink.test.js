import React from 'react'
import { mount } from 'enzyme'
import { BrowserRouter as Router } from 'react-router-dom'
import ButtonLink from './ButtonLink'

describe('<ButtonLink />', () => {
    test('render', () => {
        const wrapper = mount(
            <Router>
                <ButtonLink to="/foo" labelKey="someKey" />
            </Router>
        )
        expect(wrapper.find('a').length).toBe(1)
        expect(wrapper.find('a').prop('href')).toBe('/foo')
    })
})
