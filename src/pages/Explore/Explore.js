import React from 'react';
import { Row, Spinner } from 'react-bootstrap';
import useCars from '../../hooks/useCars/useCars';
import Car from '../Home/Cars/Car/Car';
import './Explore.css';

const Explore = () => {
    const [cars] = useCars();

    return (
        <section>
            <div className="explore-banner d-flex justify-content-center align-items-center text-white text-center">
                <div>
                    <h2 className="fw-bold">Cars Gallery</h2>
                </div>
            </div>
            <div className="text-center">
                {
                    !cars.length && <Spinner animation="border" variant="danger" className="my-5" />
                }
            </div>

            <div className="container my-5">
                <Row xs={1} md={3} className="g-4">
                    {
                        cars?.map(car => <Car
                            key={car._id}
                            car={car}
                        />)
                    }
                </Row>
            </div>
        </section>
    );
};

export default Explore;