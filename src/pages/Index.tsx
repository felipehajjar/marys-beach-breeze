
import { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import TestimonialCard from '@/components/TestimonialCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { products, testimonials, banners } from '@/data/products';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  const featuredProducts = products.filter(product => product.featured);
  
  return (
    <div>
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <Hero banner={banners[0]} />
        
        {/* Featured Products Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2 text-ocean-dark">Featured Products</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover our most popular beachwear selections, designed for style and comfort.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {featuredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button asChild className="bg-ocean hover:bg-ocean-dark text-white">
                <Link to="/products">View All Products</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-ocean-dark">Stylish Beachwear for Every Occasion</h2>
                <p className="text-gray-600 mb-6">
                  At Mary's Beachwear, we believe that beach days should be both stylish and comfortable. 
                  Our collection features high-quality swimwear and accessories designed to make you 
                  look and feel amazing by the ocean or poolside.
                </p>
                <p className="text-gray-600 mb-6">
                  From trendy bikinis to elegant one-pieces, casual cover-ups to essential beach accessories, 
                  our products are crafted with attention to detail and made from eco-friendly materials.
                </p>
                <Button asChild variant="outline" className="border-ocean text-ocean hover:bg-ocean hover:text-white">
                  <Link to="/about">Read Our Story</Link>
                </Button>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1520513027453-4cfd581a7e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Beach scene" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16 bg-sand-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2 text-ocean-dark">What Our Customers Say</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Read about experiences from our satisfied beachwear enthusiasts.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map(testimonial => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Instagram Feed Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2 text-ocean-dark">Follow Us on Instagram</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                @marysbeachwear
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {/* Mocked Instagram feed images */}
              {[...Array(6)].map((_, i) => (
                <div key={i} className="aspect-square overflow-hidden">
                  <img 
                    src={`https://source.unsplash.com/collection/1270951/300x300?sig=${i}`} 
                    alt={`Instagram post ${i}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 font-montserrat text-ocean hover:text-ocean-dark transition-colors"
              >
                <span>View More on Instagram</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
