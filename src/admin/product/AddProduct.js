import React, { useState } from 'react';
import Layout from './../../core/Layout';
import toastr from 'toastr';
import "toastr/build/toastr.css";
import { API_URL } from './../../config';
import { isAuthenticated } from './../../auth/helpers';

function AddProduct() {

    const [name, setName] = useState('');

    const handleChange = (e) => {

        setName(e.target.value);

    }

    const submitProduct = (e) => {

        e.preventDefault();

        const { user, token } = isAuthenticated();

        fetch(`${API_URL}/category/create/${user._id}`, {
            method: "POST",
            headers: {

                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`

            },
            body: JSON.stringify({ name })
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    toastr.warning(res.error, 'Please Check form !', {
                        positionClass: "toast-bottom-left",
                    })
                }
                else {
                    toastr.success(`Category ${name} created`, 'new Category', {
                        positionClass: "toast-bottom-left",
                    })

                    setName("")
                }
            })
            .catch(err => toastr.error(err, 'Server error !', {
                positionClass: "toast-bottom-left",
            }))


    }

    return (
        <div>
            <Layout
                title="Product"
                description="New product"
                className="container"
            >
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <form onSubmit={submitProduct}>
                            <div className="form-group">
                                <label htmlFor="" className="text-muted"></label>
                                <input value={name} required autoFocus placeholder="Add a Product" onChange={handleChange} type="text" className="form-control" />
                            </div>
                            <button className="btn-outline-primary">New Product</button>
                        </form>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default AddProduct;
