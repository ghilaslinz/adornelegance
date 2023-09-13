import React from 'react'
import { useDispatch } from "react-redux";
import { addToBasket } from './features/basketSlice';
import productData from './ProductData';
import { Link, useHistory, useParams } from "react-router-dom";
function Bestsellers() {
  const dispatch = useDispatch();
 // const ids = productData.map(prod => prod.id);
 //const ids = productData.filter((item, index) => index < 4).map(prod => prod.id);

  return (

    <div>  
      

      
      <div class="showcase-wrapper">
     
    

    <div class="showcase-container">
    {productData.filter((item,index) => index < 5).map((prod) => 
     <Link to={`/product/${prod.id}`}>	
     <div class="showcase">

        <a href="#" class="showcase-img-box">
          <img src={prod.imageFirst} alt="" width="75" height="75"
            class="showcase-img" />
        </a>

        <div class="showcase-content">

          <a href="#">
            <h4 class="showcase-title" key={prod.id}>{prod.title}</h4>
          </a>

          <div class="showcase-rating">
          {Array(prod.rating)
          .fill()
          .map((_, i) => (
            <ion-icon name="star"></ion-icon>
          ))}
          {Array(5 - prod.rating)
         .fill()
         .map((_, i) => (
            <ion-icon name="star-outline"></ion-icon>
          ))}
</div>

          <div class="price-box">
            
            <p class="price">{prod.price}</p>
          </div>

        </div>

      </div>
       </Link>

)}

     

     

    </div>

  </div>
  
  </div>
  
  )
  
}

export default Bestsellers