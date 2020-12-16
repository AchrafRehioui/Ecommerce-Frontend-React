import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { getProducts } from './ApiCore';
import Card from './Card';


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
                <div className="row mt-3 mb-5">

                    {productsArrivals.map((product, i) => (
                        <div key={product._id} className="col-md-4">
                            <Card product={product}></Card>
                        </div>
                    ))}
                </div>
                <hr />

                <h1>Best Sellers</h1>
                <div className="row mt-3 mb-5">
                    {productsBestSellers.map((product, i) => (
                        <div key={product._id} className="col-md-4">
                            <Card product={product}></Card>
                        </div>
                    ))}
                </div>
            </Layout>
        </div>
    )
}

export default Home;
