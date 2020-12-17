import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { getCategories } from './ApiCore';
import FilterByCategory from './FilterByCategory';

const  Shop = () => {

    const [categories, setCategories] = useState([]);

    const [myFilters, setMyFilters] = useState({
        category: [],
        price: []
    });

    useEffect(() => {
        getCategories()
            .then(res => setCategories(res))
    }, [])

    const  handleFilters = (data, filterBy) => {
            setMyFilters({...myFilters, [filterBy]: data})
            console.log('SHOP', data, filterBy);
    }


    return (
        <div>
            <Layout
                title="Shop Page"
                description="choose your favorite Product in our store"
                className="container"
            > 
                <div className="row">
                    <div className="col-md-4">
                        <FilterByCategory 
                            categories={categories} 
                            handleFilters={(data) => handleFilters(data, 'category')}
                        />
                    </div>
                    <div className="col-md-8">
                        {JSON.stringify(myFilters)}
                        <br/>
                        content
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, amet?
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Shop;
