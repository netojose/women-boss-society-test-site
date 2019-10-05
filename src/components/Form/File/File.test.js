import React from 'react'
import { mount } from 'enzyme'
import File from './File'
import Form from '../Form'

describe('<File />', () => {
    test('render', () => {
        const wrapper = mount(
            <Form values={{ some_name: '' }}>
                <File name="some_name" btnLabelKey="someKey" />
            </Form>
        )
        expect(wrapper.find('input[type="file"]').length).toBe(1)
    })

    test('onChange event trigger', () => {
        const onChangeMock = jest.fn()
        const wrapper = mount(
            <Form values={{ some_name: '' }} onChange={onChangeMock}>
                <File name="some_name" btnLabelKey="someKey" />
            </Form>
        )
        expect(onChangeMock).not.toHaveBeenCalled()
        const file = new Blob(['file contents'], { type: 'text/plain' })
        wrapper
            .find('input[type="file"]')
            .simulate('change', { target: { files: [file] } })
        expect(onChangeMock).toHaveBeenCalled()
    })
})
