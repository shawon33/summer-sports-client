
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Authprovider/AuthProvider';
import { useContext } from 'react';
import useInstructor from '../Hooks/useInstructor';

const InstructorRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [instructors, isInsLoading] = useInstructor()
    const location = useLocation();

    if (loading || isInsLoading) {
        return <span className="loading loading-dots loading-lg ml-56"></span>
    }

    if (user && instructors) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>


};

export default InstructorRoute;