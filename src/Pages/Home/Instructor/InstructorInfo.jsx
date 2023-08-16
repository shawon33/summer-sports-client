import React from 'react';
import Instructor from './Instructor';

const InstructorInfo = ({ info }) => {
    const { name, image, email } = info;
    return (
        <>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row ">
                    <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-6xl font-bold">Name: <span className='text-pink-600'>{name}</span></h1>
                        <p className='py-6 font-bold'>Email:{email}</p>
                        <p className='text-pink-200'>"Sports bestow the gift of health, as bodies thrive and minds find wealth."
                            "Through teamwork's embrace and challenges faced, sports grant character and life's embrace.</p>
                        <button className="btn btn-primary">About Us</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InstructorInfo;