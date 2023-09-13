import React from 'react';
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { selectBasket } from './features/basketSlice';
export default function Header() {
    const basket = useSelector(selectBasket);
    console.log("this is the baske of the checkout " + basket);
    return (
        <div className="single">
         
         <section class="py-5">
                <div class="container px-4 px-lg-5 my-5">
                <div class="row">
                <div class="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">

                   
                    <div class="table-responsive">
                    <table class="table">
                        <thead>
                        <tr>
                            <th scope="col" class="border-0 bg-light">
                            <div class="p-2 px-3 text-uppercase">Product</div>
                            </th>
                            <th scope="col" class="border-0 bg-light">
                            <div class="py-2 text-uppercase">Price</div>
                            </th>
                            <th scope="col" class="border-0 bg-light">
                            <div class="py-2 text-uppercase">Quantity</div>
                            </th>
                            <th scope="col" class="border-0 bg-light">
                            <div class="py-2 text-uppercase">Remove</div>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        
                      {basket.map(item => (
                        <CheckoutProduct   
                        title={item.title}
                        imageFirst={item.imageFirst}
                        imageSecond={item.imageSecond}
                        price={item.price}
                        quantity={item?.length}
                        />
                      ))}
                           
                        </tbody>
                    </table>
                    </div>
                   
                </div>
                </div>

              
               
               
                 <Link class="btn btn-dark rounded-pill py-2 d-md-block" to={'/cart'}>Procceed to checkout</Link>
                

            </div>
            </section>
        </div>
      
    )
  }

