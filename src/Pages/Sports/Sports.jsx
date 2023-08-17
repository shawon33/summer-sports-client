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
            <h1>this is sports</h1>
            <div className='grid grid-cols-1 md:grid-cols-3'>
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