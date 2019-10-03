import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'

import FormContext from './context'

const Form = ({ children, onSubmit }) => {
    const [values, setValues] = useState({})
    const handleSubmit = useCallback(
        e => {
            e.preventDefault()
            onSubmit(values)
        },
        [onSubmit, values]
    )
    const context = {
        values,
        handleChange: ({ target }) =>
            setValues(current => ({ ...current, [target.name]: target.value }))
    }
    return (
        <form onSubmit={handleSubmit}>
            <FormContext.Provider value={context}>
                {children}
            </FormContext.Provider>
        </form>
    )
}

Form.defaultProps = {
    onSubmit: () => undefined
}

Form.propTypes = {
    children: PropTypes.node.isRequired,
    onSubmit: PropTypes.func
}

export default Form
