import React, { useContext } from 'react';
import { AuthContext } from '../../../Authprovider/AuthProvider';

const AdminHome = () => {
    const { user } = useContext(AuthContext)
    console.log(user);
    return (
        <div>
            <h1 className='text-6xl font-bold text-center text-pink-600 '>Admin</h1>
            {/* <div className="w-full ">
                <img src={user.photoURL} />
            </div> */}
            <div className="flex justify-center items-center min-h-screen">
                <div className="bg-white p-8 rounded-lg shadow-md max-w-sm">
                    <img className="w-32 h-32 mx-auto rounded-full" src={user.photoURL} alt="User Profile Image"/>
                        <h2 className="text-xl font-semibold mt-4">{user.displayName}</h2>
                        <p className="text-gray-600">Web Developer</p>
                        <div className="mt-4">
                            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="mt-4">
                            <a href="#" className="text-blue-500 hover:underline">View Profile</a>
                        </div>
                </div>
            </div>

        </div>
    );
};

export default AdminHome;