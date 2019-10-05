import React from 'react'
import { mount } from 'enzyme'
import Submit from './Submit'

import Form from '../Form'

describe('<Submit />', () => {
    test('render', () => {
        const wrapper = mount(
            <Form values={{}}>
                <Submit />
            </Form>
        )
        expect(wrapper.find('input[type="submit"]').length).toBe(1)
    })

    test('custom label', () => {
        const wrapper = mount(
            <Form values={{}}>
                <Submit label="some label" />
            </Form>
        )
        expect(wrapper.find('input[type="submit"]').prop('value')).toBe(
            'some label'
        )
    })
})
