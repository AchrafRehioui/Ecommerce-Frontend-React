import React, { Fragment } from 'react';
import Layout from './../core/Layout';
import { isAuthenticated } from './../auth/helpers';

function Dashboard() {

    const { user: { name, email, role } } = isAuthenticated() 


    return (
        <Fragment>
            <Layout
                title="Dashboard"
                description="Dashboard user"
                className="container"
            >
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">User INFORMATION</h5>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">{name}</li>
                                    <li className="list-group-item">{email}</li>
                                    <li className="list-group-item">{role ? 'Admin' : 'User'}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Purchase HISTORY</h5>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"></li>
                                    <li className="list-group-item"></li>
                                    <li className="list-group-item"></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        </Fragment>
    )
}

export default Dashboard;
