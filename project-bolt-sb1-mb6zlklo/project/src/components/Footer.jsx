import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">À propos</h3>
            <p className="text-gray-300">
              Découvrez le paradis sur terre avec nos plages magnifiques et nos services exceptionnels.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-300">Email: contact@paradise-beach.com</p>
            <p className="text-gray-300">Tél: +33 1 23 45 67 89</p>
          </div>
          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold mb-4">Suivez-nous</h3>
            <div className="flex justify-center md:justify-end space-x-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                className="hover:text-blue-400 transition-colors transform hover:scale-110">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                className="hover:text-blue-400 transition-colors transform hover:scale-110">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                className="hover:text-pink-400 transition-colors transform hover:scale-110">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                className="hover:text-blue-400 transition-colors transform hover:scale-110">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-300 flex items-center justify-center">
            Fait avec <FaHeart className="text-red-500 mx-2" /> par Paradise Beach &copy; 2023
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;