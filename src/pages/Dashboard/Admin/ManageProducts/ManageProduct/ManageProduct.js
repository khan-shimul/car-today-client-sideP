import { Rating } from '@mui/material';
import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const ManageProduct = ({ manageProduct, deleteProduct }) => {
    const { _id, name, img, price, fast } = manageProduct;

    return (
        <Col>
            <Card className="p-3 h-100 car">
                <Card.Img variant="top" className="img-fluid" src={img} />
                <Card.Body>
                    <Card.Title className="fs-4">{name}
                    </Card.Title>
                    <p>
                        ${price} <br />
                        {fast}/hr

                    </p>
                    <div className="mb-2">

                    </div>
                    <Button
                        onClick={() => deleteProduct(_id)}
                        variant="danger"
                    >Remove Item</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ManageProduct;