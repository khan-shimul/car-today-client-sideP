import React from 'react';
import comingSoon from '../../../images/coming soon/soon.png'

const Payment = () => {
    return (
        <div>
            <div className="row d-flex align-items-center bg-primary bg-opacity-10 p-5">
                <div className="col-md-4">
                    <h2>Payment system coming soon.</h2>
                </div>
                <div className="col-md-8">
                    <img src={comingSoon} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Payment;