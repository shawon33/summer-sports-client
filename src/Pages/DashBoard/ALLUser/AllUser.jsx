import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxios from '../../../Hooks/useAxios';

const AllUser = () => {
    const [axiosSecure] = useAxios()
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    });


    const handleToCreateAdmin = user => {
        fetch(`https://summer-sports-shawon33.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        icon: 'success',
                        title: `${user.name} is an Admin Now`,
                        text: 'Your success message goes here',
                    });
                }
            })
    }
    const handleToCreateInstructor = user => {
        fetch(`https://summer-sports-shawon33.vercel.app/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        icon: 'success',
                        title: `${user.name} is an Admin Now`,
                        text: 'Your success message goes here',
                    });
                }
            })
    }

    // const handleDelete = user => { };

    return (
        <div className='w-full'>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role === 'instructor' ? 'instructor' :
                                    <button onClick={() => handleToCreateInstructor(user)} className="btn btn-ghost bg-yellow-600  text-white"><FaUserShield></FaUserShield></button>
                                }</td>
                                <td>{user.role === 'admin' ? 'admin' :
                                    <button onClick={() => handleToCreateAdmin(user)} className="btn btn-ghost bg-yellow-600  text-white"><FaUserShield></FaUserShield></button>
                                }</td>
                                <td> <button onClick={() => handleDelete(sport)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;