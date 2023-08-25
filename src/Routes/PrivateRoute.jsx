

import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Authprovider/AuthProvider';
import { useContext } from 'react';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <span className="loading loading-dots loading-lg ml-56"></span>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>


};

export default PrivateRoute;