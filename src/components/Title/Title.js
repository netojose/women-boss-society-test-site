/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

const Title = ({ labelKey }) => {
    const { t } = useTranslation()
    return (
        <h1
            css={css`
                color: #242731;
            `}
        >
            {t(labelKey)}
        </h1>
    )
}

Title.propTypes = {
    labelKey: PropTypes.string.isRequired
}

export default Title
