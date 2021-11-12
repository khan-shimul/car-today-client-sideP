import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const MyOrder = ({ myOrder }) => {
    const { carName, img } = myOrder;
    console.log(myOrder)
    return (
        <Col>
            <Card className="p-3 h-100 car">
                <Card.Img variant="top" className="img-fluid" src={img} />
                <Card.Body>
                    <Card.Title className="fs-4">{carName}
                    </Card.Title>

                    <Button

                        variant="danger"
                    >Buy Now</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default MyOrder;