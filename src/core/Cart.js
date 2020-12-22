import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incProductCount, decProductCount } from './../actions/cartActions';
import Layout from './Layout';
import ShowImage from './ShowImage';

function Cart() {

    let productsInCart = useSelector(state => state.cart.products)
    let dispatch = useDispatch()


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
                                            <p className="well">{product.description.substring(0, 100)}</p>
                                        </td>
                                        <td>
                                            <div class="input-group">
                                                <h3><span className="span span-success">{product.count}</span></h3>
                                                <div class="input-group-prepend">
                                                <button onClick={() => dispatch(incProductCount(product))} className="btn ml-2 btn-raised btn-sm btn-info"><i className="material-icons">add</i></button>                                                    
                                                
                                                <button onClick={() => dispatch(decProductCount(product))} className="btn btn-raised btn-sm btn-secondary"><i className="material-icons">remove</i></button>
                                                </div>
                                            </div>
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
