/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

const Subtitle = ({ labelKey }) => {
    const { t } = useTranslation()
    return (
        <h2
            css={css`
                color: #242731;
            `}
        >
            {t(labelKey)}
        </h2>
    )
}

Subtitle.propTypes = {
    labelKey: PropTypes.string.isRequired
}

export default Subtitle
