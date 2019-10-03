import React from 'react'

import inputPropTypes from './input-propTypes'
import InputWrapper from './InputWrapper'

const Textarea = ({ label, name }) => (
    <InputWrapper label={label} id={name}>
        <textarea id={name} name={name} />
    </InputWrapper>
)

Textarea.propTypes = {
    ...inputPropTypes
}

export default Textarea
