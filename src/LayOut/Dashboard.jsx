import { Link, NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaWallet,  FaTrain, FaHome,  FaUsers } from 'react-icons/fa';
import useAdmin from '../Hooks/useAdmin';
import useInstructor from '../Hooks/useInstructor';

const Dashboard = () => {
 
    const [admin] = useAdmin();
    const [instructor] = useInstructor();

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full  text-base-content">
                    {/* Sidebar content here */}
                    {
                        admin ?
                            <>
                                <li><NavLink to="/dashboard/adminHome"><FaHome></FaHome>Admin</NavLink></li>
                                <li><NavLink to="/dashboard/manageItems"><FaWallet></FaWallet>Manage Class</NavLink></li>
                                <li><NavLink to="/dashboard/users"><FaUsers></FaUsers>Manage User</NavLink></li></>
                            :
                            instructor ?
                                <>
                                    <li><NavLink to="/dashboard/adminHome"><FaHome></FaHome>instructor</NavLink></li>
                                    <li><NavLink to="/dashboard/manageItems"><FaWallet></FaWallet>Manage Class</NavLink></li>
                                    <li><NavLink to="/dashboard/users"><FaUsers></FaUsers>Manage User</NavLink></li>

                                </>
                                :
                                <>
                                {/* user */}
                                    <li><NavLink to="/dashboard/myClass"><FaHome></FaHome>My Selected Class</NavLink></li>
                                    <li><NavLink to="/dashboard"><FaWallet></FaWallet> Payment History</NavLink></li>
                                    <li><NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart</NavLink></li>
                                </>}

                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                    <li><NavLink to="/sports"><FaTrain></FaTrain> Sports</NavLink></li>
                </ul>

            </div >

        </div >
    );
};

export default Dashboard;