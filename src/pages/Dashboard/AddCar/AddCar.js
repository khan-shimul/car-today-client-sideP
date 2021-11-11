import React from 'react';
import { useForm } from "react-hook-form";
import './AddCar.css';

const AddCar = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="add-car-form m-5">
            <div>
                <h2 className="mb-3">Please add a car</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column justify-content-center">
                    <input placeholder="Car Name" {...register("name", { required: true })} className="mb-3 p-3 border rounded-2" />
                    <input type="number" placeholder="Price" {...register("price", { required: true })} className="mb-3 p-3 border rounded-2" />
                    <input type="number" placeholder="Rating" {...register("rating", { required: true, min: 0, max: 5 })} className="mb-3 p-3 border rounded-2" />
                    <input placeholder="Color" {...register("color", { required: true })} className="mb-3 p-3 border rounded-2" />
                    <input placeholder="Image Url" {...register("img", { required: true })} className="mb-3 p-3 border rounded-2" />
                    <textarea placeholder="Description" {...register("description", { required: true })} className="mb-4 p-3 border rounded-2" />
                    <input className="btn btn-danger p-3" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddCar;