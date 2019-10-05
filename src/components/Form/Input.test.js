import React from 'react'
import { mount } from 'enzyme'
import Input from './Input'
import Form from './Form'

describe('<Input />', () => {
    test('render', () => {
        const wrapper = mount(
            <Form values={{ some_name: '' }}>
                <Input name="some_name" />
            </Form>
        )
        expect(wrapper.find('input').length).toBe(1)
    })

    test('value prop rendering', () => {
        const wrapper = mount(
            <Form values={{ some_name: 'some value' }}>
                <Input name="some_name" />
            </Form>
        )
        expect(wrapper.find('input').prop('value')).toBe('some value')
    })

    test('onChange event trigger', () => {
        const onChangeMock = jest.fn()
        const wrapper = mount(
            <Form values={{ some_name: 'some value' }} onChange={onChangeMock}>
                <Input name="some_name" />
            </Form>
        )
        expect(onChangeMock).not.toHaveBeenCalled()
        const input = wrapper.find('input')
        input.instance().value = 'some value'
        input.simulate('change')
        expect(onChangeMock).toHaveBeenCalled()
    })
})
