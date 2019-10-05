import React from 'react'
import { mount } from 'enzyme'
import InputWrapper from './InputWrapper'
import Form from './Form'

describe('<InputWrapper />', () => {
    test('render', () => {
        const wrapper = mount(
            <Form values={{}}>
                <InputWrapper label="label here" name="input_name">
                    {() => 'content here'}
                </InputWrapper>
            </Form>
        )
        expect(wrapper.find('label').length).toBe(1)
        expect(wrapper.html()).toEqual(expect.stringContaining('content here'))
    })

    test('receiving and passing value', () => {
        let capturedValue
        mount(
            <Form values={{ input_name: 'value foo' }}>
                <InputWrapper label="label here" name="input_name">
                    {({ value }) => {
                        capturedValue = value
                        return null
                    }}
                </InputWrapper>
            </Form>
        )
        expect(capturedValue).toBe('value foo')
    })

    test('receiving and passing error', () => {
        let capturedError
        mount(
            <Form
                errors={{ input_name: 'some error' }}
                values={{ input_name: 'value foo' }}
            >
                <InputWrapper label="label here" name="input_name">
                    {({ error }) => {
                        capturedError = error
                        return null
                    }}
                </InputWrapper>
            </Form>
        )
        expect(capturedError).toBe('some error')
    })

    test('render error message', () => {
        const wrapper = mount(
            <Form
                errors={{ input_name: 'some error' }}
                values={{ input_name: 'value foo' }}
            >
                <InputWrapper label="label here" name="input_name">
                    {() => null}
                </InputWrapper>
            </Form>
        )
        expect(wrapper.find('InputError').length).toBe(1)
        expect(wrapper.html()).toEqual(expect.stringContaining('some error'))
    })
})
