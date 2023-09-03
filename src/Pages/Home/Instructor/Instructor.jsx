import React, { useEffect, useState } from 'react';
import InstructorInfo from './InstructorInfo';

const Instructor = () => {

    const [instructor, setInstructor] = useState([]);

    useEffect(() => {
        fetch('https://summer-sports-shawon33.vercel.app/instructor')
            .then(res => res.json())
            .then(data => {
                const slicedData = data.slice(0, 6);
                setInstructor(slicedData);
            

            })

    }, [])
    return (
        <div className=' my-10 bg-slate-100  '>
            <h1 className="text-6xl font-bold text-center text-pink-600 mt-24">Popular Instructor </h1>
            <hr className='md:h-3 bg-red-400 sm: p-1 mt-4 mb-4'></hr>
            <div>
                {
                    instructor.map(info => <InstructorInfo
                        key={info._id}
                        info={info}
                    ></InstructorInfo>)
                }
            </div>
        </div>
    );
};

export default Instructor;