import React from 'react'
import NewProducts from './NewProducts'
import DealofDay from './DealofDay'
import Bestsellers from './Bestsellers'

function Main() {
  return (
  
    <main>

       
    <div class="banner">

      <div class="container">

        <div class="slider-container has-scrollbar">

          <div class="slider-item">

            <img src="assets/images/banner-1.jpg" alt="women's latest fashion sale" class="banner-img" />

            <div class="banner-content">

              <p class="banner-subtitle">Trending item</p>

              <h2 class="banner-title">Women's latest fashion sale</h2>

              <p class="banner-text">
                starting at &dollar; <b>20</b>.00
              </p>

              <a href="#" class="banner-btn">Shop now</a>

            </div>

          </div>

          <div class="slider-item">

            <img src="assets/images/banner-2.jpg" alt="modern sunglasses" class="banner-img" />

            <div class="banner-content">

              <p class="banner-subtitle">Trending accessories</p>

              <h2 class="banner-title">Modern sunglasses</h2>

              <p class="banner-text">
                starting at &dollar; <b>15</b>.00
              </p>

              <a href="#" class="banner-btn">Shop now</a>

            </div>

          </div>

          <div class="slider-item">

            <img src="assets/images/banner-3.jpg" alt="new fashion summer sale" class="banner-img" />

            <div class="banner-content">

              <p class="banner-subtitle">Sale Offer</p>

              <h2 class="banner-title">New fashion summer sale</h2>

              <p class="banner-text">
                starting at &dollar; <b>29</b>.99
              </p>

              <a href="#" class="banner-btn">Shop now</a>

            </div>

          </div>

        </div>

      </div>

    </div>





   

  




  

    <div class="product-container">

      <div class="container">


       

        <div class="sidebar  has-scrollbar" data-mobile-menu>

       

          <div class="product-showcase">

            <h3 class="showcase-heading">best sellers</h3>

          <Bestsellers />

          </div>

        </div>



        <div class="product-box">

         

      



       

        <DealofDay />


         

          <div class="product-main">

            <h2 class="title">New Products</h2>
           
           <NewProducts />
           
          </div>

        </div>

      </div>

    </div>





   

    <div>

      <div class="container">

        <div class="testimonials-box">

        

          <div class="testimonial">

            <h2 class="title">testimonial</h2>

            <div class="testimonial-card">

              <img src="assets/images/testimonial-1.jpg" alt="alan doe" class="testimonial-banner" width="80" height="80" />

              <p class="testimonial-name">Jassa Singh</p>

              <p class="testimonial-title">CEO & Founder Invision</p>

              <img src="assets/images/icons/quotes.svg" alt="quotation" class="quotation-img" width="26" />

              <p class="testimonial-desc">
                
"Incredible selection, great prices, and speedy delivery—my go-to for stylish clothes!"
              </p>

            </div>

          </div>



         

          <div class="cta-container">

            <img src="assets/images/cta-banner.jpg" alt="summer collection" class="cta-banner" />

            <a href="#" class="cta-content">

              <p class="discount">25% Discount</p>

              <h2 class="cta-title">Summer collection</h2>

              <p class="cta-text">Starting @ $10</p>

              <button class="cta-btn">Shop now</button>

            </a>

          </div>



         

          <div class="service">

            <h2 class="title">Our Services</h2>

            <div class="service-container">

              <a href="#" class="service-item">

                <div class="service-icon">
                  <ion-icon name="boat-outline"></ion-icon>
                </div>

                <div class="service-content">

                  <h3 class="service-title">Worldwide Delivery</h3>
                  <p class="service-desc">For Order Over $100</p>

                </div>

              </a>

              <a href="#" class="service-item">
              
                <div class="service-icon">
                  <ion-icon name="rocket-outline"></ion-icon>
                </div>
              
                <div class="service-content">
              
                  <h3 class="service-title">Next Day delivery</h3>
                  <p class="service-desc">UK Orders Only</p>
              
                </div>
              
              </a>

              <a href="#" class="service-item">
              
                <div class="service-icon">
                  <ion-icon name="call-outline"></ion-icon>
                </div>
              
                <div class="service-content">
              
                  <h3 class="service-title">Best Online Support</h3>
                  <p class="service-desc">Hours: 8AM - 11PM</p>
              
                </div>
              
              </a>

              <a href="#" class="service-item">
              
                <div class="service-icon">
                  <ion-icon name="arrow-undo-outline"></ion-icon>
                </div>
              
                <div class="service-content">
              
                  <h3 class="service-title">Return Policy</h3>
                  <p class="service-desc">Easy & Free Return</p>
              
                </div>
              
              </a>

              <a href="#" class="service-item">
              
                <div class="service-icon">
                  <ion-icon name="ticket-outline"></ion-icon>
                </div>
              
                <div class="service-content">
              
                  <h3 class="service-title">30% money back</h3>
                  <p class="service-desc">For Order Over $100</p>
              
                </div>
              
              </a>

            </div>

          </div>

        </div>

      </div>

    </div>






    </main>


  )
}

export default Main