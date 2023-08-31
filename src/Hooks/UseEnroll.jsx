import React, { useContext } from 'react';
import useAxios from './useAxios';
import { AuthContext } from '../Authprovider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const UseEnroll = () => {
    const [axiosSecure] = useAxios();
    const {user,loading} =useContext(AuthContext)

    const { refetch, data: enrollClass = [] } = useQuery({
        queryKey: ['enrollClass', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/enrollClass?email=${user?.email}`)
            // console.log("axios", res);
            // console.log(res.data);
            return res.data;
        }
    })
    return [enrollClass, refetch]
};

export default UseEnroll;