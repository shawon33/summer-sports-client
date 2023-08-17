import React from 'react';

const Extrinfo = ({ fool }) => {
    const { name, img, info } = fool;
    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{info}</p>
                </div>
            </div>
        </div>
    );
};

export default Extrinfo;