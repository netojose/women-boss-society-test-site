/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import CenteredContent from '../../components/CenteredContent'
import Header from '../../components/Header'

const MenuItem = ({ to, i18nKey }) => {
    const { t } = useTranslation()
    return (
        <li>
            <Link
                to={to}
                css={css`
                    color: #a972cb;
                    transition: 0.25s;
                    background: none;
                    border: 2px solid;
                    line-height: 80px;
                    margin: 0.5em;
                    padding: 1em 2em;
                    text-decoration: none;
                    &:hover,
                    &:focus {
                        box-shadow: inset 0 0 0 2em #cb72aa;
                        color: #fff;
                    }
                `}
            >
                {t(`home.${i18nKey}`)}
            </Link>
        </li>
    )
}
MenuItem.propTypes = {
    to: PropTypes.string.isRequired,
    i18nKey: PropTypes.string.isRequired
}

export default () => (
    <CenteredContent>
        <Header labelKey="home.site_name" />
        <ul
            css={css`
                list-style: none;
                padding: 0;
                margin: 0;
                display: flex;
                align-items: center;
                flex-direction: column;
            `}
        >
            <MenuItem to="/register/company" i18nKey="sign_up_company" />
            <MenuItem to="/register/user" i18nKey="sign_up_user" />
        </ul>
    </CenteredContent>
)
