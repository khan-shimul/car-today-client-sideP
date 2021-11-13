import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import './SingleReview.css';

const SingleReview = ({ singleReview }) => {
    return (
        <Col>
            <Card className="p-3 h-100 review">
                <div className="d-flex align-items-center">
                    <div>
                        <Card.Img variant="top" className="img-fluid me-3" src={singleReview?.img} />
                    </div>
                    <div>
                        <Card.Title className="fs-5 primary-color">
                            {singleReview?.name}
                        </Card.Title>
                        <Rating className="text-warning ms-2"
                            initialRating={singleReview?.rating}
                            emptySymbol="far fa-star rating-star"
                            fullSymbol="fas fa-star fs-6 rating-star"
                            readonly
                        />
                    </div>
                </div>
                <Card.Body>
                    <Card.Text>
                        {singleReview.feedback}
                    </Card.Text>

                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleReview;