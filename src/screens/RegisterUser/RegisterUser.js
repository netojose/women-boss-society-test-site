import React from 'react'
import { useTranslation } from 'react-i18next'

export default () => {
    const { t } = useTranslation()
    return (
        <div>
            <h2>{t('user_registration.title')}</h2>
        </div>
    )
}
