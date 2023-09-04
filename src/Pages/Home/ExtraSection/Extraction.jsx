import React, { useEffect, useState } from 'react';
import Extrinfo from './Extrinfo';

const Extraction = () => {
    const [extra, setClass] = useState([]);

    useEffect(() => {
        fetch('https://summer-sports-shawon33.vercel.app/extrasection')
            .then(res => res.json())
            .then(data => {
                const slicedData = data.slice(0, 6);
                setClass(slicedData);
               
            })

    }, [])

    return (
        <div className='text-center  my-12 '>
            <div className='my-12'>
                <h1 className='text-6xl font-bold text-center text-pink-600'>ExtraClass</h1>
                <p className='text-3xl text-pink-600'>Improving and Prepare to Yourself</p>
                <hr/>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3  '>

                {
                    extra.map(fool => <Extrinfo
                        key={fool._id}
                        fool={fool}
                    ></Extrinfo>)
                }
            </div>
        </div>
    );
};

export default Extraction;