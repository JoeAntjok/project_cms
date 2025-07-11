import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, MessageCircle, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-white">The Doors Agency</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              We're a digital marketing agency that specializes in social media management, 
              paid advertising, and marketplace optimization. Let us help you unlock your brand's potential.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-electric-violet-400 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-electric-violet-400 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-electric-violet-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-electric-violet-400 transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-electric-violet-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-electric-violet-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-electric-violet-400 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-electric-violet-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-electric-violet-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail size={16} className="mr-2 text-electric-violet-400" />
                <span className="text-gray-300">hello@doorsagency.com</span>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-2 text-electric-violet-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MessageCircle size={16} className="mr-2 text-electric-violet-400" />
                <span className="text-gray-300">WhatsApp Chat</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 The Doors Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;