/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const ButtonLink = ({ to, labelKey }) => {
    const { t } = useTranslation()
    return (
        <Link
            to={to}
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
                &:hover {
                    background: #fadada;
                    color: #fff;
                }
            `}
        >
            {t(labelKey)}
        </Link>
    )
}

ButtonLink.propTypes = {
    to: PropTypes.string.isRequired,
    labelKey: PropTypes.string.isRequired
}

export default ButtonLink
