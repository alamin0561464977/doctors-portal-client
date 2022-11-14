import React, { useEffect, useState } from 'react';
import AppointmentOption from './AppointmentOption';
import { format } from 'date-fns';
import BookingModal from '../BookingModal/BookingModal';

const AppointmentOptions = ({ selectedDate }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, [])
    return (
        <div className='mt-24'>
            <p className='text-xl font-bold text-primary text-center'>Available Appointments on {format(selectedDate, "PP")}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-8'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        option={option}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    selectedDate={selectedDate}
                    treatment={treatment}
                ></BookingModal>
            }
        </div>
    );
};

export default AppointmentOptions;