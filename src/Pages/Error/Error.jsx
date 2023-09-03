import React from 'react';
import img from "../../photo/error/error.jpg"

const Error = () => {
    return (
        <div className='mx-48'>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-8 rounded shadow-lg">
                    <Link to="/">
                        <button className="bg-blue-700 hover:bg-blue-400 text-white font-bold text-6xl py-2 px-4 rounded">
                            Go back
                        </button>
                    </Link>
                    <img className='max-w-full h-auto' src={img} alt="" />
                    <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong.</h1>
                    <p className="text-gray-600 mb-4">We apologize for the inconvenience. Please try again later.</p>

                </div>
            </div>
        </div>
    );
};

export default Error;