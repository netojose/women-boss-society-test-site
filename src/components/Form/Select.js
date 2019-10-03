import React from 'react'
import PropTypes from 'prop-types'

import inputPropTypes from './input-propTypes'
import InputWrapper from './InputWrapper'

const Select = ({ label, name, options }) => (
    <InputWrapper label={label} name={name}>
        {({ handleChange, value, id }) => (
            <select id={id} name={name} onChange={handleChange} value={value}>
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        )}
    </InputWrapper>
)

Select.propTypes = {
    ...inputPropTypes,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
                .isRequired
        })
    ).isRequired
}

export default Select
