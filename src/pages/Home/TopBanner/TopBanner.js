import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './TopBanner.css';

const TopBanner = () => {
    const history = useHistory();
    // handle explore
    const handleExplore = () => {
        history.push('/explore')
    }
    return (
        <div>
            <div className="banner">
                <div className="container">
                    <div className="row text-white banner d-flex justify-content-center align-items-center">
                        <div className="col-12 col-md-7">
                            <h1 className="fw-bold">Find The Right <br /> Car For You</h1>
                            <p> We have more than a thousand cars for you to choose</p>
                            <Button onClick={handleExplore} variant="warning">Explore Now</Button>
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