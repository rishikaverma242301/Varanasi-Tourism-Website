import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-yellow-100 shadow-md sticky top-0 z-50 overflow-x-hidden">
      <div className="max-w-[1280px] mx-auto py-3 px-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/rishi.png" alt="Logo" className="w-14 h-12" />
          <span className="text-2xl font-bold text-yellow-900">Varanasi Tourism</span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-yellow-900 font-medium">
          <li><a href="/" className="hover:text-yellow-600 transition">Home</a></li>
          <li><a href="/journey" className="hover:text-yellow-600 transition">Journey To Kashi</a></li>
          <li><a href="/culture" className="hover:text-yellow-600 transition">Culture</a></li>
            <li><a href="/excursions" className="hover:text-yellow-600 transition">Excursions</a></li>
          <li><a href="/stay" className="hover:text-yellow-600 transition">Stay</a></li>
          <li><a href="/contact" className="hover:text-yellow-600 transition">Contact</a></li>
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X className="w-6 h-6 text-yellow-900" /> : <Menu className="w-6 h-6 text-yellow-900" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <ul className="md:hidden bg-yellow-100 px-4 py-6 space-y-4 text-yellow-900 font-medium">
          <li><a href="/" onClick={toggleMenu}>Home</a></li>
          <li><a href="/places" onClick={toggleMenu}>Journey To kashis</a></li>
          <li><a href="/culture" onClick={toggleMenu}>Culture</a></li>
          <li><a href="/excursions" onClick={toggleMenu}>Excursions</a></li>
          <li><a href="/stay" onClick={toggleMenu}>Stay</a></li>
          <li><a href="/contact" onClick={toggleMenu}>Contact</a></li>
           </ul>
      )}
    </nav>
  );
};

export default Navbar;
