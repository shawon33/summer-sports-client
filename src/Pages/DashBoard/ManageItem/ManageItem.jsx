import React from 'react';
import useClass from '../../../Hooks/useClass';
import { Link } from 'react-router-dom';
import { FaTrashAlt,FaHandPeace, } from 'react-icons/fa';
import { FaHand,FaHandDots,FaHammer,FaBomb,FaMessage } from "react-icons/fa6";
import Instractur from './../../Instractur/Instractur';

const ManageItem = () => {
    const [menu] = useClass();
    console.log(menu);
    return (
        <div className='w-full'>
            <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
                <h3 className="text-3xl">Total Class: {menu.length}</h3>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>*</th>
                            <th>Img</th>
                            <th>Sport Name</th>
                            <th>Instructor</th>
                            <th>Email</th>
                            <th>Approve</th>
                            <th>Deny</th>
                            <th>Send</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menu.map((sport, index) => <tr
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
                                    {sport.instructor}
                                </td>
                                <td>
                                    {sport.email}
                                </td>
                                <td>
                                    <button className="btn btn-outline btn-success"><FaHandPeace></FaHandPeace></button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(sport)} className="btn btn-ghost bg-yellow-600  text-white"><FaHand></FaHand></button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(sport)} className="btn btn-ghost bg-pink-600  text-white"><FaMessage></FaMessage></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItem;