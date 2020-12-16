import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { getCategories } from './ApiCore';

const  Shop = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories()
            .then(res => setCategories(res))
    }, [])


    return (
        <div>
            <Layout
                title="Shop Page"
                description="choose your favorite Product in our store"
                className="container"
            > 
                <div className="row">
                    <div className="col-md-4">
                        { JSON.stringify(categories)}
                    </div>
                    <div className="col-md-8">
                        content
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, amet?
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Shop;
