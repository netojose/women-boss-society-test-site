import React from 'react'
import { shallow } from 'enzyme'
import Home from './Home'

describe('<Home />', () => {
    test('render', () => {
        const wrapper = shallow(<Home />)
        expect(wrapper.find('CenteredContent').length).toBe(1)
        expect(wrapper.find('Header').length).toBe(1)
        expect(wrapper.find('MenuItem').length).toBe(2)
    })
})
