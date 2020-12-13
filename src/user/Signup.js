import React, { useState } from 'react';
import Layout from './../core/Layout';

const Signup = () => {


    const [user, setUser ] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = e => {

        setUser({...user, [e.target.id]: e.target.value})
    }

    const form = () => (

        <div> 
            <div className="form-group">
                <label htmlFor="name" className="text-muted">name</label>
                <input onChange={handleChange} type="text" className="form-control" id="name" />
            </div>

            <div className="form-group">
                <label htmlFor="email" className="text-muted">email</label>
                <input onChange={handleChange} type="email" className="form-control" id="email" />
            </div>


            <div className="form-group">
                <label htmlFor="password" className="text-muted">password</label>
                <input onChange={handleChange} type="password" className="form-control" id="password"/>
            </div>

            <button className="btn btn-lg btn-block btn-outline-success">Sign Up</button>
            { JSON.stringify(user)}
        </div>
        
    )

    return (
        <div>
            <Layout
                title="Sign Up"
                description="Sign Up Node React Ecommerce App"
                className="container"
            >
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        { form() }
                    </div>
                </div>
                
            </Layout>
        </div>
    )
}

export default Signup;
