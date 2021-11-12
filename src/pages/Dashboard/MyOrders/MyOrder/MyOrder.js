import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const MyOrder = ({ order, handleDelete }) => {
    const { carName, status, carSelf } = order;
    return (
        <Col>
            <Card className="p-3 h-100 car">
                <p className="text-warning">{status}</p>
                <Card.Img variant="top" className="img-fluid" src={carSelf?.img} />
                <Card.Body>
                    <Card.Title className="fs-4">{carName}
                    </Card.Title>
                    <p>${carSelf?.price}</p>
                    <Button
                        onClick={() => handleDelete(order._id)}
                        variant="danger"
                    >Cancel Order</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default MyOrder;