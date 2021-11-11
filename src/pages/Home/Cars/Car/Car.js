import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import './Car.css';

const Car = ({ car }) => {
    const { name, price, description, img, fast, rating } = car;

    return (
        <Col>
            <Card className="p-3 h-100 car">
                <Card.Img variant="top" className="img-fluid" src={img} />
                <Card.Body>
                    <Card.Title className="fs-4">{name}
                    </Card.Title>
                    <p><small>{description.split('').slice(0, 50).toString().replace(/,/g, '')}...</small></p>
                    <Rating className="icons"
                        initialRating={rating}
                        emptySymbol="far fa-star rating-star"
                        fullSymbol="fas fa-star fs-6 rating-star"
                        readonly
                    />
                    <p>
                        ${price} <br />
                        {fast}/hr

                    </p>
                    <div className="mb-2">

                    </div>
                    <Button variant="danger"
                    >Buy Now</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Car;