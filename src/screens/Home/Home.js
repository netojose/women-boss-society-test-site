/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default () => {
    const { t } = useTranslation()
    return (
        <div>
            <ul
                css={css`
                    list-style: none;
                `}
            >
                <li>
                    <Link to="/register/company">
                        {t('home.sign_up_company')}
                    </Link>
                </li>
                <li>
                    <Link to="/register/user">{t('home.sign_up_user')}</Link>
                </li>
            </ul>
        </div>
    )
}
