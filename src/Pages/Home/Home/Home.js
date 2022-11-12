import React from 'react';
import Banner from '../Banner/Banner';
import DoctorsInfoCards from '../DoctorsInfoCards/DoctorsInfoCards';
import Exceptional from '../Exceptional/Exceptional';
import HomeAppointment from '../HomeAppointment/HomeAppointment';
import OurServices from '../OurServices/OurServices';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <DoctorsInfoCards></DoctorsInfoCards>
            <OurServices></OurServices>
            <Exceptional></Exceptional>
            <HomeAppointment></HomeAppointment>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;