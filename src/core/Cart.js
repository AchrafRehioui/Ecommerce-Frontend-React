import React from 'react';
import { useSelector } from 'react-redux';
import Layout from './Layout';
import ShowImage from './ShowImage';

function Cart() {

    let productsInCart = useSelector(state => state.cart.products)

    return (
        <div>
             <Layout
                title="Cart"
                description="List of Products in Cart"
                className="container"
            >
                <div className="row">
                    <div className="col-md-9">
                        <h3>Your Cart</h3>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {productsInCart.map((product, index) => (
                                    <tr key={product._id}>
                                        <td width="80px">
                                        <ShowImage item={product} url="product/photo" className="card-img-top"></ShowImage>

                                        </td>
                                        <td>
                                            <h5>{product.name}</h5>
                                            <p className="well">{product.description}</p>
                                        </td>
                                        <td>
                                            <input type="number"/>
                                        </td>
                                        <td>{product.price}</td>
                                    </tr>
                                ))}
                             
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-3"></div>
                </div>

            </Layout>
        </div>
    )
}

export default Cart
