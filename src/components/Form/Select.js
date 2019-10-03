import React from 'react'
import PropTypes from 'prop-types'

import inputPropTypes from './input-propTypes'
import InputWrapper from './InputWrapper'
import InputError from './InputError'

const Select = ({ label, name, options }) => (
    <InputWrapper label={label} id={name}>
        {({ handleChange, value, error }) => (
            <>
                <select
                    id={name}
                    name={name}
                    onChange={handleChange}
                    value={value}
                >
                    {options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <InputError error={error} />
            </>
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
