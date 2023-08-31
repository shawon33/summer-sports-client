import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import useAxios from '../../../Hooks/useAxios';
import { AuthContext } from '../../../Authprovider/AuthProvider';
import useCard from '../../../Hooks/useCard';
import usePayyment from '../../../Hooks/usePayyment';
// import './css/CheakOutForm.css'


const CheckoutForm = ({ price }) => {
  const { user } = useContext(AuthContext)
  const stripe = useStripe();
  const elements = useElements();
  const [errorCard, setErrorCard] = useState('')
  const [axiosSecure] = useAxios()
  const [clientSecret, setClientSecret] = useState();
  const [processing, setProcessing] = useState(false)
  const [transactionId, setTransactionId] = useState();
  const [Sports] = useCard()
  // console.log(Sports);
  const[refetch] = usePayyment()




  useEffect(() => {
    if (price > 0) {
      axiosSecure.post('/create-payment-intent', { price })
        .then(res => {
          // console.log(res.data.clientSecret)
          setClientSecret(res.data.clientSecret);
        })
    }
  }, [price, axiosSecure,refetch])

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return
    }
    const { error } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    })

    if (error) {
      console.log('error', error);
      setErrorCard(error.message)
    } else {
      setErrorCard('')
      // console.log('PaymentMethod', paymentMethod);
    }
    setProcessing(true);

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || 'unknown',
            name: user?.displayName || 'unknown'
          },
        },
      },
    );
    if (confirmError) {
      console.log(confirmError);
    }
    console.log('payment intent', paymentIntent);

    setProcessing(false);

    if (paymentIntent.status === 'succeeded') {
      setTransactionId(paymentIntent.id)
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        date: new Date(),
        Quantity: Sports.length,
        paymentId: Sports.map(res => res._id),
        classId: Sports.map(res => res.sportsId),
        paymentClass: Sports.map(res => res.name)
      }
      axiosSecure.post("/payments",payment )
        .then(res => {
          console.log(res.data);
          if (res.data.insertedId) {
            // fool
          }
        })

    }
  };
  return (
    <>
      <form className='w-2/3 m-8' onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <div className='m-4 text-center'>
          <button className="btn btn-outline btn-success px-24" type="submit" disabled={!stripe || !clientSecret || processing}>
            Pay
          </button>
          {/* <button className="btn btn-outline btn-succes">
         <Link to="/">Home</Link>
        </button> */}
        </div>
      </form>
      {errorCard && <p className='text-red-600'>{errorCard}</p>}
      {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}
    </>

  );
};

export default CheckoutForm;