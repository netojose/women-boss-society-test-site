import React from 'react'
import { mount } from 'enzyme'
import Textarea from './Textarea'
import Form from '../Form'

describe('<Textarea />', () => {
    test('render', () => {
        const wrapper = mount(
            <Form values={{ some_name: '' }}>
                <Textarea name="some_name" />
            </Form>
        )
        expect(wrapper.find('textarea').length).toBe(1)
    })

    test('value prop rendering', () => {
        const wrapper = mount(
            <Form values={{ some_name: 'some value' }}>
                <Textarea name="some_name" />
            </Form>
        )
        expect(wrapper.find('textarea').prop('value')).toBe('some value')
    })

    test('onChange event trigger', () => {
        const onChangeMock = jest.fn()
        const wrapper = mount(
            <Form values={{ some_name: 'some value' }} onChange={onChangeMock}>
                <Textarea name="some_name" />
            </Form>
        )
        expect(onChangeMock).not.toHaveBeenCalled()
        const input = wrapper.find('textarea')
        input.instance().value = 'some value'
        input.simulate('change')
        expect(onChangeMock).toHaveBeenCalled()
    })
})
