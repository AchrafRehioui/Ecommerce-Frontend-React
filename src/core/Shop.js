import React from 'react';
import Layout from './Layout';

const  Shop = () => {
    return (
        <div>
            <Layout
                title="Shop Page"
                description="choose your favorite Product in our store"
                className="container"
            > 
                <div className="row">
                    <div className="col-md-4">
                        Sidebar
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quod!
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
