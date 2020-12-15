import React, { useState } from 'react';
import Layout from './../../core/Layout';
import toastr from 'toastr';
import "toastr/build/toastr.css";
import { API_URL } from './../../config';
import { isAuthenticated } from './../../auth/helpers';

function AddProduct() {

    const [product, setProduct] = useState({
        photo: '',
        name: '',
        description: '',
        quantity: 0,
        price: 0,
        category: 0,
        shipping: false
    });

    const handleChange = (e) => {

        setProduct({...product, [e.target.id]: value});


    }

    const submitProduct = (e) => {

        e.preventDefault();

        const { user, token } = isAuthenticated();

        fetch(`${API_URL}/product/create/${user._id}`, {
            method: "POST",
            headers: {

                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`

            },
            body: JSON.stringify({ product })
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    toastr.warning(res.error, 'Please Check form !', {
                        positionClass: "toast-bottom-left",
                    })
                }
                else {
                    toastr.success(`Product ${product.name} created`, 'new new Product', {
                        positionClass: "toast-bottom-left",
                    })

                    setProduct({
                        photo: '',
                        name: '',
                        description: '',
                        quantity: 0,
                        price: 0,
                        category: 0,
                        shipping: false
                    })
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
                            
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Upload photo</span>
                                </div>
                                <div className="custom-file">
                                    <input type="file" className="cutom-file-input" name="photo"/>
                                    <label htmlFor="" className="cutom-fole-label">Product</label>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="" className="text-muted"></label>
                                <input  required autoFocus placeholder="Add a Product" onChange={handleChange} type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">description</label>
                                <textarea name="description" id="description" cols="30" rows="10" className="form-control">
                                </textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="quantity">quantity</label>
                                <input type="number" id="quantity" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="price">price</label>
                                <input type="number" id="price" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="category">category</label>
                                <select name="category" id="category" className="form-control">
                                    <option value=""></option>
                                </select>
                            </div>

                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="shipping"/>
                                <label className="form-check-label" for="shipping">shipping</label>
                            </div>

                            <button className="my-5 btn-block btn btn-outline-primary">New Product</button>
                        </form>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default AddProduct;
