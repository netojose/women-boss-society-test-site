import React from 'react'

import CenteredContent from '../../components/CenteredContent'
import Title from '../../components/Title'
import Subtitle from '../../components/Subtitle'
import ButtonLink from '../../components/ButtonLink'

export default () => (
    <CenteredContent>
        <Title labelKey="user_registration.title" />
        <Subtitle labelKey="user_registration.coming_soon" />
        <ButtonLink to="/" labelKey="general.back" />
    </CenteredContent>
)
