/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import inputPropTypes from './input-propTypes'
import InputWrapper from './InputWrapper'
import { input as inputStyle } from '../../shared/styles'

const Textarea = ({ label, name }) => (
    <InputWrapper label={label} name={name}>
        {({ handleChange, value, id }) => (
            <textarea
                id={id}
                name={name}
                value={value}
                onChange={handleChange}
                css={[
                    inputStyle,
                    css`
                        height: 120px;
                    `
                ]}
            />
        )}
    </InputWrapper>
)

Textarea.propTypes = {
    ...inputPropTypes
}

export default Textarea
