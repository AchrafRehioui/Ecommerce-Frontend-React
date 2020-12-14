import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Signin from './user/Signin';
import Signup from './user/Signup';
import Dashboard from './user/Dashboard';
import Home from './core/Home';
import Menu from './core/Menu';
import PrivateRoute from './auth/PrivateRoute';


const Routes = () => {
    return (
        <BrowserRouter>
            <Menu />
            <Switch>
                <PrivateRoute path='/' exact component={Home} />
                <PrivateRoute path='/dashboard' exact component={Dashboard} />
                <Route path='/signin' exact component={Signin} />
                <Route path='/signup' exact component={Signup} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
