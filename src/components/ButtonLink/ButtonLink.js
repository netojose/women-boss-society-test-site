/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { button as buttonStyles } from '../../shared/styles'

const ButtonLink = ({ to, labelKey }) => {
    const { t } = useTranslation()
    return (
        <Link to={to} css={buttonStyles}>
            {t(labelKey)}
        </Link>
    )
}

ButtonLink.propTypes = {
    to: PropTypes.string.isRequired,
    labelKey: PropTypes.string.isRequired
}

export default ButtonLink
