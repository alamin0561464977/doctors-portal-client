import React from 'react';
import Banner from '../Banner/Banner';
import DoctorsInfoCards from '../DoctorsInfoCards/DoctorsInfoCards';
import Exceptional from '../Exceptional/Exceptional';
import OurServices from '../OurServices/OurServices';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <DoctorsInfoCards></DoctorsInfoCards>
            <OurServices></OurServices>
            <Exceptional></Exceptional>
        </div>
    );
};

export default Home;