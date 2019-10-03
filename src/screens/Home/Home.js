/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

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

export default () => {
    const { t } = useTranslation()
    return (
        <div
            css={css`
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                width: 100%;
                height: 100vh;
            `}
        >
            <h1>{t('home.site_name')}</h1>
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
        </div>
    )
}
