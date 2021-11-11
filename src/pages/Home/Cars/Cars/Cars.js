import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import useCars from '../../../../hooks/useCars/useCars';
import Car from '../Car/Car';

const Cars = () => {
    // const [cars, setCars] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:5000/cars')
    //         .then(res => res.json())
    //         .then(data => setCars(data))
    // }, [])

    const [cars] = useCars();

    return (
        <section className="container my-5">
            <div className="text-center">
                <h2 className="mb-4">Our Luxury Cars</h2>

                {
                    !cars.length && <Spinner animation="border" variant="danger" className="my-5" />
                }
            </div>
            <div className="cars-container">
                <Row xs={1} md={3} className="g-4">
                    {
                        cars?.slice(0, 6).map(car => <Car
                            key={car._id}
                            car={car}
                        />)
                    }
                </Row>
            </div>
        </section>
    );
};

export default Cars;