import React, { useCallback, useState } from 'react'

import Form from '../../components/Form'
import validator from '../../utils/validator'
import { maxwords } from '../../utils/custom-validation-rules'

export default () => {
    const [step, setStep] = useState(1)
    const [formErrors, setFormErrors] = useState({})
    const [enabledSubmit, setEnabledSubmit] = useState(false)

    const handleSubmit = useCallback(() => {
        setStep(2)
    }, [])

    const handleChange = useCallback(values => {
        const { data } = values
        const rules = {
            name: 'required',
            email: 'required|email',
            verify_email: 'required|email|same:email',
            password: 'required',
            verify_password: 'required|same:password',
            logo: 'required',
            bio: 'required|maxwords:500',
            type: 'required'
        }
        const customRules = {
            maxwords
        }
        const errors = validator({ data, rules, customRules })
        const isValid = Object.keys(errors).length === 0
        setEnabledSubmit(isValid)
        const inputErrors = {}
        if (data.email !== data.verify_email) {
            inputErrors.verify_email = 'Email does not match, please try again'
        }
        if (data.password !== data.verify_password) {
            inputErrors.verify_password =
                'Password does not match, please try again'
        }
        setFormErrors(inputErrors)
    }, [])

    return (
        <div>
            <h2>Company register</h2>
            <h4>
                Step
                {step}
                /2
            </h4>
            {step === 1 && (
                <Form
                    onSubmit={handleSubmit}
                    onChange={handleChange}
                    errors={formErrors}
                >
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
                    <Form.File
                        name="logo"
                        label="Company logo *"
                        accept="image/*"
                    />
                    <Form.Textarea name="bio" label="Company bio *" />
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
                    <Form.Submit
                        label="Save and proceed to step two"
                        disabled={!enabledSubmit}
                    />
                </Form>
            )}
            {step === 2 && <p>Step 2</p>}
        </div>
    )
}
