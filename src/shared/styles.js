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

export const input = css`
    outline: none;
    display: block;
    background: rgba(250, 218, 218, 0.5);
    width: 100%;
    border: 0;
    border-radius: 0;
    box-sizing: border-box;
    padding: 12px 20px;
    color: #0009;
    font-family: inherit;
    font-size: inherit;
    font-weight: 500;
    line-height: inherit;
    transition: 0.3s ease;
    border: solid 1px rgba(250, 218, 218, 0.5);
    &:focus {
        border: solid 1px #0009;
    }
`
