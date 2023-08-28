import React from 'react';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import useCard from '../../../Hooks/useCard';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
// console.log(import.meta.env.VITE_Payment_Gateway_PK);



const Payment = () => {
    const [Sports] = useCard()
    const total = Sports.reduce((sum, money) => money.price + sum, 0);
    const price = parseFloat(total.toFixed(2))

    return (
        <div className='w-full'>
            <h1 className='text-6xl text-pink-500 text-center font-bold'>Payment Page</h1>
            <hr className=''></hr>
            <h1 className='text-3xl text-pink-500 text-center font-bold p-4'>Plz  Payment to Join Us </h1>

            <Elements stripe={stripePromise}>
                <CheckoutForm price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;