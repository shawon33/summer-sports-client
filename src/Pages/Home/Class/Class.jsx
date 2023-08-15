import { useEffect, useState } from "react";
import ClassInfo from "./ClassInfo";



const Class = () => {
    const [infoClass, setClass] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/class')
            .then(res => res.json())
            .then(data => {
                const slicedData = data.slice(0, 6);
                setClass(slicedData);
                console.log(slicedData);
            })

    }, [])

    return (
        <div>
            <h1 className="text-6xl font-bold text-center text-pink-600 mt-24">Popular Sports </h1>
            <hr  className='md:h-3 bg-red-200 sm: p-1 mt-4'></hr>
            <div className="grid-row-3  mt-5 mb-3">
                {
                    infoClass.map(info => <ClassInfo
                        key={info._id}
                        info={info}
                    ></ClassInfo>)
                }
            </div>
        </div>
    );
};

export default Class;