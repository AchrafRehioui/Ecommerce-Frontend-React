import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const isActive = (history, path) => {

    if (history.location.pathname === path) {
        return { color: '#000' }
    }
    else {
        return { color: '#fff' }
    }
}

const Menu = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <Link className="navbar-brand" to="/">Ecommerce</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link style={isActive(props.history, '/')} className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link style={isActive(props.history, '/signin')} className="nav-link" to="/signin">SignIn</Link>
                        </li>
                        <li className="nav-item">
                            <Link style={isActive(props.history, '/signup')} className="nav-link" to="/signup">SignUp</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

    )
}

export default withRouter(Menu);
