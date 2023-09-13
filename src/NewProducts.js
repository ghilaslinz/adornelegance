import React from 'react'
import Product from './Product';
import productData from './ProductData';
import { v4 as uuid } from 'uuid';
function NewProducts() {
  
  return (
    <div class="product-grid">
    {productData.map((product) => (
        <Product 
            key={product.id}
            id={product.id}
            category={product.category}
            title={product.title}
            price={product.price}
            oldPrice={product.oldPrice}
            rating={product.rating}
            imageFirst={product.imageFirst}
            imageSecond={product.imageSecond}
            badge={product.badge}
            badgeClass={product.badgeClass}
        />
    ))}
</div>
  )
}

export default NewProducts