import React, { useState, useEffect } from 'react';
import { isAuthenticated, emptyCart } from './../auth/helpers';
import { Link } from 'react-router-dom';
import { getBraintreeToken, processPayment } from './ApiCore';
import DropIn from 'braintree-web-drop-in-react';

import toastr from 'toastr';
import "toastr/build/toastr.css";

function Checkout({ products }) {


    const [data, setData] = useState({
        braintreeToken: null,
        error: null,
        instance: {},
        address: ''
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
                        authorization: data.braintreeToken,
                        paypal: {
                            flow: "vault"
                        }
                    }}
                    onInstance={instance => data.instance = instance}
                    />
                )}
        </div>
       
    )


    const buy = () => {

        
        data.instance.requestPaymentMethod()
            .then(data => {

                let paymentData = {
                    amount: totalToCheckout(products),
                    paymentMethodNonce: data.nonce
                }

                processPayment(userId, token, paymentData)
                    .then(res => {
                        
                        let orderData = {
                            products,
                            transactionId: res.transaction.id,
                            amount: res.transaction.amount,
                            address: data.address
                        }

                        createOrder(userId, token, orderData )
                            .then(res => console.log(res))
                            .catch(err => console.log(err));

                        emptyCart(() => {
                            toastr.success('Valid', 'Thanks, Payment was SuccessFully', {
                                positionClass: "toast-bottom-left",
                        })
                        
                })
                    })
                    .catch(err => {
                        toastr.error('inValid', err.message, {
                        positionClass: "toast-bottom-left",
                    })
                })

            })
            .catch(err => {
                toastr.error('inValid', err.message, {
                          positionClass: "toast-bottom-left",
                  })
            })
        
    }
   

    const showBtnToCheckout = () => {
        if(isAuthenticated()){
            return (
                <>
                { dropIn() }
                <button onClick={buy} className="btn btn-raised btn-success btn-block">Pay</button>
                </>
            )
        }


        return (
            <Link to="/signin">
                <button className="btn btn-raised btn-warning btn-block">Sign in To Checkout</button>
            </Link>
        )
    }

    const handleInput = (e) => {

        setData({...data, address: e.target.value})
    }

    return (
        <div>
            <h2 className="text-center">Total : <span className="badge badge-success">{totalToCheckout(products)}</span></h2>
            
            <textarea onChange={handleInput} rows="2"></textarea>

            {showBtnToCheckout()}
        </div>
    )
}

export default Checkout;
