import React from 'react';
import { Row, Spinner } from 'react-bootstrap';
import useCars from '../../hooks/useCars/useCars';
import Car from '../Home/Cars/Car/Car';

const Explore = () => {
    const [cars] = useCars();

    return (
        <div className="container my-5">
            <div className="text-center">
                <h2 className="mb-3">EXplore</h2>
                {
                    !cars.length && <Spinner animation="border" variant="danger" className="my-5" />
                }
            </div>

            <Row xs={1} md={3} className="g-4">
                {
                    cars?.map(car => <Car
                        key={car._id}
                        car={car}
                    />)
                }
            </Row>
        </div>
    );
};

export default Explore;