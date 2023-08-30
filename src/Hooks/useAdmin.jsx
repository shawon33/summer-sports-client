import { useContext } from "react"
import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Authprovider/AuthProvider";

const useAdmin = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxios();
    const { data : admin ,isAdminLoading } = useQuery({
        queryKey: ['admin', user?.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            // console.log('is admin response' ,res);
            return res.data.admin
        }
    });
    return[ admin,isAdminLoading]
}
export default useAdmin;