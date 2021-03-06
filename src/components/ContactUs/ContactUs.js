import React from 'react';
import { useParams } from 'react-router';

const ContactUs = () => {
    const params = useParams()
    console.log(params)
    return (
        <div>
            <h1 className="text-center my-5 text-light">Please Sign up to enroll courses</h1>
            <form className="container col-7 my-5">
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label text-light">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label text-light">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-outline-primary">Submit</button>
            </form>
            <h3 className="my-4 text-light">Already have an account?</h3>
            <button type="submit" className="btn btn-outline-primary mt-2 mb-5">Log In</button>
        </div>
    );
};

export default ContactUs;