import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import FormContext from './context'

const InputWrapper = ({ children, label, id }) => {
    const { values, errors, handleChange } = useContext(FormContext)
    const value = values[id] || ''
    const error = errors[id] || ''
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            {children({ value, error, handleChange })}
        </div>
    )
}

InputWrapper.propTypes = {
    children: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
}

export default InputWrapper
