import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Signin from './user/Signin';
import Signup from './user/Signup';
import Dashboard from './user/Dashboard';
import AdminDashboard from './user/AdminDashboard';
import Home from './core/Home';
import Menu from './core/Menu';
import PrivateRoute from './auth/PrivateRoute';
import AdminRoute from './auth/AdminRoute';
import AddCategory from './admin/category/AddCategory';


const Routes = () => {
    return (
        <BrowserRouter>
            <Menu />
            <Switch>
                <PrivateRoute path='/' exact component={Home} />
                <PrivateRoute path='/dashboard' exact component={Dashboard} />
                <AdminRoute path='/admin/dashboard' exact component={AdminDashboard} />
                <AdminRoute path='/category/create' exact component={AddCategory} />
                <Route path='/signin' exact component={Signin} />
                <Route path='/signup' exact component={Signup} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
