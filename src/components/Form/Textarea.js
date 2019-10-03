import React from 'react'

import inputPropTypes from './input-propTypes'
import InputWrapper from './InputWrapper'
import InputError from './InputError'

const Textarea = ({ label, name }) => (
    <InputWrapper label={label} id={name}>
        {({ handleChange, value, error }) => (
            <>
                <textarea
                    id={name}
                    name={name}
                    value={value}
                    onChange={handleChange}
                />
                <InputError error={error} />
            </>
        )}
    </InputWrapper>
)

Textarea.propTypes = {
    ...inputPropTypes
}

export default Textarea
