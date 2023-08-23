import React, { useEffect, useState } from 'react';
import SportsInfo from './SportsInfo';

const Sports = () => {
    const [sport, setSports] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/class')
            .then(res => res.json())
            .then(data => {
                setSports(data);
            })

    }, [])
    return (
        <div>
            <h1 className='text-pink-600 text-center text-5xl font-bold my-4'>Our All Class</h1>
            <hr className='p-3'></hr>
            <div className='grid grid-cols-2 md:grid-cols-3'>
                {
                    sport.map(info => <SportsInfo
                        key={info._id}
                        info={info}
                    ></SportsInfo>)
                }
            </div>
        </div>
    );
};

export default Sports;