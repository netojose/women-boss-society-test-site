import React from 'react'

import Form from '../../components/Form'

export default () => (
    <div>
        <Form onSubmit={v => console.log(v)}>
            <Form.Input name="name" label="Company name *" />
            <Form.Input name="email" label="Email *" type="email" />
            <Form.Input
                name="verify_email"
                label="Verify email *"
                type="email"
            />
            <Form.Input name="password" label="Password *" type="password" />
            <Form.Input
                name="verify_password"
                label="Verify password *"
                type="password"
            />
            <Form.File name="logo" label="Company logo" />
            <Form.Textarea name="bio" label="Company bio" />
            <Form.Select
                name="type"
                label="Type of business"
                options={[
                    { label: 'A', value: 'a' },
                    { label: 'B', value: 'b' }
                ]}
            />
            <Form.Submit />
        </Form>
    </div>
)
