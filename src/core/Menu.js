import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { API_URL } from './../config';
import { isAuthenticated } from './../auth/helpers';

import toastr from 'toastr';
import "toastr/build/toastr.css";



const isActive = (history, path) => {

    if (history.location.pathname === path) {

        return { color: '#000' }

    }
    else {

        return { color: '#fff' }

    }
}

const Menu = (props) => {

    const signout = () => {
        fetch(`${API_URL}/signout`)
            .then(() => {
                toastr.info('User sign out', 'Next time', {
                    positionClass: "toast-bottom-left",
                })
                localStorage.removeItem('jwt_info')

                props.history.push('/signin')
            })
            .catch()
    }



    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <Link className="navbar-brand" to="/">Ecommerce</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">

                        <Fragment>
                            <li className="nav-item active">
                                <Link style={isActive(props.history, '/')} className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>

                            <li className="nav-item active">
                                <Link style={isActive(props.history, '/dashboard')} className="nav-link" to="/dashboard">Dashboard <span className="sr-only">(current)</span></Link>
                            </li>
                        </Fragment>

                    </ul>
                    <ul className="navbar-nav ml-auto">

                        {!isAuthenticated() && (
                            <Fragment>
                                <li className="nav-item">
                                    <Link style={isActive(props.history, '/signin')} className="nav-link" to="/signin">Connexion</Link>
                                </li>
                                <li className="nav-item">
                                    <Link style={isActive(props.history, '/signup')} className="nav-link" to="/signup">Register</Link>
                                </li>
                            </Fragment>
                        )}

                        {isAuthenticated() && (

                            <li className="nav-item">
                                <span className="nav-link" style={{ cursor: 'pointer' }} onClick={signout} >SignOut</span>
                            </li>
                        )}
                    </ul>
                </div>
            </nav>
        </div>

    )
}

export default withRouter(Menu);
