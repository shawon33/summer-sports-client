import React from 'react';
import Sports from './../../Sports/Sports';
import useCard from '../../../Hooks/useCard';
import TableInfo from './Table/TableInfo';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2';


const MySelectedClass = () => {
    const [Sports, refetch] = useCard()
    console.log(Sports);
  
    const total = Sports.reduce((sum, money) => money.price + sum, 0);
    const handleDelete = sport => {
        fetch(`http://localhost:5000/sports/${sport._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }
            })
    }


return (
    <div className="w-full">
        <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
            <h3 className="text-3xl">Total Items: {Sports.length}</h3>
            <h3 className="text-3xl">Total Price: ${total}</h3>
            <Link to="/dashboard/payment">
                <button className="btn btn-warning btn-sm">PAY</button>
            </Link>
        </div>
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>*</th>
                        <th>Img</th>
                        <th>Sport Name</th>
                        <th>Price</th>
                        <th>Email</th>
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