import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'

import './i18n'
import App from './components/App'

global.React = {
    Fragment
}

ReactDOM.render(<App />, document.getElementById('root'))
