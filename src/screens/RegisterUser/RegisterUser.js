import React from 'react'

import CenteredContent from '../../components/CenteredContent'
import Header from '../../components/Header'
import ButtonLink from '../../components/ButtonLink'

export default () => (
    <CenteredContent>
        <Header labelKey="user_registration.title" />
        <Header priority={2} labelKey="user_registration.coming_soon" />
        <ButtonLink to="/" labelKey="general.back" />
    </CenteredContent>
)
