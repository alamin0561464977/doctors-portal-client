import React from 'react';

const AppointmentOption = ({ option, setTreatment }) => {
    const { name, slots } = option;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body text-center">
                    <h2 className=" text-lg font-bold">{name}</h2>
                    <p>{slots[0]}</p>
                    <p>{slots.length} {slots.length === 0 ? 'SPACE' : 'SPACES'} AVAILABLE</p>
                    <label
                        onClick={() => setTreatment(option)}
                        disabled={slots.length <= 1}
                        htmlFor="booking-modal"
                        className="btn btn-primary font-bold mt-4 mx-8 rounded-lg"
                    >open modal</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;