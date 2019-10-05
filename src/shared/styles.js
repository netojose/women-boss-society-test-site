import { css } from '@emotion/core'

export const button = css`
    text-decoration: none;
    color: #fadada;
    background: #fff;
    border: solid 1px #fadada;
    padding: 10px;
    margin: 0 5px;
    transition: 0.25s;
    cursor: pointer;
    font-size: 16px;
    &[disabled] {
        cursor: not-allowed;
        opacity: 0.7;
        background: #f5f5f5;
        pointer-events: none;
    }
    &:hover {
        background: #fadada;
        color: #fff;
    }
`
