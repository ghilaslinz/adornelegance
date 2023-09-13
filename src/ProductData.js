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
    },
];

export default productData;

