import { useContext } from "react";
import { AuthContext } from "../../Authprovider/AuthProvider";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";


const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handelLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Your success message goes here',
                });
                navigate(from, { replace: true })

            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'An error occurred. Please try again.',
                });
                console.log(error);
            })

    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const googleUser = result.user;
                const User = { name: googleUser.displayName, email: googleUser.email }
                fetch('https://summer-sports-shawon33.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(User)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
    }
    // min-h-screen
    return (
        <div>
            <div className="hero py-36  bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <span className="py-6 text-pink-600 text-4xl font-bold flex gap-2">"Welcome to our Summer <p className="text-yellow-400">Skill</p> ! "</span>
                        <p className="text-pink-600">" We are excited to have you as our Student and can't wait to make this summer unforgettable for you."</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handelLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                            </div>
                            <br />
                            <button className="btn btn-outline btn-success" type="submit">Login</button>
                            <p className='my-4 text-center'> <Link className='text-orange-600 font-bold' to="/register">Join us with Register here </Link> </p>
                        </form>
                        <div className="w-full text-center my-4">
                            <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                                <FaGoogle></FaGoogle>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;