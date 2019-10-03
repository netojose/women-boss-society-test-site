/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import PropTypes from 'prop-types'

const CenteredContent = ({ children }) => (
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
        {children}
    </div>
)

CenteredContent.propTypes = {
    children: PropTypes.node.isRequired
}

export default CenteredContent
