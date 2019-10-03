import React from 'react'

import Form from '../../components/Form'

export default () => (
    <div>
        <Form>
            <Form.Input name="name" label="Company name *" />
            <Form.Input name="email" label="Email *" type="email" />
            <Form.Input
                name="vefiry_email"
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
            <Form.Select name="type" label="Type of business" />
            <Form.Submit />
        </Form>
    </div>
)
