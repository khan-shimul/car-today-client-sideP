import React from 'react';
import { Button } from 'react-bootstrap';
import './TopBanner.css';

const TopBanner = () => {
    return (
        <div>
            <div className="banner">
                <div className="container">
                    <div className="row text-white banner d-flex justify-content-center align-items-center">
                        <div className="col-12 col-md-7">
                            <h1>Eng Prescribe <br /> Car-Today Products</h1>
                            <p> Medical Solve doctors allows you the potential to impact human life in a way that is truly unique and the job satisfaction you get is unparalleled.</p>
                            <Button variant="warning">Explore Now</Button>
                        </div>
                        <div className="col-12 col-md-5">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;