
import { useState } from 'react';
import { products } from '@/data/products';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductGrid from '@/components/ProductGrid';

const Products = () => {
  return (
    <div>
      <Navbar />
      
      <div className="bg-ocean-light py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-2">Our Products</h1>
          <p className="text-center text-gray-700 max-w-2xl mx-auto">
            Browse our collection of quality beachwear designed for comfort and style.
          </p>
        </div>
      </div>
      
      <ProductGrid products={products} />
      
      <Footer />
    </div>
  );
};

export default Products;
