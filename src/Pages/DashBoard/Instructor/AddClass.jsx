import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import useAxios from '../../../Hooks/useAxios';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Authprovider/AuthProvider';

const AddClass = () => {
    const {user} = useContext(AuthContext)
    const [axiosSecure] = useAxios();
    const { register, handleSubmit, reset } = useForm();


    const onSubmit = async(data) => {
        console.log(data);
        try {
            const response = await axiosSecure.post('/class', data);
            console.log('Response:', response.data);
            Swal.fire({
                icon: 'success',
                title: 'Added A New Class',
                text: 'Class has been added successfully!',
              });
            reset();
          } catch (error) {
            console.error('Error:', error);
          }
    };

    return (
        <div className="w-full px-10">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Class Name*</span>
                    </label>
                    <input type="text" placeholder="Recipe Name"
                        {...register("name", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>

                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor*</span>
                    </label>
                    <input type="text" placeholder="Recipe Name"
                        {...register("instructor", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Email*</span>
                    </label>
                    <input type="email" placeholder="Instructor Email" defaultValue={user.email}
                        {...register("email", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>

                <div className="flex my-4">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Available-seat*</span>
                        </label>
                        <input type="text" placeholder="Recipe Name"
                            {...register("avialable_seat", { required: true, maxLength: 120 })}
                            className="input input-bordered w-full " />
                    </div>

                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>
                        </label>
                        <input type="number" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                </div>

                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text">Item Image*</span>
                    </label>
                    <input type="photo" {...register("image", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <input className="btn btn-sm mt-4" type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddClass;