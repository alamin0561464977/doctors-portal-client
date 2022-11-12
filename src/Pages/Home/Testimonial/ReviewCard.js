import React from 'react';

const ReviewCard = ({ review }) => {
    const { img, p, name, location } = review;
    return (
        <div className="card mt-8 bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{p}</p>
                <hr />
            </div>
            <div className='flex items-center m-5'>
                <div className="avatar mr-4">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img} alt='' />
                    </div>
                </div>
                <div>
                    <h3 className='text-lg font-bold'>{name}</h3>
                    <h5>{location}</h5>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;