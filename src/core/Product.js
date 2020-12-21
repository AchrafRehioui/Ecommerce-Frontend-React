import React, { useEffect, useState} from 'react';
import { getOneProduct } from './ApiCore';
import Layout from './Layout';
import Card from './Card';


const  Product = (props) => {

    const [product, setProduct] = useState({})

    useEffect(() => {
        let productId = props.match.params.id;
        getOneProduct(productId)
            .then(res => setProduct(res))
            .catch(err => console.error(err))
    }, [])

    return (
        <div>
            {product && product.description && ( 

            <Layout
                title= {product.name}
                description= {product.description.substring(0, 100)}
                className="container"
            >
                    
                <div className="row">
                    <div className="col-md-9">
                        <Card product={product} showViewBtn={false}/>
                    </div>
                    <div className="col-md-3">
                        Related Products
                    </div>
                </div>


            </Layout>
            )}
        </div>
    )
}

export default Product;
