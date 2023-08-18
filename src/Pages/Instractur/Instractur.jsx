import React, { useEffect, useState } from 'react';
import InstructorInfo from '../Home/Instructor/InstructorInfo';

const Instractur = () => {
    const [instructor, setInstructor] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/instructor')
            .then(res => res.json())
            .then(data => {
                setInstructor(data);
            })

    }, [])
    return (
        <div>
            {instructor.length}
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