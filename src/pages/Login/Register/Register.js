import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import loginBg from '../../../images/login/login-bg.png';
import { useHistory } from 'react-router-dom';

const Register = () => {
    const { register, handleSubmit, reset } = useForm();
    const { setError, error, registerNewUser, loading } = useAuth();
    const history = useHistory();

    const onSubmit = data => {
        // pass validation for 6 character
        if (data.password.length < 6) {
            setError('Password should be 6 character')
            return
        }
        // // pass validation for 1 special character
        // if (!/(?=.*[!@#$&*])/.test(data.password)) {
        //     setError('Password should be one special character')
        //     return
        // }
        // // check both pass same
        // if (data.password !== data.password2) {
        //     alert('Password and confirm password should be match')
        //     return
        // }
        // create new user
        registerNewUser(data.email, data.password, data.fullName, history)
        reset();

    };

    return (
        <div className="container">
            <div className="row d-flex justify-content-center align-items-center my-5">

                <div className="col-md-6">
                    {!loading && <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column login-form">
                        <h2 className="fw-bold fs-4 mb-3">Create Account</h2>
                        <input placeholder="Full Name" {...register("fullName", { required: true })} className="mb-2 p-3 border rounded-2" />
                        <input placeholder="Email" {...register("email", { required: true })} className="mb-2 p-3 border rounded-2" />
                        <input type="password" placeholder="Password" {...register("password", { required: true })} className="mb-2 p-3 border rounded-2" />
                        <input type="password" placeholder="Confirm Password" {...register("password2", { required: true })} className="mb-2 p-3 border rounded-2" />
                        <p><small className="text-danger">{error}</small></p>
                        <input type="submit" value="Register" className="btn btn-danger p-3" />
                        <p className="mt-2">Already have an account? <Link to="/login" className="text-decoration-none">Login</Link> </p>
                    </form>}
                    {loading && <Spinner className="d-flex mx-auto" animation="border" variant="warning" />}
                </div>

                <div className="col-md-6">
                    <img className="img-fluid p-5" src={loginBg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Register;