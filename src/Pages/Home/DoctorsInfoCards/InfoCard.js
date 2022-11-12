import React from 'react';

const InfoCard = ({ infoCard }) => {
    const { img, p, t, bgClass } = infoCard;
    return (
        <div>
            <div className={`card card-side p-4 h-44 shadow-xl text-white ${bgClass}`}>
                <figure><img src={img} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{t}</h2>
                    <p>{p}</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;