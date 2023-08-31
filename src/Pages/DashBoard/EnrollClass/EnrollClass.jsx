import React from 'react';
import UseEnroll from '../../../Hooks/UseEnroll';


const EnrollClass = () => {
    const [enrollClass, refetch] = UseEnroll()
    console.log(enrollClass);
    return (
        <div className='w-full'>
            <h1>this is enroll Class</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>*</th>
                            <th>Img</th>
                            <th>Class</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            enrollClass.map((sport, index) => <tr
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
                                <td >${sport.price}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EnrollClass;