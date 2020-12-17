import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import Card from './Card';
import { getCategories, filterProducts } from './ApiCore';
import FilterByCategory from './FilterByCategory';
import FilterByPrice from './FilterByPrice';

const  Shop = () => {

    const [categories, setCategories] = useState([]);
    const [limit, setLimit] = useState(12);
    const [skip, setSkip] = useState(0);
    const [productsFiltred, setProductsFiltred] = useState([]);

    const [myFilters, setMyFilters] = useState({
        category: [],
        price: []
    });

    useEffect(() => {
        getCategories()
            .then(res => setCategories(res))
            
        filterProducts(skip, limit, myFilters)
            .then(res => setProductsFiltred(res))
    }, [myFilters])


    const  handleFilters = (data, filterBy) => {

            setMyFilters({...myFilters, [filterBy]: data})

            

            //console.log('SHOP', data, filterBy);
    }


    return (
        <div>
            <Layout
                title="Shop Page"
                description="choose your favorite Product in our store"
                className="container"
            > 
                <div className="row">
                    <div className="col-md-3">
                        <FilterByCategory 
                            categories={categories} 
                            handleFilters={data => handleFilters(data, 'category')}
                        />
                        <hr/>
                        <FilterByPrice handleFilters={data => handleFilters(data, 'price')}/>
                    </div>
                    <div className="col-md-9">
                    <div className="row mb-5">
                            {productsFiltred.map((product, i) => (
                            <div key={product._id} className="col-md-4">
                                    <Card product={product}></Card> 
                            </div>  
                            ))}
                        
                </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Shop;
