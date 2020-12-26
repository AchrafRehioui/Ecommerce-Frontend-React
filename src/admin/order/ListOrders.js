import React, { useState, useEffect } from 'react';
import { isAuthenticated } from './../../auth/helpers';
import Layout from './../../core/Layout';
import { listOfOrders } from './../ApiAdmin';


function ListOrders() {

    const [orders, setOrders] = useState([]);

    const { user, token } = isAuthenticated();

    const loadOrders = (user, token) => {

        listOfOrders(user._id, token)
            .then(res => setOrders(res))
            .catch(err => console.error(err))
    }

    useEffect(() => {
        loadOrders(user, token)
    }, []);

    return (
        <div>
        <Layout
            title="Orders"
            description="Orders Management"
            className="container"
        >
            <div className="row">
                <div className="col-md-6 mx-auto">
                    { JSON.stringify(orders) }
                </div>
            </div>
        </Layout>
    </div>
    )
}

export default ListOrders
