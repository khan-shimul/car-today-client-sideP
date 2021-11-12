import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import loginBg from '../../../images/login/login-bg.png';

const Register = () => {
    const { register, handleSubmit, reset } = useForm();

    const { user, setError, error, registerNewUser } = useAuth();
    console.log(user)

    const onSubmit = data => {
        // pass validation for 6 character
        if (data.password.length < 6) {
            setError('Password should be 6 character')
            return
        }
        // pass validation for 1 special character
        if (!/(?=.*[!@#$&*])/.test(data.password)) {
            setError('Password should be one special character')
            return
        }
        // check both pass same
        if (data.password !== data.password2) {
            alert('Password should be match')
            return
        }
        // create new user
        registerNewUser(data.email, data.password)
        reset();

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