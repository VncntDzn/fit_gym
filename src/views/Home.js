import React from 'react';
import LandingPage from '../components/home/LandingPage';
import AboutUs from '../components/home/AboutUs';
import Offers from '../components/home/Offers';
import Accomplishments from '../components/home/Accomplishments';

export default function Home() {
    return (
        <div>
            <LandingPage />
            <Offers />
            <AboutUs />
            <Accomplishments />
        </div>
    )
}