import React from 'react';
import appointment from '../../../assets/images/appointment.png';
import doctor from '../../../assets/images/doctor-small.png';

const HomeAppointment = () => {
    return (
        <div className="hero" style={{ backgroundImage: `url("${appointment}")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content">
                <div className="hero mx-44 h-auto">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={doctor} className="max-w-sm rounded-lg shadow-2xl h-96 mb-0 -mt-32" alt='' />
                        <div className=' ml-6'>
                            <h1 className="text-5xl font-bold">Make an appointment Today</h1>
                            <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAppointment;