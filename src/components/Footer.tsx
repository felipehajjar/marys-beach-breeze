
import { Link } from 'react-router-dom';
import { Facebook, Instagram, WhatsApp } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-ocean-dark text-white">
      <div className="wave-divider bg-white">
        {/* Wave SVG divider */}
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2">
              <span className="font-montserrat font-bold text-2xl">Mary's</span>
              <span className="font-montserrat font-light text-2xl">Beachwear</span>
            </Link>
            <p className="mt-4 text-sm">
              Quality beachwear for every occasion. Made with love and care for the environment.
            </p>
          </div>
          
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-sand transition-colors">Home</Link></li>
              <li><Link to="/products" className="hover:text-sand transition-colors">Products</Link></li>
              <li><Link to="/about" className="hover:text-sand transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-sand transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-sand transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-sand transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:text-sand transition-colors">
                <WhatsApp size={24} />
              </a>
            </div>
            <p className="text-sm">
              Questions? Contact us at<br />
              <a href="mailto:info@marysbeachwear.com" className="hover:text-sand transition-colors">info@marysbeachwear.com</a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} Mary's Beachwear. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
