import { useContext } from "react";
import { AuthContext } from "../Authprovider/AuthProvider";
import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";

const useInstructor = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxios();
    const { data: instructor, isInsLoading } = useQuery({
        queryKey: ['instructor', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
            return res.data.instructor
        }
    });
    return [instructor, isInsLoading]
};

export default useInstructor;