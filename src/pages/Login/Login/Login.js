import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import loginBg from '../../../images/login/login-bg.png';
import './Login.css';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { register, handleSubmit, reset } = useForm();
    const { loading, loginUser, error } = useAuth();

    const onSubmit = data => {
        loginUser(data.email, data.password)
    };

    return (
        <section className="container">
            <div className="row d-flex justify-content-center align-items-center my-5">
                <div className="col-md-6">
                    {!loading && <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column login-form">
                        <h2 className="text-secondary fw-bold fs-4 mb-4">Login Your Account</h2>
                        <input placeholder="Email" {...register("email", { required: true })} className="mb-3 p-3 border rounded-2" />
                        <input type="password" placeholder="Password" {...register("password", { required: true })} className="mb-3 p-3 border rounded-2" />
                        {/* <p><small>{error}</small></p> */}
                        <input type="submit" value="Login" className="btn btn-danger p-3 mb-2" />
                        <p>New to CarToday? <Link to="/register" className="text-decoration-none">Create Account</Link> </p>
                        <span className="text-center mt-2">Or Login With</span>
                        <hr className="w-25 d-flex mx-auto" />
                        <Button className="p-2" variant="primary"><i className="fab fa-google"></i> Google</Button>
                    </form>}
                    {loading && <Spinner className="d-flex mx-auto" animation="border" variant="warning" />}
                </div>
                <div className="col-md-6">
                    <img className="img-fluid p-5" src={loginBg} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Login;