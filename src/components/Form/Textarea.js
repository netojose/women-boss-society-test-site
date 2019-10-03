import React from 'react'

import inputPropTypes from './input-propTypes'
import InputWrapper from './InputWrapper'

const Textarea = ({ label, name }) => (
    <InputWrapper label={label} name={name}>
        {({ handleChange, value, id }) => (
            <textarea
                id={id}
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
