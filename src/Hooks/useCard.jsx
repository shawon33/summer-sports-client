import { useContext } from 'react';
import { AuthContext } from '../Authprovider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useAxios from './useAxios';

const useCard = () => {
    const { user, loading } = useContext(AuthContext);
    // const token = localStorage.getItem('access-token');
    // console.log(token);
    // console.log(user.email);

    const [axiosSecure] = useAxios();

    const { refetch, data: Sports = [] } = useQuery({
        queryKey: ['sports', user?.email],
        enabled: !loading,
        // enabled: !!user?.email && !!localStorage.getItem('access-token'),
        queryFn: async () => {
            const res = await axiosSecure(`/sports?email=${user?.email}`)
            // console.log("axios", res);
            return res.data;
        }
    })
    return [Sports, refetch]


};

export default useCard;


// , {
//     headers: {
//         authorization: `bearer ${token}`
//     }
// }