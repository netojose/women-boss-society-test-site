import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import FormContext from './context'

const Submit = ({ label, i18KeyLabel, disabled }) => {
    const { t } = useTranslation()
    const { i18Namespace } = useContext(FormContext)
    return (
        <input
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
