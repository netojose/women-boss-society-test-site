import React from 'react'

import inputPropTypes from './input-propTypes'
import InputWrapper from './InputWrapper'

const File = ({ label, name }) => (
    <InputWrapper label={label} id={name}>
        <input type="file" id={name} name={name} />
    </InputWrapper>
)

File.propTypes = {
    ...inputPropTypes
}

export default File
