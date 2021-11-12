import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Rating from 'react-rating';
import { useParams } from 'react-router';
import './CarDetails.css';

const CarDetails = () => {
    const { id } = useParams();
    const [singleCar, setSingleCar] = useState({});
    // destructure data
    const { name, price, img, description, rating, fast, color } = singleCar;
    // load single data
    useEffect(() => {
        fetch(`http://localhost:5000/cars/${id}`)
            .then(res => res.json())
            .then(data => setSingleCar(data))
    }, []);

    const { register, handleSubmit, reset } = useForm();
    // handle booked package
    const onSubmit = data => {
        console.log(data)
        const car = singleCar;
        // car.email = user.email;
        // car.clientInfo = data;
        car.status = 'Pending';
        // delete car._id;
        // generate random unique id
        // const randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        // const unique_id = randLetter + Date.now();
        // car.unique_id = unique_id;

        // axios.post('https://guarded-thicket-61427.herokuapp.com/booked', { packaged: car })
        //     .then(result => {
        //         if (result.data.insertedId) {
        //             alert('Successfully booked')
        //             reset();
        //             // history.push('/my-orders')
        //         }
        //     })
    }

    return (
        <div>
            <div className="details-banner d-flex justify-content-center align-items-center text-white text-center">
                <div>
                    <h2 className="fw-bold">Car Details</h2>
                </div>
            </div>
            <div className="container">
                <div className="row my-5 gx-4">
                    <div className="col-12 col-md-8 my-3">
                        <Card className="single-pack">
                            <Card.Img style={{ height: '300px', objectFit: 'contain' }} className="img-fluid" variant="top" src={img} />
                            <Card.Body className="p-4">
                                <Card.Title className="fw-bold fs-3">{name}</Card.Title>
                                <Card.Text className="text-secondary">
                                    <span className="fw-bold text-dark">${price}</span> {color}
                                    <br />
                                    <span className="d-inline-block my-2">{fast}km/h</span>
                                </Card.Text>

                                <Card.Text>
                                    <p className="fw-bold fs-5">Overview <span>
                                        <Rating className="icons ms-2"
                                            initialRating={rating}
                                            emptySymbol="far fa-star rating-star"
                                            fullSymbol="fas fa-star fs-6 rating-star"
                                            readonly
                                        />
                                    </span></p>
                                    <div className="line"></div>
                                    {description}
                                </Card.Text>
                                <Button variant="danger">Back to All Pack</Button>
                            </Card.Body>
                        </Card>
                    </div>

                    {/* booking form */}
                    <div className="col-12 col-md-4">
                        <form onSubmit={handleSubmit(onSubmit)} className="order-form d-flex flex-column p-4">
                            <h4 className="fw-bold fs-5 mb-3">Order the car</h4>
                            <input readOnly defaultValue={name} {...register("carName")} className="mb-2 p-3 border rounded-2" />
                            <input defaultValue='Your Name' {...register("fullName", { required: true })} placeholder="Your Full Name" className="mb-2 p-3 border rounded-2" />
                            <input type="email" defaultValue='email' {...register("email", { required: true })} placeholder="Your Email" className="mb-2 p-3 border rounded-2" />
                            <input type="number" {...register("phoneNumber", { required: true })} placeholder="Phone Number" className="mb-2 p-2 border rounded-2" />

                            <textarea rows="3"  {...register("address")} placeholder="Your Address" className="mb-2 p-3 border rounded-2" />
                            <input value="Order Now" type="submit" className="btn btn-primary p-2 mt-2" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarDetails;