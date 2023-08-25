
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';
import { AuthContext } from '../Authprovider/AuthProvider';
import { useContext } from 'react';

const AdminRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const [admin,isAdminLoading] = useAdmin()
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <span className="loading loading-dots loading-lg ml-56"></span>
    }

    if (user && admin) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>


};

export default AdminRoute;