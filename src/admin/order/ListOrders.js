import React, { useState, useEffect } from 'react';
import moment from 'moment';
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

    const notOrders = () => {
        if(orders.length === 0){
            return (
                <div className="alert alert-warning text-center my-5 display-3">
                    Not Orders Yet !
                </div>
            )
        }else {
            return(
                <div className="alert alert-info text-center my-5 display-3">
                    Total Orders {orders.length}
                </div>
            )
        }
    }

    const showOrders = () => {
        return orders.length && orders.map(order => (
            <div className="my-3" key={order._id}>
                <ul class="list-group">
                    <li class="list-group-item active"><strong>Transact ID</strong>{order.transaction_id}</li>
                    <li class="list-group-item"><strong>Amount</strong> ${order.amount}</li>
                    <li class="list-group-item"><strong>Status</strong> {order.status}</li>
                    <li class="list-group-item"><strong>Ordered On </strong> {moment(order.createdAt).fromNow()}</li>
                    <li class="list-group-item"><strong>Customer </strong> {order.user.name}</li>
                    <li class="list-group-item"><strong>Delivery Address </strong> {order.address}</li>
                </ul>
            </div>
            ))
    }

    return (
        <div>
        <Layout
            title="Orders"
            description="Orders Management"
            className="container"
        >
            <div className="row">
                <div className="col-md-6 mx-auto">
                    {notOrders()}
                    { showOrders() }
                </div>
            </div>
        </Layout>
    </div>
    )
}

export default ListOrders
