import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('<App />', () => {
    test('render', () => {
        const wrapper = shallow(<App />)
        expect(wrapper.find('BrowserRouter').length).toBe(1)
        expect(wrapper.find('Switch').length).toBe(1)
        expect(wrapper.find('Route').length).toBe(3)
    })
})
