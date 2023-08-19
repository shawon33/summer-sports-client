import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Authprovider/AuthProvider';

const SportsInfo = ({ info }) => {
    const {user} = useContext(AuthContext);
    const { name, image, instructor, price } = info;
    const navigate = useNavigate();
    const location = useLocation();


    const handleAddToSports = info => {
      
        if (user) {
            fetch('http://localhost:5000/carts')
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'sports added on the cart.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }
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
                        <button onClick={() => handleAddToSports(info)} className="btn btn-primary">Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SportsInfo;