import React, { useEffect, useState } from 'react';
import InstructorInfo from '../Home/Instructor/InstructorInfo';

const Instractur = () => {
    const [instructor, setInstructor] = useState([]);

    useEffect(() => {
        fetch('https://summer-sports-shawon33.vercel.app/instructor')
            .then(res => res.json())
            .then(data => {
                setInstructor(data);
            })

    }, [])
    return (
        <div className='my-12'>
            
            {
                instructor.map(info => <InstructorInfo
                    key={info._id}
                    info={info}
                ></InstructorInfo>)
            }
        </div>
    );
};

export default Instractur;