/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import PropTypes from 'prop-types'

const InputError = ({ error }) =>
    error && (
        <span
            css={css`
                color: #b00020;
                padding: 3px;
                font-size: 0.9em;
            `}
        >
            {error}
        </span>
    )

InputError.propTypes = {
    error: PropTypes.string.isRequired
}

export default InputError
