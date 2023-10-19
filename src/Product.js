import React from "react";
import { useDispatch } from "react-redux";
import { addToBasket } from './features/basketSlice';
import { Link, useHistory, useParams } from "react-router-dom";
function Product({ id, category, title, price, oldPrice, rating, imageFirst, imageSecond, badge, badgeClass}) {
const dispatch = useDispatch();

const addProductToBasket = () => {
  const product ={
    id,
    category,
    title,
    price,
    oldPrice,
    rating,
    imageFirst,
    imageSecond,
    badge,
    badgeClass
  };
  console.log("Dispatching action");
  dispatch(addToBasket(product));
  console.log("Action dispatched");
}
//console.log("this is id" + id);
  return (
    <div class="showcase">

    <div class="showcase-banner">
    <Link to={`/product/${id}`}>	
      <img src={imageFirst} alt="" width="300" class="product-img default" />
      <img src={imageSecond} alt="" width="300" class="product-img hover" />
      </Link>
      <p class={badgeClass}>{badge}</p>

      <div class="showcase-actions">

        <button class="btn-action">
          <ion-icon name="heart-outline"></ion-icon>
        </button>

        <button class="btn-action">
          <ion-icon name="eye-outline"></ion-icon>
        </button>
{/*
        <button class="btn-action">
          <ion-icon name="repeat-outline"></ion-icon>
        </button>
  */}
        <button class="btn-action" onClick={addProductToBasket}>
          <ion-icon name="bag-add-outline"></ion-icon>
        </button>

      </div>

    </div>
   
    <div class="showcase-content">

      <a href="#" class="showcase-category">{category}</a>

     
      <Link to={`/product/${id}`}>	
        <h3 class="showcase-title">{title}</h3>
      </Link>

      <div class="showcase-rating">
    {Array(rating)
        .fill()
        .map((_, i) => (
            <ion-icon name="star"></ion-icon>
    ))}
    {Array(5 - rating)
        .fill()
        .map((_, i) => (
            <ion-icon name="star-outline"></ion-icon>
    ))}
</div>

      <div class="price-box">
        <p class="price">{price}   <small>€</small></p>
        <del>{oldPrice}   <small>€</small></del>
      </div>

    </div>

  </div>
  );
}

export default Product;