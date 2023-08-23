import React from 'react';
import Sports from './../../Sports/Sports';
import useCard from '../../../Hooks/useCard';
import TableInfo from './Table/TableInfo';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from "react-icons/fa";


const MySelectedClass = () => {
    const [Sports, refetch] = useCard()
    const total = Sports.reduce((sum, money) => money.price + sum, 0);

    return (
        <div className=''>
            <div className="uppercase font-semibold h-[60px] flex  ">
                <h3 className='text-2xl'>Total Class : <span className='text-3xl text-pink-500'>{Sports.length}</span></h3>
                <h3 className='pl-8'>Total Price:{total}</h3>
                <div className='pl-24'>
                    <Link to="/dashboard/payment">
                        <button className="btn btn-warning btn-sm"><span className='text-pink-500'>PAY</span></button>
                    </Link>
                </div>
            </div>
            <div className="">
                <table className="table ">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Img</th>
                            <th> Name</th>
                            <th>email</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Sports.map((sport, index) => <tr
                                key={sport._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={sport.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {sport.name}
                                </td>
                                <td>
                                    {sport.email}
                                </td>
                                <td className="text-end">${sport.price}</td>
                                <td>
                                    <button onClick={() => handleDelete(sport)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MySelectedClass;