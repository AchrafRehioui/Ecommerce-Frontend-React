import React, { useEffect, useState} from 'react';
import { getOneProduct } from './ApiCore';
import Layout from './Layout';


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
            <Layout
                title="Show Product"
                description="Node React Ecommerce App"
                className="container"
            ></Layout>
        </div>
    )
}

export default Product;
