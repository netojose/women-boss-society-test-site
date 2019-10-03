import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import FormContext from './context'

const InputWrapper = ({ children, label, id }) => {
    const { values, errors, handleChange, i18Namespace } = useContext(
        FormContext
    )
    const { t } = useTranslation()
    const value = values[id] || ''
    const error = errors[id] || ''
    return (
        <div>
            <label htmlFor={id}>{label || t(`${i18Namespace}.${id}`)}</label>
            {children({ value, error, handleChange })}
        </div>
    )
}

InputWrapper.defaultProps = {
    label: null
}

InputWrapper.propTypes = {
    children: PropTypes.func.isRequired,
    label: PropTypes.string,
    id: PropTypes.string.isRequired
}

export default InputWrapper
