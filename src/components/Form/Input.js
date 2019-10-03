import React from 'react'
import PropTypes from 'prop-types'

import inputPropTypes from './input-propTypes'
import InputWrapper from './InputWrapper'

const Input = ({ label, name, type }) => (
    <InputWrapper label={label} name={name}>
        {({ handleChange, value, id }) => (
            <input
                id={id}
                name={name}
                value={value}
                type={type}
                onChange={handleChange}
            />
        )}
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
