import { useEffect, useState } from "react";
import ClassInfo from "./ClassInfo";
import useClass from "../../../Hooks/useClass";



const Class = () => {
    const [infoClass, setClass] = useState([]);
    // const [menu, loading] = useClass()

    useEffect(() => {
        fetch('https://summer-sports-shawon33.vercel.app/class')
            .then(res => res.json())
            .then(data => {
                const slicedData = data.slice(0, 6);
                setClass(slicedData);
            })
        // const fool = menu.slice(0, 6);
        // setClass(fool)

    }, [])

    return (
        <div className="bg-slate-100">
            <h1 className="text-6xl font-bold text-center text-pink-600 mt-24">Popular Sports </h1>
            <hr className='md:h-3 bg-red-400 sm: p-1 mt-4'></hr>
            <p className="text-3xl  text-center text-pink-600 ">Enrolling class and Our popular class</p>
            <div className="grid md:grid-row-2  mt-5 mb-5">
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