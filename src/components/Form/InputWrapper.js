/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useContext } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import FormContext from './context'
import InputError from './InputError'

const InputWrapper = ({ children, label, name }) => {
    const { values, errors, handleChange, i18Namespace } = useContext(
        FormContext
    )
    const { t } = useTranslation()
    const value = values[name] || ''
    const error = errors[name] || ''
    const inputLabel = label || t(`${i18Namespace}.${name}`)
    const id = `inp-${name}`
    return (
        <div
            css={css`
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                margin: 0 0 20px;
                &:last-child {
                    margin: 0;
                }
            `}
        >
            <label
                htmlFor={id}
                css={css`
                    display: block;
                    margin: 0 0 10px;
                    color: #666;
                    font-size: 12px;
                    font-weight: 500;
                    line-height: 1;
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                `}
            >
                {inputLabel}
            </label>
            {children({ value, id, inputLabel, error, handleChange })}
            <InputError error={error} />
        </div>
    )
}

InputWrapper.defaultProps = {
    label: null
}

InputWrapper.propTypes = {
    children: PropTypes.func.isRequired,
    label: PropTypes.string,
    name: PropTypes.string.isRequired
}

export default InputWrapper
