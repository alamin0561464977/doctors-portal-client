import React from 'react';
import Banner from '../Banner/Banner';
import DoctorsInfoCards from '../DoctorsInfoCards/DoctorsInfoCards';
import OurServices from '../OurServices/OurServices';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <DoctorsInfoCards></DoctorsInfoCards>
            <OurServices></OurServices>
        </div>
    );
};

export default Home;