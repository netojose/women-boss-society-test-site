import React, { useCallback } from 'react'

import Form from '../../components/Form'

export default () => {
    const handleSubmit = useCallback(values => {
        console.log(values)
    }, [])

    const handleChange = useCallback(values => {
        console.log(values)
    }, [])

    return (
        <div>
            <Form onSubmit={handleSubmit} onChange={handleChange}>
                <Form.Input name="name" label="Company name *" />
                <Form.Input name="email" label="Email *" type="email" />
                <Form.Input
                    name="verify_email"
                    label="Verify email *"
                    type="email"
                />
                <Form.Input
                    name="password"
                    label="Password *"
                    type="password"
                />
                <Form.Input
                    name="verify_password"
                    label="Verify password *"
                    type="password"
                />
                <Form.File name="logo" label="Company logo" accept="image/*" />
                <Form.Textarea name="bio" label="Company bio" />
                <Form.Select
                    name="type"
                    label="Type of business *"
                    options={[
                        { label: 'Please select', value: '' },
                        { label: 'Cinema', value: 1 },
                        { label: 'Ecommerce', value: 2 },
                        { label: 'Educational', value: 3 },
                        { label: 'Fashion', value: 4 },
                        { label: 'Food', value: 5 },
                        { label: 'Insurance', value: 6 },
                        { label: 'Medical', value: 7 },
                        { label: 'Sports', value: 8 },
                        { label: 'Travel', value: 9 }
                    ]}
                />
                <Form.Submit label="Save and proceed to step two" disabled />
            </Form>
        </div>
    )
}
