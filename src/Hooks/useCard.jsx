import React, { useContext } from 'react';
import { AuthContext } from '../Authprovider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useCard = () => {
    const { user } = useContext(AuthContext);

    const { refetch, data: sports = [] } = useQuery({
        queryKey: ['sports', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/sports?email=${user?.email}`)
            return res.data;
        },
    })

    return [sports, refetch]


};

export default useCard;