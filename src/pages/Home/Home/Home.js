import React from 'react';
import Header from '../../Shared/Header/Header';
import About from '../About/About';
import Cars from '../Cars/Cars/Cars';
import Reviews from '../Reviews/Reviews';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <Header />
            <TopBanner />
            <Cars />
            <About />
            <Reviews />
        </div>
    );
};

export default Home;