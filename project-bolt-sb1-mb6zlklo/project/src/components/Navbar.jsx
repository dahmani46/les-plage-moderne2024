import React from 'react';
import { FaUmbrellaBeach } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-400 p-6 shadow-lg">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <FaUmbrellaBeach className="text-white text-3xl" />
            <span className="text-white text-2xl font-bold">Paradise Beach</span>
          </div>
          <ul className="flex space-x-8">
            <li>
              <a href="#" className="text-white hover:text-yellow-200 transition-colors text-lg font-medium">
                Accueil
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-yellow-200 transition-colors text-lg font-medium">
                À propos
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-yellow-200 transition-colors text-lg font-medium">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-yellow-200 transition-colors text-lg font-medium">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;