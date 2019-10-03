/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useContext } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import FormContext from './context'

const Submit = ({ label, i18KeyLabel, disabled }) => {
    const { t } = useTranslation()
    const { i18Namespace } = useContext(FormContext)
    return (
        <input
            css={css`
                text-decoration: none;
                color: #fadada;
                background: #fff;
                border: solid 1px #fadada;
                padding: 10px;
                margin: 0 5px;
                transition: 0.25s;
                cursor: pointer;
                font-size: 16px;
                &[disabled] {
                    cursor: not-allowed;
                    opacity: 0.7;
                    background: #f5f5f5;
                    pointer-events: none;
                }
                &:hover {
                    background: #fadada;
                    color: #fff;
                }
            `}
            type="submit"
            value={i18KeyLabel ? t(`${i18Namespace}.${i18KeyLabel}`) : label}
            disabled={disabled}
        />
    )
}

Submit.defaultProps = {
    label: 'Save',
    i18KeyLabel: null,
    disabled: false
}

Submit.propTypes = {
    label: PropTypes.string,
    i18KeyLabel: PropTypes.string,
    disabled: PropTypes.bool
}

export default Submit
