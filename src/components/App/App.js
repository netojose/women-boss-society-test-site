import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Global, css } from '@emotion/core'

import Home from '../../screens/Home'
import RegisterUser from '../../screens/RegisterUser'
import RegisterCompany from '../../screens/RegisterCompany'

export default () => (
    <>
        <Global
            styles={css`
                * {
                    font-family: Helvetica, Arial, sans-serif;
                }
                body {
                    margin: 0;
                }
            `}
        />
        <Router>
            <Switch>
                <Route path="/register/user">
                    <RegisterUser />
                </Route>
                <Route path="/register/company">
                    <RegisterCompany />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    </>
)
