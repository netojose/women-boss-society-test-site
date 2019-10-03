import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Home from '../../screens/Home'
import RegisterUser from '../../screens/RegisterUser'
import RegisterCompany from '../../screens/RegisterCompany'

export default () => (
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
)