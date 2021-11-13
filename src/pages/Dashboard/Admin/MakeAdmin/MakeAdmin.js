import React from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const { register, handleSubmit } = useForm();

    // add cars api
    const onSubmit = data => {
        fetch('https://floating-beyond-24545.herokuapp.com/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('idToken')}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount) {
                    alert('Successfully make an admin')
                }
                if (!result.matchedCount) {
                    alert('Sorry! We cant found this user as logged in')
                }
            })
    };
    return (
        <div className="w-50">
            <h4 className="m-3 text-secondary">Make an Admin</h4>
            <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column justify-content-center">
                <input placeholder="Admin email" {...register("email", { required: true })} className="mb-3 p-3 border rounded-2" />

                <input className="btn btn-success p-3" type="submit" value="Make Admin" />
            </form>
        </div>
    );
};

export default MakeAdmin;