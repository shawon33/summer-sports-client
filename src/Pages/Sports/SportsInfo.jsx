import React from 'react';

const SportsInfo = ({ info }) => {
    const { name, image, instructor } = info;
    return (
        <div className=' sm:w-64 md:w-72 '>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl w-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>Sure, here's an example of a responsive card using the Tailwind CSS framework with the grid-row-2 utility class to position the card content in the second row of a grid layout:</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SportsInfo;