import React from 'react';

const SportsInfo = ({ info }) => {
    const { name, image, instructor,price } = info;
    return (
        <div className=' sm:w-64 md:w-72 '>
            <div className="card w-96 bg-base-100 shadow-xl">
                <h2 className="card-title text-center ">Sport:<span className='text-pink-600 text-4xl font-bold'>{name}</span></h2>
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl w-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-center ">Instructor:<span className='text-pink-600 text-4xl font-bold'>{instructor}</span></h2>
                    <h2 className="card-title text-center ">Price: $$<span className='font-bold'>{price}</span></h2>

                    <div className="card-actions">
                        <button className="btn btn-primary">Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
  
export default SportsInfo;