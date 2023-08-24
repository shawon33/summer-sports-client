import { useContext } from 'react';
import { AuthContext } from '../Authprovider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useCard = () => {
    const { user } = useContext(AuthContext);

    const { refetch, data: Sports = [] } = useQuery({
        queryKey: ['sports', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/sports?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            return res.json();
        },
    })

    return [Sports, refetch]


};

export default useCard;