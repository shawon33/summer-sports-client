import React from 'react';
import Sports from './../../Sports/Sports';
import useCard from '../../../Hooks/useCard';
import TableInfo from './Table/TableInfo';
import Instractur from './../../Instractur/Instractur';

const MySelectedClass = () => {
    const [Sports] = useCard()
    return (
        <div>
            <h1>this is my all class{Sports.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Email</th>    
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>

                            <div>
                                {
                                    Sports.map(info => <TableInfo
                                        key={info._id}
                                        info={info}
                                    ></TableInfo>)
                                }
                            </div>

                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MySelectedClass;