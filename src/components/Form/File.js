import React from 'react'

import inputPropTypes from './input-propTypes'
import InputWrapper from './InputWrapper'

const File = ({ label, name }) => (
    <InputWrapper label={label} id={name}>
        {({ handleChange, value }) => (
            <input
                type="file"
                id={name}
                name={name}
                onChange={handleChange}
                value={value}
            />
        )}
    </InputWrapper>
)

File.propTypes = {
    ...inputPropTypes
}

export default File
