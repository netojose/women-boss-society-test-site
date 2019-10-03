import React, { useCallback, useState, useRef } from 'react'
import PropTypes from 'prop-types'

import inputPropTypes from './input-propTypes'
import InputWrapper from './InputWrapper'

const imageTypes = ['image/gif', 'image/jpeg', 'image/png']

const File = ({ label, name, accept, showPreview }) => {
    const inputFileRef = useRef(null)
    const [previewSrc, setPreviewSrc] = useState(null)
    const handleChoose = useCallback((changeEvent, cb) => {
        const file = changeEvent.target.files.item(0)
        if (showPreview && imageTypes.includes(file.type)) {
            const reader = new FileReader()
            reader.onload = loadEvent => setPreviewSrc(loadEvent.target.result)
            reader.readAsDataURL(file)
        }
        cb(changeEvent)
    }, [])
    const handleInputFileClick = useCallback(() => {
        inputFileRef.current.click()
    }, [inputFileRef])
    return (
        <InputWrapper label={label} id={name}>
            {({ handleChange, value }) => (
                <>
                    <input
                        type="button"
                        value="Choose your file"
                        onClick={handleInputFileClick}
                    />
                    <input
                        hidden
                        type="file"
                        ref={inputFileRef}
                        id={name}
                        name={name}
                        onChange={e => handleChoose(e, handleChange)}
                        value={value}
                        accept={accept}
                    />
                    {previewSrc && (
                        <img alt="Upload preview" src={previewSrc} />
                    )}
                </>
            )}
        </InputWrapper>
    )
}

File.defaultProps = {
    accept: null,
    showPreview: true
}

File.propTypes = {
    ...inputPropTypes,
    accept: PropTypes.string,
    showPreview: PropTypes.bool
}

export default File
