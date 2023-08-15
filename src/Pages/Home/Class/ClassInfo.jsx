
import React from 'react';


const ClassInfo = ({ info }) => {
    const { name, image, instructor } = info;
    console.log(info);
    return (
        <>
            <div className="">
                <div className="hero bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-6xl font-bold">Sports: <span className='text-pink-600'>{name}</span></h1>
                            <p className="py-6 text-3xl font-bold">Instructor: {instructor}</p>
                            <p className="py-6 font-bold text-yellow-100">Sports promote physical fitness and overall well-being by encouraging regular exercise and physical activity. Engaging in sports helps to improve cardiovascular health, develop muscular strength and endurance, and enhance flexibility and coordination. </p>
                             <p className='py-6 font-bold'>Rating: 4.5</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ClassInfo;