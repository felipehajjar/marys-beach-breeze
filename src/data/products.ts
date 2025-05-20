
import { Product, Testimonial, Banner } from '@/types';

export const products: Product[] = [
  {
    id: 1,
    name: "Summer Breeze Bikini",
    price: 59.99,
    description: "This gorgeous two-piece bikini features a tropical print with adjustable straps for the perfect fit. Made with eco-friendly, quick-drying fabric.",
    imageUrl: "https://images.unsplash.com/photo-1581309553233-52c88de8d842?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "bikini",
    featured: true
  },
  {
    id: 2,
    name: "Ocean Wave One-Piece",
    price: 79.99,
    description: "Elegant one-piece swimsuit with a flattering cutout design. The wave pattern is inspired by the ocean at sunset. Provides UV protection.",
    imageUrl: "https://images.unsplash.com/photo-1570363289161-ce41d91b021c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "one-piece",
    featured: true
  },
  {
    id: 3,
    name: "Beach Sarong Wrap",
    price: 34.99,
    description: "Lightweight and versatile sarong that can be styled multiple ways. Perfect as a beach cover-up or casual resort wear.",
    imageUrl: "https://images.unsplash.com/photo-1621375174247-754a5dab20b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "cover-up",
    featured: false
  },
  {
    id: 4,
    name: "Tropical Paradise Board Shorts",
    price: 45.99,
    description: "Comfortable board shorts with a vibrant tropical print. Features a quick-dry fabric and adjustable waistband.",
    imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "men",
    featured: true
  },
  {
    id: 5,
    name: "Sun Goddess Cover-Up",
    price: 49.99,
    description: "Elegant beach cover-up with intricate crochet detailing. Loose-fitting and perfect for throwing on after a swim.",
    imageUrl: "https://images.unsplash.com/photo-1612117189122-6b065b74f4bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "cover-up",
    featured: false
  },
  {
    id: 6,
    name: "Coastal Breeze Beach Hat",
    price: 29.99,
    description: "Wide-brimmed straw hat that provides excellent sun protection. Adorned with a decorative band for a touch of elegance.",
    imageUrl: "https://images.unsplash.com/photo-1534215754734-18e55d13e346?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "accessories",
    featured: false
  },
  {
    id: 7,
    name: "Surf's Up Rash Guard",
    price: 54.99,
    description: "Long-sleeve rash guard offering UPF 50+ protection. Perfect for surfing, paddleboarding, or any water activity.",
    imageUrl: "https://images.unsplash.com/photo-1606227868258-c5e3035e8d6b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "surf-wear",
    featured: true
  },
  {
    id: 8,
    name: "Beach Volleyball Shorts",
    price: 39.99,
    description: "Athletic shorts designed for beach volleyball and other active beach sports. Stretchy, quick-drying fabric.",
    imageUrl: "https://images.unsplash.com/photo-1606902965551-dce093cda6e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "active-wear",
    featured: false
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah M.",
    content: "The quality of Mary's swimwear is outstanding! I've received so many compliments on my Ocean Wave one-piece. Will definitely be ordering more!",
    rating: 5
  },
  {
    id: 2,
    name: "James L.",
    content: "The board shorts are perfect - great fit, quick-drying, and the designs are much better than anything I've found in stores.",
    rating: 5
  },
  {
    id: 3,
    name: "Emma R.",
    content: "I love the Beach Sarong! It's so versatile and the fabric is amazing quality. Shipping was fast too!",
    rating: 4
  }
];

export const banners: Banner[] = [
  {
    id: 1,
    title: "Summer Collection 2025",
    subtitle: "Dive into our newest styles for the perfect beach day",
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
    buttonText: "Shop Now",
    buttonLink: "/products"
  }
];

export const categories = [
  { name: "All", value: "all" },
  { name: "Bikinis", value: "bikini" },
  { name: "One-Piece", value: "one-piece" },
  { name: "Cover-Ups", value: "cover-up" },
  { name: "Men's Wear", value: "men" },
  { name: "Accessories", value: "accessories" },
  { name: "Surf Wear", value: "surf-wear" },
  { name: "Active Wear", value: "active-wear" }
];
