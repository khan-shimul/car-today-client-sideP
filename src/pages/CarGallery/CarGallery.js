import React from 'react';
import Explore from '../Explore/Explore';
import CarDetails from '../Home/CarDetails/CarDetails';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const CarGallery = () => {
    return (
        <div>
            <Header />
            <Explore />
            <Footer />
        </div>
    );
};

export default CarGallery;