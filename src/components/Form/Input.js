import React from 'react'
import PropTypes from 'prop-types'

import inputPropTypes from './input-propTypes'
import InputWrapper from './InputWrapper'
import InputError from './InputError'

const Input = ({ label, name, type }) => (
    <InputWrapper label={label} id={name}>
        {({ handleChange, value, error }) => (
            <>
                <input
                    id={name}
                    name={name}
                    value={value}
                    type={type}
                    onChange={handleChange}
                />
                <InputError error={error} />
            </>
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
