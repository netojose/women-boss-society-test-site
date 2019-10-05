import React from 'react'
import { mount } from 'enzyme'
import App from './App'

describe('<App />', () => {
    test('render', () => {
        const wrapper = mount(<App />)
        expect(wrapper.find('BrowserRouter').length).toBe(1)
        expect(wrapper.find('Switch').length).toBe(1)
    })
})
