import React, { useState, useEffect } from 'react';
import { getCategories } from './ApiCore';

const  Search = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        
        getCategories()
            .then(categories => setCategories(categories))


    }, [])

    return (
        <div>
            <form>
                <div className="input-group input-group-lg">
                    <div className="input-group-prepend">
                        <select className="btn">
                            <option value="">Select a Category</option>
                            {categories.map((category, i) => (
                            
                            <option key={category._id} value={category._id}>
                                {category.name}
                            </option>

                            ))}
                        </select>
                    </div>
                    <input type="search" className="form-control mx-4"/>
                    <div className="input-group-apprend">
                        <button className="btn">Search</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Search;
