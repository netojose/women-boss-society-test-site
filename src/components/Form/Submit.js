import React from 'react'
import PropTypes from 'prop-types'

const Submit = ({ label, disabled }) => (
    <input type="submit" value={label} disabled={disabled} />
)

Submit.defaultProps = {
    label: 'Save',
    disabled: false
}

Submit.propTypes = {
    label: PropTypes.string,
    disabled: PropTypes.bool
}

export default Submit
