import { useContext } from "react";
import { AuthContext } from "../Authprovider/AuthProvider";
import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";

const useInstructor = () => {
    const { user,loading } = useContext(AuthContext);
    const [axiosSecure] = useAxios();
    const { data: instructors, isInsLoading } = useQuery({
        queryKey: ['instructor', user?.email],
        enabled: !loading && !!user?.email && !!localStorage.getItem('access-token'),
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
            return res.data.instructor
        }
    });
    return [instructors, isInsLoading]
};

export default useInstructor;