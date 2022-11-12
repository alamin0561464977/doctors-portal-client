import React from 'react';
import img1 from '../../../assets/images/people1.png';
import img2 from '../../../assets/images/people2.png';
import img3 from '../../../assets/images/people3.png';
import ReviewCard from './ReviewCard';

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            p: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: img1,
            name: 'Winson Herry',
            location: 'California'
        },
        {
            _id: 2,
            p: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: img2,
            name: 'Winson Herry',
            location: 'California'
        },
        {
            _id: 3,
            p: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: img3,
            name: 'Winson Herry',
            location: 'California'
        },
    ]
    return (
        <div className=' mt-16'>
            <div>
                <p className='text-xl font-bold text-primary'>Testimonial</p>
                <h2 className='text-3xl font-bold'>What Our Patients Says</h2>
            </div>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review => <ReviewCard review={review} key={review._id}></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Testimonial;