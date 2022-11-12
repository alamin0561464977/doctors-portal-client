import React from 'react';
import appointment from '../../../assets/images/appointment.png';

const ContactUs = () => {
    return (
        <div className='p-12 mt-12' style={{ backgroundImage: `url("${appointment}")` }}>
            <div className=' text-center'>
                <p className='text-lg font-bold text-primary'>Contact Us</p>
                <h2 className='text-3xl font-bold text-white'>Stay connected with us</h2>
            </div>
            <form className='grid grid-cols-1 gap-5 w-[500px] mx-auto m-5'>
                <input type="text" placeholder="Email Address" className="input rounded-lg input-bordered w-full" />
                <input type="text" placeholder="Subject" className="input rounded-lg input-bordered w-full" />
                <textarea className="textarea w-full rounded-lg textarea-bordered" placeholder="Your message"></textarea>
                <button className='w-28 rounded-lg font-bold btn btn-primary'>Submit</button>
            </form>
        </div>
    );
};

export default ContactUs;