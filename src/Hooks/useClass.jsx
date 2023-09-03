import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useClass = () => {
    const { data: menu = [], isLoading: loading } = useQuery({
        queryKey: ['class'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/class');
            return res.json();
        }
    })
    return [menu, loading]

};

export default useClass;