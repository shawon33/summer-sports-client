import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Authprovider/AuthProvider";
import Instractur from './../../Pages/Instractur/Instractur';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    const items = <>
        <Link to='/' className="font-bold">Home</Link>
        <Link to='/sports' className="font-bold">Sports</Link>
        <Link to='/instructor' className="font-bold">Instructor</Link>

        {
            // user && <img className='my-auto' src={user.photoURL} style={{ height: 40 }} />
            user && <>
                <Link to='/dashboard/myClass' className="font-bold">Dashboard</Link>
                <img className="w-12 my-auto rounded-full" src={user.photoURL} /></>

        }
        {
            user ?
                <button onClick={handleLogOut} variant="secondary" className="font-bold">LogOut</button> :
                <Link to='/login' ><button variant="secondary" className="font-bold" >Login</button></Link>
        }

    </>
    const items2 = <>
        <h1>this is mobile</h1>
        {/* <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md">Home</a>
        <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md">About</a>
        <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md">Services</a>
        <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md">Contact</a> */}
    </>



    return (
        <div>
            <nav className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 text-white">
                                <a href="#" className=" text-xl text-pink-600 font-bold">SUMMER SPORTS</a>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    {items}
                                </div>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button onClick={toggleMenu} type="button" className="text-gray-300 hover:text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                <span className="sr-only">Open main menu</span>
                                {/* Heroicon name: menu */}
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {items2}
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;