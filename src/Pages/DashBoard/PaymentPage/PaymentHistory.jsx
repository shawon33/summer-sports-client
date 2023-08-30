import React, { useContext, useEffect, useState } from 'react';
import useAxios from '../../../Hooks/useAxios';
import { AuthContext } from '../../../Authprovider/AuthProvider';
import PaymentInfo from './PaymentInfo';


const PaymentHistory = () => {
    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxios()
    const [history, setPayment] = useState()
    useEffect(() => {
        axiosSecure(`/payment?email=${user?.email}`)
            .then(res => {
                console.log(res.data);
                setPayment(res.data)
            })

    }, [])


    return (
        <div>
            <h1 className='text-6xl text-center font-bold '>Your Success PaymentHistory</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>*</th>
                            <th>Img</th>
                            <th>Email</th>
                            <th>Payment ID</th>
                            <th>Quantity</th>
                            <th>Date</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            history.map((sport, index) => <tr
                                key={sport._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={user.photoURL} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {sport.email}
                                </td>
                                <td>
                                    {sport.transactionId}
                                </td>
                                <td className="text-end">${sport.Quantity}</td>
                                <td className="text-end">${sport.price}</td>
                                <td className="text-end">${sport.date}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;