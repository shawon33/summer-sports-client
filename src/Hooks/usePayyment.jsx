import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import useAxios from './useAxios';
import { AuthContext } from '../Authprovider/AuthProvider';

const usePayyment = () => {
    const [axiosSecure] = useAxios();
    const {user,loading} =useContext(AuthContext)

    const { refetch, data: payment = [],} = useQuery({
        queryKey: ['payment', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/payment?email=${user?.email}`)
            // console.log("axios", res);
            console.log(res.data);
            return res.data;
        }
    })
    return [payment,loading, refetch]
}
export default usePayyment;