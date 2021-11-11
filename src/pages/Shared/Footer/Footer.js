import React from 'react';
import './Footer.css';
import logo from '../../../images/logo/logo.png';

const Footer = () => {
    return (
        <footer>
            <div className="bg-footer">
                <div className="container pt-5">
                    <div className="row py-5">
                        <div className="col-md-3">
                            <h2 className="text-white fs-5 mt-3 mb-4">About Car-Today</h2>
                            <img className="fluid" style={{ height: '30px' }} src={logo} alt="company-logo" />
                            <p className="fw-bold text-white fs-5">Car-Today</p>
                            <p className="text-secondary"><small>Copyright &copy; 2021 Car-Today. All Rights Reserved.</small></p>
                        </div>
                        <div className="col-md-3">
                            <h2 className="text-white fs-5 mb-4 mt-3">USEFUL LINKS</h2>
                            <a href="#" className="text-secondary text-decoration-none">About Us</a>
                            <br />
                            <a href="#" className="text-secondary text-decoration-none">Our Services</a>
                            <br />
                            <a href="#" className="text-secondary text-decoration-none">Information</a>
                            <br />
                            <a href="#" className="text-secondary text-decoration-none">Privacy Policy</a>
                        </div>
                        <div className="col-md-3">
                            <h2 className="text-white fs-5 mt-3 mb-4">OUR BRANDS</h2>
                            <a href="#" className="text-secondary text-decoration-none">Tesla Electric</a>
                            <br />
                            <a href="#" className="text-secondary text-decoration-none">BMW Luxury</a>
                            <br />
                            <a href="#" className="text-secondary text-decoration-none">Ferrari Vehicles</a>
                            <br />
                            <a href="#" className="text-secondary text-decoration-none">Porsche Luxury</a>
                        </div>
                        <div className="col-md-3">
                            <h2 className="text-white fs-5 mt-3 mb-4">SHOWROOM</h2>
                            <p className="text-secondary">USA, Auto, King St. 665087 <br />
                                <span>Phone.: +7 234 949-58-83</span>
                                <br />
                                <span>&copy; 2018 Car Today LTD</span>
                            </p>

                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-dark py-2 text-white text-center ">
                <small>Copyright © 2021 Car-Today. All Rights Reserved.</small>
            </div>
        </footer>
    );
};

export default Footer;