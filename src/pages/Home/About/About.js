import React from 'react';
import logo from '../../../images/logo/logo.png';
import about from '../../../images/about/about-car.jpg';
import './About.css';

const About = () => {
    return (
        <section className="container">
            <div className="text-center">
                <img src={logo} alt="company-logo" />
                <h2 className="fw-bold mt-2">About CarToday</h2>
            </div>
            <div className="row d-flex align-items-center py-5">
                <div className="col-md-6 pe-5">
                    <h5>We offer high quality vehicles at unbelievable prices &amp; creates pleasant buying experience.</h5>
                    <p className="description">CarToday vehicle local distribution, is a business that sells new or used cars at the retail level, based on a dealership contract with an automaker or its sales subsidiary. It can also carry a variety of Certified Pre-Owned vehicles. It employs automobile salespeople to sell their automotive vehicles. It may also provide maintenance services for cars, and employ automotive technicians to stock and sell spare automobile parts and process warranty claims.</p>
                    <p className="description">Multibrand and multimaker car dealers sell cars from different and independent carmakers. Some are specialized in electric vehicles.</p>
                    <div className="d-flex align-items-center">
                        <div className="pe-2 pb-3 fs-1 text-danger">
                            <i className="fas fa-hand-holding-usd"></i>
                        </div>
                        <div>
                            <p className="fw-bold">Affordable Prices <br />
                                <span className="fw-normal about">CarToday give you a minimalist prices!</span>
                            </p>
                        </div>

                    </div>
                    <div className="d-flex align-items-center">
                        <div className="pe-2 pb-3 fs-1 text-danger">
                            <i className="fas fa-business-time"></i>
                        </div>
                        <div>
                            <p className="fw-bold">10 Years in Business<br />
                                <span className="fw-normal about">Successfully completed 10years business</span>
                            </p>
                        </div>

                    </div>
                    <div className="d-flex align-items-center">
                        <div className="pe-2 pb-3 fs-1 text-danger">
                            <i className="fas fa-thumbs-up"></i>
                        </div>
                        <div>
                            <p className="fw-bold">Trusted &amp; Genuine Parts<br />
                                <span className="fw-normal about">We provided 100% orginal products! </span>
                            </p>
                        </div>

                    </div>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid" src={about} alt="car" />
                </div>
            </div>
        </section>
    );
};

export default About;