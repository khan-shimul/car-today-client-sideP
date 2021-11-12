import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import SingleReview from '../SingleReview/SingleReview';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="container my-4">
            <h2 className="text-center mb-3">What say our Clients</h2>

            <Row xs={1} md={3} className="g-4">
                {
                    reviews.map(singleReview => <SingleReview
                        key={singleReview._id}
                        singleReview={singleReview}
                    />)
                }
            </Row>
        </div>
    );
};

export default Reviews;