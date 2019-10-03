/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Link } from 'react-router-dom'

export default () => (
    <div>
        <ul
            css={css`
                list-style: none;
            `}
        >
            <li>
                <Link to="/register/company">Sign up as company</Link>
            </li>
            <li>
                <Link to="/register/user">Sign up as a user</Link>
            </li>
        </ul>
    </div>
)
