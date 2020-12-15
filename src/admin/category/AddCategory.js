import React, { useState } from 'react';
import Layout from './../../core/Layout';



function AddCategory() {

    const [name, setName] =useState('');

    const handleChange = (e) => {

        setName(e.target.value);
    }

    const submitCategory = (e) => {
        e.preventDefault();



    }

    return (
        <div>
            <Layout
                title="Category"
                description="New category"
                className="container"
            >
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <form onSubmit={submitCategory}>
                            <div className="form-group">
                                <label htmlFor="" className="text-muted"></label>
                                <input autoFocus placeholder="Add name of category" onChange={handleChange}  type="text" className="form-control"/>
                            </div>
                            <button className="btn-outline-primary">New category</button>
                        </form>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default AddCategory
