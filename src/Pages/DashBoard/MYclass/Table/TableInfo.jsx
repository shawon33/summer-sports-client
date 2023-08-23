import React from 'react';
import { Link } from 'react-router-dom';

const TableInfo = ({ info }) => {
    const { name, image, price, email, _id } = info;
    console.log(info);
    return (
        <div className='text-xl'>
           
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>

                    </div>
                </div>
            </td>
            <td>
                <p>$$ <span className='text-red-500 font-bold'>{price}</span></p>
            </td>
            <td>
                <p>{email}</p>
            </td>
            <th>
                <Link >
                    <button className="btn btn-ghost btn-xs text-red-400 text-2xl">Delete</button>
                </Link>
            </th>
        </div>
    );
};

export default TableInfo;