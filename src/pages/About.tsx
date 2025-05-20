
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div>
      <Navbar />
      
      <div className="bg-ocean-light py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">About Us</h1>
        </div>
      </div>
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-ocean-dark">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Mary's Beachwear began as a passion project in 2018, when our founder Mary started creating handmade 
              swimwear for herself and her friends. What began as a hobby quickly grew into a small business
              as demand for her unique designs increased.
            </p>
            <p className="text-gray-700 mb-4">
              Initially selling only through Instagram, Mary's designs gained popularity for their quality, 
              comfort, and eye-catching patterns. Today, we're proud to offer a full range of beachwear 
              products, from swimsuits to accessories, all maintaining the quality and attention to detail 
              that Mary's designs became known for.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <img 
              src="https://images.unsplash.com/photo-1596178060810-72f53ce9a65c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Beach scene with models"
              className="rounded-lg shadow-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Beachwear fashion"
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-ocean-dark">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              At Mary's Beachwear, we believe that everyone deserves to feel confident and comfortable at the beach 
              or by the pool. Our mission is to create high-quality beachwear that not only looks great but is 
              also comfortable, durable, and made with respect for the environment.
            </p>
            <p className="text-gray-700">
              We're committed to:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4 text-gray-700 space-y-2">
              <li>Using eco-friendly and sustainable materials whenever possible</li>
              <li>Ensuring fair working conditions throughout our supply chain</li>
              <li>Creating designs that celebrate different body types</li>
              <li>Providing exceptional customer service</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4 text-ocean-dark">Quality Promise</h2>
            <p className="text-gray-700 mb-4">
              We stand behind the quality of each item we sell. All our products undergo rigorous quality checks 
              to ensure they meet our standards for durability, comfort, and appearance. We believe in creating 
              beachwear that can be enjoyed for many seasons, not just a single summer.
            </p>
            <p className="text-gray-700">
              Thank you for supporting our small business. We hope our products help make your beach days even more special!
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
