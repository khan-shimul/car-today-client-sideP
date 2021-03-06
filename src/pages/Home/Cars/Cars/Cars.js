import React from 'react';
import { Row, Spinner } from 'react-bootstrap';
import useCars from '../../../../hooks/useCars/useCars';
import Car from '../Car/Car';

const Cars = () => {
    // load products
    const [cars] = useCars();

    return (
        <section className="container my-5">
            <div className="text-center">
                <h2 className="mb-4">Our Luxury Cars</h2>
                <div className="d-flex mx-auto line"></div>

                {
                    !cars.length && <Spinner animation="border" variant="danger" className="my-5" />
                }
            </div>
            <div className="my-5">
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