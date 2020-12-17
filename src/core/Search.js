import React from 'react';

const  Search = () => {
    return (
        <div>
            <form>
                <div className="input-group input-group-lg">
                    <div className="input-group-prepend">
                        <select className="btn">
                            <option value="">Select a Category</option>
                            <option value=""></option>
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
