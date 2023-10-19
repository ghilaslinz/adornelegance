import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { selectBasket } from './features/basketSlice';
import { getBasketTotal } from './features/basketSlice';
import { CardElement, useStripe, useElements, Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { db } from './firebase'; 
import {Link, useNavigate} from "react-router-dom";
import firebase from 'firebase/app';
import { functions } from './firebase';
import CurrencyFormat from "react-currency-format";
import axios from './axios';
import './Cart.css'



//const stripePromise = loadStripe("pk_test_51N9j8OBp8CjdCMWzuGQGSrR9zpZPvRUBjO9AwzyCDvNmaq2orordXBQGWZwPYakdIwIw92o2lWaAREg9Lg6fiMsC00hUFpQaE4");

const stripePromise = loadStripe("pk_test_51ILvzVF5Dv9OaLAwFVTvBCWoIxRVgI1RjNjorlyWnyPptTxejWUN6WbDXxKALwh6Jt8l6FakwmMMQJLIkoc445ta00CrUXoqTG");

export default function Cart() {
    const user = useSelector(selectUser);
    const navigate = useNavigate();
    const basket = useSelector(selectBasket);
    const stripe = useStripe();
    const elements = useElements();
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [clientSecret, setClientSecret] = useState();
    const [disabled, setDisabled] = useState(true);
    

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    useEffect(() => {
        // generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
            const total = getBasketTotal(basket) * 100;
            console.log("Total sent to backend: ", total);
            if (total <= 0) {
                console.log("Total amount must be greater than 0");
                return;
            }
            try {
                const response = await axios({
                    method: 'post',
                    url: `/payments/create?total=${total}`
                });
                setClientSecret(response.data.clientSecret)
            } catch (error) {
                console.error("Error creating payment intent", error);
            }
        }
        

        getClientSecret();
    }, [basket])
    const handleSubmit = async (event) => {
        // do all the fancy stripe stuff...
        event.preventDefault();

            db.collection('userDetails').add({
        firstName: firstName,
        lastName: lastName,
        email: email,
        address: address,
        country: country,
        state: state,
        zip: zip
    });

    // Clear the input fields
    setFirstName('');
    setLastName('');
    setEmail('');
    setAddress('');
    setCountry('');
    setState('');
    setZip('');

        setProcessing(true);
        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }
        
        const cardElement = elements.getElement(CardElement);
        
        if (!cardElement) {
            // CardElement has not loaded yet. Make sure to disable
            // form submission until CardElement has loaded.
            return;
        }
        
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
                
            }
            
        }).then(({paymentIntent}) => {
            // paymentIntent = payment confirmation
            console.log('Payload: ', payload);
            console.log('PaymentIntent: ', paymentIntent);
            db.collection('users')
              .doc(user?.uid)
              .collection('orders')
              .doc(paymentIntent.id)
              .set({
                  basket:basket,
                  amount:paymentIntent.amount,
                  created:paymentIntent.created
              })
              
            setSucceeded(true);
            setError(null)
            setProcessing(false)

       /*    dispatch({
                type: 'EMPTY_BASKET'
            })*/

            navigate('/')
        }).catch(error => {
            console.error('Stripe error: ', error);
            setProcessing(false);
            setError(error.message);
        });

    }
    const handleChange = event => {
        // Listen for changes in the CardElement
        // and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }
    return (
        <Elements stripe={stripePromise}>
        <div className="checkout">
         <section class="py-5">
                <div class="container px-4 px-lg-5 my-5">
                <div class="row">
                <div class="col-md-4 order-md-2 mb-4">
                    <h4 class="d-flex justify-content-between align-items-center mb-3">
                    <span class="text-muted">Your cart</span>
                    <span class="badge badge-secondary badge-pill">3</span>
                    </h4>
                    <ul class="list-group mb-3">
                    {basket.map(item => (
                    <li class="list-group-item d-flex justify-content-between lh-condensed">
                        <div>
                        <h6 class="my-0">{item.title}</h6>
                      
                        </div>
                        <span class="text-muted">{item.price} €</span>
                    </li>
                     ))}
                  
               
                    <li class="list-group-item d-flex justify-content-between">
                        <span>Total (€)</span>
                     
                             <strong>     <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
            
             ({basket.length} items): <strong>{value}</strong>
            </p>
           
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} 
        displayType={"text"}
        thousandSeparator={true}
        prefix={"€"}
      />
</strong>
                    
                    </li>
                    </ul>

                    <form class="card p-2">
                    <div class="input-group">
                        <input type="text" class="form-control me-2" placeholder="Promo code"/>
                        <div class="input-group-append">
                        <button type="button" class="btn btn-dark px-4 rounded-pill">Redeem</button>
                        </div>
                    </div>
                    </form>
                </div>
                <div class="col-md-8 order-md-1">
                    <h4 class="mb-3">Billing address</h4>
                    <form class="needs-validation" novalidate>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                        <label for="firstName" class="form-label">First name</label>
                        <input type="text" 
                        class="form-control"
                         id="firstName" 
                         placeholder="" 
                         value={firstName} 
                         onChange={e => setFirstName(e.target.value)}
                          required />
                        <div class="invalid-feedback">
                            Valid first name is required.
                        </div>
                        </div>
                        <div class="col-md-6 mb-3">
                        <label for="lastName" class="form-label">Last name</label>
                        <input type="text" class="form-control" id="lastName" placeholder=""
                         value={lastName}
                         onChange={e => setLastName(e.target.value)}
                          required />
                        <div class="invalid-feedback">
                            Valid last name is required.
                        </div>
                        </div>
                    </div>

    
                    <div class="mb-3">
                        <label for="email" class="form-label">Email <span class="text-muted">(Optional)</span></label>
                        <input type="email" class="form-control" id="email"
                         placeholder=""
                         value={email} 
                         onChange={e => setEmail(e.target.value)}
                        
                         
                         />
                        <div class="invalid-feedback">
                        Please enter a valid email address for shipping updates.
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="address" class="form-label">Address</label>
                        <input type="text" class="form-control" id="address" placeholder=""
                        value={address}
                         onChange={e => setAddress(e.target.value)}
                        required />
                        <div class="invalid-feedback">
                        Please enter your shipping address.
                        </div>
                    </div>

                   

                    <div class="row">
                        <div class="col-md-5 mb-3">
                        <label for="country" class="form-label">Country</label>
                        <input type="text" class="form-control" id="country"
                        value={country}
                        onChange={e => setCountry(e.target.value)}
                        placeholder="" />
                        <div class="invalid-feedback">
                            Please select a valid country.
                        </div>
                        </div>
                      
                        <div class="col-md-3 mb-3">
                        <label for="zip" class="form-label">Zip</label>
                        <input type="text" class="form-control" id="zip" placeholder="" 
                        value={zip}
                         onChange={e => setZip(e.target.value)}
                        required />
                        <div class="invalid-feedback">
                            Zip code required.
                        </div>
                        </div>
                    </div>
                  

                 
                    </form>
                </div>
                </div>
            </div>
            </section>
            <div className='payment__section'>
    <form onSubmit={handleSubmit} className='payment__form'>
        <div className='payment__cardInput'>
            <CardElement onChange={handleChange} className='payment__cardElement'/>
        </div>

        <div className='payment__priceContainer'>
            <h3 className='payment__total'>
                <CurrencyFormat
                    renderText={(value) => (
                        <>Order Total: {value}</>
                    )}
                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"€"}
                />
            </h3>
            <button disabled={processing || disabled || succeeded} className='payment__checkoutButton'>
                <span className='payment__buttonText'>{processing ? <p>Processing</p> : "Buy Now"}</span>
            </button>
        </div>

        {/* Errors */}
        {error && <div className='payment__error'>{error}</div>}
    </form>
</div>

            {/*
            <div className='payment__section'>
            <form onSubmit={handleSubmit}>
                                <CardElement onChange={handleChange}/>

                                <div className='payment__priceContainer'>
                                    <CurrencyFormat
                                        renderText={(value) => (
                                            <h3>Order Total: {value}</h3>
                                        )}
                                        decimalScale={2}
                                        value={getBasketTotal(basket)}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"€"}
                                    />
                                    <button disabled={processing || disabled || succeeded}>
                                        <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                    </button>
                                </div>

                                
                                {error && <div>{error}</div>}
                            </form>
        </div>
        */}
        </div>
        </Elements>
    )
  }


