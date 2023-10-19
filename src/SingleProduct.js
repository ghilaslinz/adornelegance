import React from 'react'
import { Link, useHistory, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToBasket } from './features/basketSlice';
import productData from './ProductData';
export default function SingleProduct() {
    const dispatch = useDispatch();
    const { id } = useParams();
   // Generate products
   const product = productData.find(prod => prod.id === id);
   if (!product) {
    return <div>Product not found</div>;
}

const addProductToBasket = () => {
    const signleproduct =  product;
    console.log("Dispatching action");
    dispatch(addToBasket(product));
    console.log("Action dispatched");
  }
  return (
    <div>   
        
        
        <div class="product-featured">

 

    <div class="showcase-wrapper product-grid">

      <div class="showcase-container">

        <div class="showcase">
          
          <div class="showcase-banner">
        
            <img src={product.imageFirst} alt="" width="500" class="product-img default " />
          <img src={product.imageSecond} alt="" width="500" class="product-img hover" />
          </div>

          <div class="showcase-content">
            
          <div class="showcase-rating">
    {Array(product.rating)
        .fill()
        .map((_, i) => (
            <ion-icon name="star"></ion-icon>
    ))}
    {Array(5 - product.rating)
        .fill()
        .map((_, i) => (
            <ion-icon name="star-outline"></ion-icon>
    ))}
</div>

            <a href="#">
              <h3 class="showcase-title">{product.title}</h3>
            </a>

            <p class="showcase-desc">
            {product.description}
            </p>

            <div class="price-box">
              <p class="price">{product.price}</p>

              <del>{product.oldPrice}</del>
            </div>

            <button class="add-cart-btn" onClick={addProductToBasket}>add to cart</button>

            <div class="showcase-status">
              <div class="wrapper">
                <p>
                  already sold: <b>20</b>
                </p>

                <p>
                  available: <b>40</b>
                </p>
              </div>

              <div class="showcase-status-bar"></div>
            </div>
    {/*
            <div class="countdown-box">

           <p class="countdown-desc">
                Hurry Up! Offer ends in:
              </p>

              <div class="countdown">

                <div class="countdown-content">

                  <p class="display-number">360</p>

                  <p class="display-text">Days</p>

                </div>

                <div class="countdown-content">
                  <p class="display-number">24</p>
                  <p class="display-text">Hours</p>
                </div>

                <div class="countdown-content">
                  <p class="display-number">59</p>
                  <p class="display-text">Min</p>
                </div>

                <div class="countdown-content">
                  <p class="display-number">00</p>
                  <p class="display-text">Sec</p>
                </div>

              </div>

            </div> */}

          </div>

        </div>

      </div>

     

    </div>

  </div>
</div>
  )
}
