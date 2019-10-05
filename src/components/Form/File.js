/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useCallback, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import inputPropTypes from './input-propTypes'
import InputWrapper from './InputWrapper'

const imageTypes = ['image/gif', 'image/jpeg', 'image/png']

const File = ({ label, btnLabelKey, name, accept, showPreview }) => {
    const { t } = useTranslation()
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
        <InputWrapper label={label} name={name}>
            {({ handleChange, id }) => (
                <>
                    <input
                        css={css`
                            && {
                                display: none;
                            }
                        `}
                        type="file"
                        ref={inputFileRef}
                        id={id}
                        name={name}
                        onChange={e => handleChoose(e, handleChange)}
                        accept={accept}
                    />
                    <input
                        type="button"
                        value={t(btnLabelKey)}
                        onClick={handleInputFileClick}
                    />
                    {previewSrc && (
                        <img
                            alt={t('general.upload_preview')}
                            src={previewSrc}
                            css={css`
                                max-width: 100%;
                            `}
                        />
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
    btnLabelKey: PropTypes.string.isRequired,
    accept: PropTypes.string,
    showPreview: PropTypes.bool
}

export default File
