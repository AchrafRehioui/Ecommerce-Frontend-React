import React, { useState, useEffect } from 'react';
import { isAuthenticated } from './../auth/helpers';
import { Link } from 'react-router-dom';
import { getBraintreeToken } from './ApiCore';
import DropIn from 'braintree-web-drop-in-react';



function Checkout({ products }) {


    const [data, setData] = useState({
        braintreeToken: null,
        error: null,
        instance: {}
    })

    const userId = isAuthenticated() && isAuthenticated().user._id;
    const token = isAuthenticated() && isAuthenticated().token;

    useEffect(() => {
        getBraintreeToken(userId, token)
           .then(res => setData({...data, braintreeToken: res.token}))
           .catch(err => setData({...data, error: err}))
    }, [])

    const totalToCheckout = (products) => {
        return products.reduce((total, product) => total + (product.count * product.price), 0)
    }


    const dropIn = () => (
        <div>
                { data.braintreeToken !== null && products.length > 0 && (
                    <DropIn options={{
                        authorization: data.braintreeToken
                    }}
                    onInstance={instance => data.instance = instance}
                    />
                )}
        </div>
       
    )



    const showBtnToCheckout = () => {
        if(isAuthenticated()){
            return (
                <>
                { dropIn() }
                <button className="btn btn-raised btn-success btn-block">Checkout</button>
                </>
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
