import React from 'react'
import PropTypes from 'prop-types'

import inputPropTypes from './input-propTypes'
import InputWrapper from './InputWrapper'

const Input = ({ label, name, type }) => (
    <InputWrapper label={label} id={name}>
        <input id={name} name={name} type={type} />
    </InputWrapper>
)

Input.defaultProps = {
    type: 'text'
}

Input.propTypes = {
    ...inputPropTypes,
    type: PropTypes.string
}

export default Input
