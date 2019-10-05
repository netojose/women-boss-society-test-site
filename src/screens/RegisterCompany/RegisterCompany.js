/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'

import CenteredContent from '../../components/CenteredContent'
import Header from '../../components/Header'
import Form from '../../components/Form'
import ButtonLink from '../../components/ButtonLink'
import validator from '../../utils/validator'
import { maxwords } from '../../utils/custom-validation-rules'

const BUSINESS_TYPES = [
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
]

export default () => {
    const { t } = useTranslation()
    const [formValues, setFormValues] = useState({})
    const [step, setStep] = useState(1)
    const [formErrors, setFormErrors] = useState({})
    const [enabledSubmit, setEnabledSubmit] = useState(false)

    const handleSubmit = useCallback(() => setStep(2), [])

    const handleOnChangeForm = useCallback(data => {
        setFormValues(data)
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
            inputErrors.verify_email = t(
                'company_registration.validation.email'
            )
        }
        if (data.password !== data.verify_password) {
            inputErrors.verify_password = t(
                'company_registration.validation.password'
            )
        }
        setFormErrors(inputErrors)
    }, [])

    return (
        <CenteredContent>
            <Header labelKey="company_registration.title" />
            <Header
                priority={2}
                labelKey="company_registration.step"
                placeholders={{ start: step, end: 2 }}
            />
            {step === 1 && (
                <Form
                    onSubmit={handleSubmit}
                    onChange={handleOnChangeForm}
                    i18Namespace="company_registration.form"
                    errors={formErrors}
                    values={formValues}
                    css={css`
                        width: 350px;
                        margin-bottom: 10px;
                    `}
                >
                    <Form.Input name="name" />
                    <Form.Input name="email" type="email" />
                    <Form.Input name="verify_email" type="email" />
                    <Form.Input name="password" type="password" />
                    <Form.Input name="verify_password" type="password" />
                    <Form.File
                        name="logo"
                        btnLabelKey="company_registration.form.logo_upload_text"
                        accept="image/*"
                    />
                    <Form.Textarea name="bio" label="Company bio *" />
                    <Form.Select name="type" options={BUSINESS_TYPES} />
                    <ButtonLink labelKey="general.cancel" to="/" />
                    <Form.Submit
                        i18KeyLabel="submit"
                        disabled={!enabledSubmit}
                    />
                </Form>
            )}
            {step === 2 && (
                <div>
                    <Header
                        priority={3}
                        labelKey="company_registration.step_2_coming_soon_text"
                    />
                </div>
            )}
        </CenteredContent>
    )
}
