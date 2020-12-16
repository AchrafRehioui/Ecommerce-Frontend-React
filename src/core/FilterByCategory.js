import React from 'react';


function FilterByCategory({ categories }) {
    return (
        <div>
          <h4 className="mt-3">Filter by Categories</h4>
            <ul>
             { categories && categories.map((category, i) => (

                <li key={category._id} className="list-unstyled my-3">
                    <input  value={category._id} type="checkbox" id={i} className="form-check-input"/>
                    <label htmlFor={i} className="form-check-label ml-3">{ category.name }</label>
                </li>

             )) } 
            </ul>
        </div>
    )
}

export default FilterByCategory
