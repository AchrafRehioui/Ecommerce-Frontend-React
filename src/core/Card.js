import React from 'react';
import { Link } from 'react-router-dom';
import ShowImage from './ShowImage';
import moment from 'moment';

const Card = ({product, showViewBtn = true}) => {


    const showStock = (quantity) => {

        return quantity > 0 ? <span className="badge badge-primary">{quantity} In Stock</span> : <span className="badge badge-danger">Out of Stock</span>

    }

    return (
        
      <div>
      <div className="card bg-dark text-white mb-2 px-2">
              <div className="card-header">
                <h4 className="display-6 text-center">{product.name}</h4> </div>
               <ShowImage item={product} url="product/photo" className="card-img-top"></ShowImage>
                <div className="card-body">
                    <p>{product.description}</p>
                    <div className="text-center my-3">
                        <h4><span style={{fontSize: '20px'}} class="badge badge-info">${product.price}</span></h4><br/>
                        {/* <span class="badge badge-pill badge-dark">{product.category.name }</span><br/> */}
                    </div>

                    <div className="well">
                        <h4>{showStock(product.quantity)}</h4>
                           
                        <span>Added {moment(product.createdAt).fromNow()}</span>

                    </div>

                    {showViewBtn && (
                        <Link to={`/product/${product._id}`}>
                            <button className="btn btn-warning mr-1">View</button>
                        </Link>
                    )}
                    { product.quantity > 0  && (
                   
                        <button className="btn btn-success">Add to Cart</button>

                    )}
                </div>
            </div>
        </div>
    )
}

export default Card
