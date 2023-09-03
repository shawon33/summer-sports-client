import React, { useContext } from 'react';
import useAxios from '../../../Hooks/useAxios';
import { AuthContext } from '../../../Authprovider/AuthProvider';
import useClass from '../../../Hooks/useClass';

const MyClass = () => {
    const [axiosSecure] = useAxios();
    const [menu, loading, refetch] = useClass()
    const { user } = useContext(AuthContext);

    const instructorClassInfo = menu.filter(item => item.email === user.email);


    return (

        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>*</th>
                        <th>Img</th>
                        <th>Sport Name</th>
                        <th>Email</th>
                        <th>Price</th>


                    </tr>
                </thead>
                <tbody>
                    {
                        instructorClassInfo.map((sport, index) => <tr
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
                        </tr>)
                    }
                </tbody>
            </table>
        </div>

    );
};

export default MyClass;