import { v4 as uuid } from 'uuid';

const productData = [
    {
        id: uuid(),
       stripeProductId: 'prod_O123HUZSl1CI4D',
        category: "jacket",
        title: "Mens Winter Leathers Jackets",
        price: "48",
        oldPrice: "75.00",
        rating: 3,
        imageFirst: "/assets/images/products/jacket-3.jpg",
        imageSecond: "/assets/images/products/jacket-4.jpg",
        badge: "15%",
        badgeClass: "showcase-badge",
        description : "Crafted for comfort and style: Men's winter leather jackets, blending rugged durability with sophisticated elegance for the chilly months"
    },
    {
        id: uuid(),
        category: "shirt",
        title: "Pure Garment Dyed Cotton Shirt",
        price: "45.00",
        oldPrice: "56.00",
        rating: 3,
        imageFirst: "/assets/images/products/shirt-1.jpg",
        imageSecond: "/assets/images/products/shirt-2.jpg",
        badge: "sale",
        badgeClass: "showcase-badge angle black",
        description :"Experience timeless elegance: Pure garment-dyed cotton shirts offering breathable comfort and a unique color finish."
    },
    {
        id: uuid(),
        category: "Jacket",
        title: "MEN Yarn Fleece Full-Zip Jacket",
        price: "58.00",
        oldPrice: "65.00",
        rating: 3,
        imageFirst: "/assets/images/products/jacket-5.jpg",
        imageSecond: "/assets/images/products/jacket-6.jpg",
        badge: "",
        badgeClass: "",
        description :"Stay cozy and sharp: Men's yarn fleece full-zip jacket, perfect for chilly days with a blend of warmth and modern style."
    },
    {
        id: uuid(),
        category: "skirt",
        title: "Black Floral Wrap Midi Skirt",
        price: "25.00",
        oldPrice: "35.00",
        rating: 5,
        imageFirst: "/assets/images/products/clothes-3.jpg",
        imageSecond: "/assets/images/products/clothes-4.jpg",
        badge: "new",
        badgeClass: "showcase-badge angle pink",
        description :"Flow with grace: Black floral wrap midi skirt, melding contemporary design with a touch of romantic elegance."
    },
    {
        id: uuid(),
        category: "casual",
        title: "Casual Men's Brown shoes",
        price: "99.00",
        oldPrice: "105.00",
        rating: 5,
        imageFirst: "/assets/images/products/shoe-2.jpg",
        imageSecond: "/assets/images/products/shoe-2_1.jpg",
        badge: "",
        badgeClass: "",
        description :
        "Step in style: Casual men's brown shoes, seamlessly combining comfort with classic sophistication."
    },
    {
        id: uuid(),
        category: "watches",
        title: "Pocket Watch Leather Pouch",
        price: "150.00",
        oldPrice: "170.00",
        rating: 3,
        imageFirst: "/assets/images/products/watch-3.jpg",
        imageSecond: "/assets/images/products/watch-4.jpg",
        badge: "sale",
        badgeClass: "showcase-badge angle black",
        description :
        "Timeless protection: Leather pouch for pocket watches, merging vintage charm with modern-day durability."
    },
    {
        id: uuid(),
        category: "watches",
        title: "Smart watche Vital Plus",
        price: "100.00",
        oldPrice: "120.00",
        rating: 4,
        imageFirst: "/assets/images/products/watch-1.jpg",
        imageSecond: "/assets/images/products/watch-2.jpg",
        badge: "",
        badgeClass: "",
        description :"Tech meets style: 'Vital Plus' smartwatch, the epitome of modern functionality and sleek design."
    },
    {
        id: uuid(),
        category: "party wear",
        title: "Womens Party Wear Shoes",
        price: "30.00",
        oldPrice: "25.00",
        rating: 3,
        imageFirst: "/assets/images/products/party-wear-1.jpg",
        imageSecond: "/assets/images/products/party-wear-2.jpg",
        badge: "sale",
        badgeClass: "showcase-badge angle black",
        description :
        "Dance the night away: Women's party wear shoes, blending dazzling design with chic comfort."
    },
    {
        id: uuid(),
        category: "jacket",
        title: "Mens Winter Leathers Jackets",
        price: "32.00",
        oldPrice: "",
        rating: 4,
        imageFirst: "/assets/images/products/jacket-1.jpg",
        imageSecond: "/assets/images/products/jacket-2.jpg",
        badge: "",
        badgeClass: "",
        description :"Bold distinction: Angle black 'showcase-badge', a statement of prestige and unique craftsmanship."
    },
    {
        id: uuid(),
        category: "sports",
        title: "Trekking & Running Shoes - black",
        price: "58.00",
        oldPrice: "64.00",
        rating: 3,
        imageFirst: "/assets/images/products/sports-2.jpg",
        imageSecond: "/assets/images/products/sports-4.jpg",
        badge: "sale",
        badgeClass: "showcase-badge angle black",
        description :"Conquer terrains with ease: Black trekking & running shoes, designed for ultimate performance and style."
    },
    {
        id: uuid(),
        category: "formal",
        title: "Men's Leather Formal Wear shoes",
        price: "50.00",
        oldPrice: "65.00",
        rating: 4,
        imageFirst: "/assets/images/products/shoe-1.jpg",
        imageSecond: "/assets/images/products/shoe-1_1.jpg",
        badge: "sale",
        badgeClass: "showcase-badge angle black",
        description :"Elevate every step: Men's leather formal shoes, exuding classic elegance and unmatched craftsmanship."
    },
    {
        id: uuid(),
        category: "shorts",
        title: "Better Basics French Terry Sweatshorts",
        price: "50.00",
        oldPrice: "65.00",
        rating: 3,
        imageFirst: "/assets/images/products/shorts-1.jpg",
        imageSecond: "/assets/images/products/shorts-2.jpg",
        badge: "sale",
        badgeClass: "showcase-badge angle black",
        description : "Casual comfort redefined: 'Better Basics' French Terry sweatshorts, offering softness and versatile style for everyday wear."
    },
];

export default productData;


