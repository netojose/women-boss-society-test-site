import React from 'react'

import inputPropTypes from './input-propTypes'
import InputWrapper from './InputWrapper'

const Textarea = ({ label, name }) => (
    <InputWrapper label={label} id={name}>
        {({ handleChange, value }) => (
            <textarea
                id={name}
                name={name}
                value={value}
                onChange={handleChange}
            />
        )}
    </InputWrapper>
)

Textarea.propTypes = {
    ...inputPropTypes
}

export default Textarea
