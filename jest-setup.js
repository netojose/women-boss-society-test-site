import { Fragment } from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import './src/i18n'

global.React = {
    Fragment
}

Enzyme.configure({ adapter: new Adapter() })
