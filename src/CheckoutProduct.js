import React from 'react'

function CheckoutProduct({title, imageFirst,imageSecond, price, quantity}) {
  return (
    <div>
          <td>
                            <td scope="row" class="border-0">
                            <div class="p-2">
                            
                            <div class="product-grid">
                            <div class="showcase" style={{width:'100px'}}>
                            <div class="showcase-banner">
                            <img src={imageFirst} alt="" width="300" class="product-img default" />
                         <img src={imageSecond} alt="" width="300" class="product-img hover" />
                         
                            </div>
                            
                            </div>
                            <td class="ms-3 d-inline-block align-middle mt-3" style={{width:'300px'}} >
                                <h5 class="mb-0"> <a href="#" class="text-dark d-inline-block align-middle">{title}</a></h5>
                            </td>
                            
                                
                            </div>
                            
                            </div>
                            </td>
                           
                            <td class="border-0 align-middle"><strong>{price}</strong></td>
                            <td class="border-0 align-middle"><strong>{quantity}</strong></td>
                            <td class="border-0 align-middle"><a href="#" class="text-dark"><i class="bi bi-trash"></i></a></td>
           </td>

    

           
    </div>
  )
}

export default CheckoutProduct