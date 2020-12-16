import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { getProducts } from './ApiCore';


function Home() {

    const [productsBestSellers, setProductsBestSellers] = useState([])
    const [productsArrivals, setProductsArrivals] = useState([])

    const loadBestSellers = () => {

        getProducts('sold', 'desc', 6)
            .then(products => setProductsBestSellers(products))

    }

    const loadArrivals = () => {

        getProducts('createdAt', 'desc', 3)
            .then(products => setProductsArrivals(products))

    }

    useEffect(() => {
        loadArrivals()
        loadBestSellers()

    }, [])


    return (
        <div>
            <Layout
                title="Home Page"
                description="Node React Ecommerce App"
                className="container"
            >
                <h1>Arrival Products</h1>
                {JSON.stringify(productsArrivals)}
                <hr />

                <h1>Best Sellers</h1>
                {JSON.stringify(productsBestSellers)}
            </Layout>
        </div>
    )
}

export default Home;
