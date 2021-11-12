import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import loginBg from '../../../images/login/login-bg.png';
import useFirebase from '../../../hooks/useFirebase';

const Register = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data)

    };

    return (
        <div className="container">
            <div className="row d-flex justify-content-center align-items-center my-5">

                <div className="col-md-6">
                    <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column login-form">
                        <h2 className="fw-bold fs-4 mb-3">Create Account</h2>
                        <input placeholder="Full Name" {...register("fullName", { required: true })} className="mb-2 p-3 border rounded-2" />
                        <input placeholder="Email" {...register("email", { required: true })} className="mb-2 p-3 border rounded-2" />
                        <input type="password" placeholder="Password" {...register("password", { required: true })} className="mb-2 p-3 border rounded-2" />
                        <input type="password" placeholder="Confirm Password" {...register("password2", { required: true })} className="mb-2 p-3 border rounded-2" />
                        {/* <p><small>{error}</small></p> */}
                        <input type="submit" value="Register" className="btn btn-danger p-3" />
                        <p className="mt-2">Already have an account? <Link to="/login" className="text-decoration-none">Login</Link> </p>
                    </form>
                </div>

                <div data-aos="fade-right" className="col-md-6">
                    <img className="img-fluid p-5" src={loginBg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Register;