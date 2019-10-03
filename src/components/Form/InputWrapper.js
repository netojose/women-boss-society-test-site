import React from 'react'
import PropTypes from 'prop-types'

const InputWrapper = ({ children, label, id }) => (
    <div>
        <label htmlFor={id}>{label}</label>
        {children}
    </div>
)

InputWrapper.propTypes = {
    children: PropTypes.node.isRequired,
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
}

export default InputWrapper
