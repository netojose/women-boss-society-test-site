import React from 'react'
import { shallow } from 'enzyme'
import RegisterUser from './RegisterUser'

describe('<RegisterUser />', () => {
    test('render', () => {
        const wrapper = shallow(<RegisterUser />)
        expect(wrapper.find('CenteredContent').length).toBe(1)
        expect(wrapper.find('Header').length).toBe(2)
        expect(wrapper.find('ButtonLink').length).toBe(1)
    })
})
