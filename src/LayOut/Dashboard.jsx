
import { Link, NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaWallet, FaCalendarAlt,FaTrain, FaHome, FaUtensils, FaBook, FaUsers } from 'react-icons/fa';


import useAdmin from '../Hooks/useAdmin';

const Dashboard = () => {


    // const instructor = true
    // const admin = true
    const [admin] = useAdmin();



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
                        admin ? <>
                            <li><NavLink to="/dashboard/adminHome"><FaHome></FaHome>Admin</NavLink></li>
                            <li><NavLink to="/dashboard/manageItems"><FaWallet></FaWallet>Manage Class</NavLink></li>
                            <li><NavLink to="/dashboard/users"><FaUsers></FaUsers>Manage User</NavLink></li>

                        </> : <>
                            <li><NavLink to="/dashboard/myClass"><FaHome></FaHome>My Selected Class</NavLink></li>
                            <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> Payment History</NavLink></li>
                            <li>
                                <NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart
                                    {/* <span className="badge inl badge-secondary">+{cart?.length || 0}</span> */}
                                </NavLink>

                            </li>
                        </>
                    }
                  
                    {/* {
                        admin ? <>
                            <li><NavLink to="/dashboard/home"><FaHome></FaHome>Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/reservations"><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li>
                            <li><NavLink to="/dashboard/users"><FaWallet></FaWallet>Users</NavLink></li>
                        </> : <>
                            <li><NavLink to="/dashboard/myClass"><FaDribbble></FaDribbble>my class</NavLink></li>
                            <li><NavLink to="/dashboard/reservations"><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li>
                            <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> Payment History</NavLink></li></>
                    } */}

                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                    <li><NavLink to="/sports"><FaTrain></FaTrain> Sports</NavLink></li>
                </ul>

            </div>

        </div>
    );
};

export default Dashboard;