import React from 'react'

import inputPropTypes from './input-propTypes'
import InputWrapper from './InputWrapper'

const Select = ({ label, name }) => (
    <InputWrapper label={label} id={name}>
        <select id={name} name={name}>
            <option>oi</option>
        </select>
    </InputWrapper>
)

Select.propTypes = {
    ...inputPropTypes
}

export default Select
