import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './ManageProduct.css';

const ManageProduct = ({ manageProduct, deleteProduct }) => {
    const { _id, name, img, price, fast } = manageProduct;

    return (
        <Col>
            <Card className="p-2 h-100 single-product">
                <Card.Img variant="top" className="img-fluid" src={img} />
                <Card.Body>
                    <Card.Title className="fs-6 primary-color">{name}
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
                        size="sm"
                    >Remove</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ManageProduct;