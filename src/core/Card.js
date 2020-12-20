import React from 'react';
import { Link } from 'react-router-dom';
import ShowImage from './ShowImage';


const Card = ({product, showViewBtn = true}) => {
    return (
        <div>
      <div className="card bg-dark text-white mb-2 px-2">
              <div className="card-header">
                <h4 className="display-6 text-center">{product.name}</h4> </div>
               <ShowImage item={product} url="product/photo" className="card-img-top"></ShowImage>
                <div className="card-body">
                    <p>{product.description}</p>
                    <div>
                        <h4><span class="badge badge-info">${product.price}</span></h4><br/>
                        {/* <span class="badge badge-pill badge-dark">{product.category.name}</span><br/> */}
                    </div>
                    {showViewBtn && (
                        <Link to={`/product/${product._id}`}>
                            <button className="btn btn-warning mr-1">View</button>
                        </Link>
                    )}
                    <button className="btn btn-success">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Card
