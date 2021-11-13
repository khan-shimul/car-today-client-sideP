import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Review = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const history = useHistory();

    // add cars api
    const onSubmit = data => {
        axios.post('https://floating-beyond-24545.herokuapp.com/reviews', { data })
            .then(result => {
                if (result.data.insertedId) {
                    alert('Thanks for your valuable feedback')
                    reset();
                    history.push('/')
                }
            })
    };

    return (
        <div>
            <div className="login-form px-5 mx-5 my-3">
                <h2 className="text-center mb-3">We Appropriated Your Feedback</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column justify-content-center">
                    <input placeholder="Your Name" defaultValue={user.displayName} {...register("name", { required: true })} className="mb-3 p-3 border rounded-2" />
                    <input type="number" step=".01" placeholder="Rating" {...register("rating", { required: true, max: 5 })} className="mb-3 p-3 border rounded-2" />
                    <input placeholder="Your Photo Url" {...register("img", { required: true })} className="mb-3 p-3 border rounded-2" />
                    <textarea rows="4" placeholder="Your Feedback" {...register("feedback", { required: true })} className="mb-4 p-3 border rounded-2" />
                    <input className="btn btn-danger p-3" value="Done" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Review;