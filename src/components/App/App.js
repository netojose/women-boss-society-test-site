import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Global, css } from '@emotion/core'
import loadable from '@loadable/component'

const Loading = () => null
const config = { fallback: <Loading /> }

const Home = loadable(() => import('../../screens/Home'), config)
const User = loadable(() => import('../../screens/RegisterUser'), config)
const Company = loadable(() => import('../../screens/RegisterCompany'), config)

const App = () => (
    <>
        <Global
            styles={css`
                * {
                    font-family: Helvetica, Arial, sans-serif;
                    box-sizing: border-box;
                }
                body {
                    margin: 0;
                }
            `}
        />
        <Router>
            <Switch>
                <Route path="/register/user">
                    <User />
                </Route>
                <Route path="/register/company">
                    <Company />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    </>
)

export default App
