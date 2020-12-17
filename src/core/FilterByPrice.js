import React from 'react'

const  FilterByPrice = ({ handleFilters }) => {

    const prices = [
        {
            _id: 1,
            name: "Any",
            value: []
        },
        {
            _id: 2,
            name: "0$ to 29$",
            value: [0, 29]
        },
        {
            _id: 3,
            name: "30$ to 69$",
            value: [30, 69]
        },
        {
            _id: 4,
            name: "70$ to 109$",
            value: [70, 109]
        },
        {
            _id: 5,
            name: "110$ to 150$",
            value: [110, 150]
        },
        {
            _id: 6,
            name: "More",
            value: [151, 9999999]
        }
    ]

    const handlePrice = (e) => {
        handleFilters(prices[e.target.value]['value'])
    }

    return (
        <div>

            <h4 className="mt-5">Filter By Price</h4>

            {prices.map((price, i) => (
                <div key={`${i}-${price.name}`} className="my-2">
                    <label htmlFor={`${i}-${price.name}`}>
                        <input 
                            onChange={handlePrice}
                            className="mx-3" 
                            type="radio" 
                            name="price" 
                            id={`${i}-${price.name}`} 
                            value={i}
                            />
                        {price.name}
                    </label>
                </div>
            ))}
        </div>
    )
}

export default FilterByPrice;
