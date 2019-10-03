import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import FormContext from './context'

const InputWrapper = ({ children, label, id }) => {
    const { values, handleChange } = useContext(FormContext)
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            {children({ value: values[id] || '', handleChange })}
        </div>
    )
}

InputWrapper.propTypes = {
    children: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
}

export default InputWrapper
