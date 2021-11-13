import React from 'react';
import { Row } from 'react-bootstrap';
import useCars from '../../../../../hooks/useCars/useCars';
import ManageProduct from '../ManageProduct/ManageProduct';

const ManageProducts = () => {
    const [cars, setCars] = useCars();

    // handle delete
    const deleteProduct = id => {
        const proceed = window.confirm('Are you sure want to delete this product?');
        if (proceed) {
            fetch(`http://localhost:5000/cars/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Successfully removed your product')
                        const restProducts = cars?.filter(singleCar => singleCar._id !== id);
                        setCars(restProducts)
                    }
                })
        }
    }

    return (
        <div>
            <Row xs={1} md={4} className="g-4">
                {
                    cars.map(car => <ManageProduct
                        key={car._id}
                        manageProduct={car}
                        deleteProduct={deleteProduct}
                    />)
                }
            </Row>
        </div>
    );
};

export default ManageProducts;