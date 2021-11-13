import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import { useHistory } from 'react-router';
import './Car.css';

const Car = ({ car }) => {
    const { _id, name, price, description, img, fast, rating } = car;
    const history = useHistory()

    const handleDetails = id => {
        history.push(`/car-details/${id}`)
    }

    return (
        <Col>
            <Card data-aos="zoom-in" className="p-3 h-100 car">
                <Card.Img variant="top" className="img-fluid" src={img} />
                <Card.Body>
                    <Card.Title className="primary-color fs-5">{name}
                    </Card.Title>
                    <div className="rating">
                        <Rating className="rating-icon"
                            initialRating={rating}
                            emptySymbol="far fa-star rating-star"
                            fullSymbol="fas fa-star fs-6 rating-star"
                            readonly
                        />
                    </div>
                    <p><span className="d-inline-block mb-1"><small>{description.split('').slice(0, 50).toString().replace(/,/g, '')}...</small></span>
                        <br />
                        <span className="price d-inline-block">${price}</span> <br />
                        {fast}/hr
                    </p>
                    <div className="mb-2">

                    </div>
                    <button
                        onClick={() => handleDetails(_id)}
                        className="btn-regular"
                    >Buy Now</button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Car;