import React from 'react'
import { shallow, mount } from 'enzyme'
import { BrowserRouter as Router } from 'react-router-dom'
import RegisterCompany from './RegisterCompany'

describe('<RegisterCompany />', () => {
    test('render', () => {
        const wrapper = shallow(<RegisterCompany />)
        expect(wrapper.find('CenteredContent').length).toBe(1)
    })

    test('Emails not match', () => {
        const wrapper = mount(
            <Router>
                <RegisterCompany />
            </Router>
        )
        const msg = 'Email does not match, please try again'
        const email = wrapper.find('input[id="inp-email"]')
        email.instance().value = 'mail@ok.com'
        email.simulate('change')
        expect(wrapper.html()).toEqual(expect.stringContaining(msg))
        const verifyEmail = wrapper.find('input[id="inp-verify_email"]')
        verifyEmail.instance().value = 'mail@ok.com'
        verifyEmail.simulate('change')
        expect(wrapper.html()).toEqual(expect.not.stringContaining(msg))
    })

    test('Passwords not match', () => {
        const wrapper = mount(
            <Router>
                <RegisterCompany />
            </Router>
        )
        const msg = 'Password does not match, please try again'
        const password = wrapper.find('input[id="inp-password"]')
        password.instance().value = '1234'
        password.simulate('change')
        expect(wrapper.html()).toEqual(expect.stringContaining(msg))
        const verifyPassword = wrapper.find('input[id="inp-verify_password"]')
        verifyPassword.instance().value = '1234'
        verifyPassword.simulate('change')
        expect(wrapper.html()).toEqual(expect.not.stringContaining(msg))
    })
})
