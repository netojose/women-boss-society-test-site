import { css } from '@emotion/core'

export const button = css`
    text-decoration: none;
    color: #a972cb;
    background: #fff;
    border: solid 1px #a972cb;
    padding: 10px;
    margin: 0 5px;
    transition: 0.25s;
    cursor: pointer;
    font-size: 16px;
    &[disabled] {
        cursor: not-allowed;
        opacity: 0.7;
        background: #f5f5f5;
        color: #666;
        border-color: #666;
        pointer-events: none;
    }
    &:hover {
        background: #a972cb;
        color: #fff;
    }
`
