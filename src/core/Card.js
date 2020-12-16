import React from 'react';
import { Link } from 'react-router-dom';



const Card = ({product}) => {
    return (
        <div>
            <div className="card">
                <div className="card-header">{product.name}</div>
                <div className="card-body">
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                    <Link to="">
                        <button className="btn btn-warning mr-1">View Product</button>
                    </Link>
                    <button className="btn btn-success">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Card
