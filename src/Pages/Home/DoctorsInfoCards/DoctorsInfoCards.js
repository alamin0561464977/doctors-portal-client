import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';


const DoctorsInfoCards = () => {
    const infoCards = [
        {
            id: 1,
            img: clock,
            p: 'Open 08:00am and 09:30pm everyday',
            t: 'Opening Hours',
            bgClass: 'bg-gradient-to-r from-cyan-500 to-blue-500'
        },
        {
            id: 2,
            img: marker,
            p: 'Brooklyn, NY 10036, United States',
            t: 'Visit our location',
            bgClass: 'bg-[#3A4256]'
        },
        {
            id: 3,
            img: phone,
            p: '+966 561464977',
            t: 'Contact us now',
            bgClass: 'bg-gradient-to-r from-cyan-500 to-blue-500'
        }
    ]
    return (
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-24'>
            {
                infoCards.map(infoCard => <InfoCard infoCard={infoCard} key={infoCard.id}></InfoCard>)
            }
        </div>
    );
};

export default DoctorsInfoCards;