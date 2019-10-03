import React from 'react'
import PropTypes from 'prop-types'

const InputError = ({ error }) => error && <span>{error}</span>

InputError.propTypes = {
    error: PropTypes.string.isRequired
}

export default InputError
