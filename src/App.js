import React, { useEffect } from 'react';
import { auth } from './firebase';
import Header from './Header'
import Main from './Main'
import Checkout from './Checkout'
import SingleProduct from './SingleProduct'
import Cart from './Cart'
import Footer from './Footer'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import { Provider, useSelector } from 'react-redux'; 
import { useDispatch} from "react-redux";
import {login, logout, selectUser} from './features/userSlice';
import store from './app/store';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

/*const stripePromise = loadStripe(
  "pk_test_51N9j8OBp8CjdCMWzuGQGSrR9zpZPvRUBjO9AwzyCDvNmaq2orordXBQGWZwPYakdIwIw92o2lWaAREg9Lg6fiMsC00hUFpQaE4"
 );*/

 const stripePromise = loadStripe(
  "pk_test_51ILvzVF5Dv9OaLAwFVTvBCWoIxRVgI1RjNjorlyWnyPptTxejWUN6WbDXxKALwh6Jt8l6FakwmMMQJLIkoc445ta00CrUXoqTG"
 );
 
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
   const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if(userAuth){
          //Logged in
          console.log(userAuth);
          dispatch(login({
            uid: userAuth.uid,
            email : userAuth.email,
          })
          );
      }else{
         dispatch(logout());
      }
    })
      return unsubscribe;
    
  }, [dispatch])
  return (

    <Router>
    <div className="App">
    <Routes>
          <Route path="/signup" element={ <SignUp />} />
           
        

          
          <Route path="/login" element={ <Login />} />
         
          
          
          <Route path="/" element={
              <>
               <Header />
                <Main />
              
              </>


          } />
         

         <Route path="/product/:id" element={
              <>
               <Header />
                <SingleProduct />
              </>


          } />
         
       <Route path="/checkout" element={ 
           <>
          <Header/>
          <Checkout />
          </>
       } />
 
       <Route path="/cart" element={

        <>
          <Header/>
          <Elements stripe={stripePromise}>
              <Cart />
            </Elements>
          
        </>
       } />

    </Routes>
      </div>

    </Router> 
  );
}

// wrap your App component with the Provider component and pass your store as a prop
function AppWrapper() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default AppWrapper;