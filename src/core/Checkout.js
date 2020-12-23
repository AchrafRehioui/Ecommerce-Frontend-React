import React from 'react';
import { isAuthenticated } from './../auth/helpers';
import { Link } from 'react-router-dom';


function Checkout({ products }) {

    const totalToCheckout = (products) => {

        return products.reduce((total, product) => total + (product.count * product.price), 0)
    }

    const showBtnToCheckout = () => {
        if(isAuthenticated()){
            return (
                <button className="btn btn-raised btn-success btn-block">Checkout</button>
            )
        }
        return (
            <Link to="/signin">
                <button className="btn btn-raised btn-warning btn-block">Sign in To Checkout</button>
            </Link>
        )
    }

    return (
        <div>
            <h2 className="text-center">Total : <span className="badge badge-success">{totalToCheckout(products)}</span></h2>
            {showBtnToCheckout()}
        </div>
    )
}

export default Checkout;
