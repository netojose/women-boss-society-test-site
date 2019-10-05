import React from 'react'
import { mount } from 'enzyme'
import Select from './Select'
import Form from '../Form'

const options = [{ label: 'Item 1', value: 1 }, { label: 'Item 2', value: 2 }]

describe('<Select />', () => {
    test('render', () => {
        const wrapper = mount(
            <Form values={{ some_name: '' }}>
                <Select name="some_name" options={options} />
            </Form>
        )
        expect(wrapper.find('select').length).toBe(1)
    })

    test('value prop rendering', () => {
        const wrapper = mount(
            <Form values={{ some_name: 2 }}>
                <Select name="some_name" options={options} />
            </Form>
        )
        expect(wrapper.find('select').prop('value')).toBe(2)
    })

    test('onChange event trigger', () => {
        const onChangeMock = jest.fn()
        const wrapper = mount(
            <Form values={{ some_name: 'some value' }} onChange={onChangeMock}>
                <Select name="some_name" options={options} />
            </Form>
        )
        expect(onChangeMock).not.toHaveBeenCalled()
        const input = wrapper.find('select')
        input.instance().value = 1
        input.simulate('change')
        expect(onChangeMock).toHaveBeenCalled()
    })
})
