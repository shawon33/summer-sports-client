import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Authprovider/AuthProvider";


const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const {createUser,updateUserProfile} = useContext(AuthContext)

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {

                const loggedUser = result.user;
                console.log(loggedUser);

                updateUserProfile(data.name, data.photoURL)
                .then(() => {
                    const saveUser = { name: data.name, email: data.email }})
                    console.log(saveUser);
            })
            .catch(error => console.log(error))
    }



    return (
        <>
            <div className="hero py-36  bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">SignIn now!</h1>
                        <span className="py-6 text-pink-600 text-4xl font-bold flex gap-2">"Welcome to our Summer <p className="text-yellow-400">Skill</p> ! "</span>
                        <p className="text-pink-600">" We are excited to have you as our Student and can't wait to make this summer unforgettable for you."</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" {...register("name", { required: true })} placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is Required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">email is Required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password"  {...register("password", { required: true, minLength: 6, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/ })} placeholder="password" className="input input-bordered" />

                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase and one special character.</p>}
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}


                            </div>
                            <br />
                            <button className="btn btn-outline btn-success" type="submit">Register</button>
                            <p className='my-4 text-center'> <Link className='text-orange-600 font-bold' to="/logIn">Have a Account Login here </Link> </p>

                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;