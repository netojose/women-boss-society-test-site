/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

const Header = ({ labelKey, priority, placeholders }) => {
    const { t } = useTranslation()
    const Tag = `h${priority}`
    return (
        <Tag
            css={css`
                color: #242731;
                margin: 10px 10px;
            `}
        >
            {t(labelKey, placeholders)}
        </Tag>
    )
}

Header.defaultProps = {
    placeholders: {},
    priority: 1
}

Header.propTypes = {
    labelKey: PropTypes.string.isRequired,
    priority: PropTypes.number,
    placeholders: PropTypes.shape({})
}

export default Header
