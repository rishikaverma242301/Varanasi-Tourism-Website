import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, Facebook, Instagram ,Linkedin, X as Twitter } from "lucide-react"; // Optional: You can replace with react-icons

const Footer = () => {
  return (
    <footer className="bg-orange-300 text-black px-6 py-10 md:px-20 font-roboto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Column 1: Company Info */}
        <div>
          <h3 className="text-orange-800 font-bold text-lg">
            Mysterious Place of<br />Varanasi
          </h3>
          <p className="text-sm text-gray-600 mt-3">
            Made using clean, non-toxic ingredients,<br />
            our products are designed for everyone.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            <li className="flex items-center gap-2">
              <MapPin size={16} /> Address: No 40 Baria, US
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> Email: XYZ@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> Phone: (+123) 938 9832
            </li>
          </ul>
          <div className="flex gap-4 mt-4">
              <a href="#" className="bg-orange-500 p-2 rounded-full">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-orange-500 p-2 rounded-full">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-orange-500 p-2 rounded-full">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-orange-500 p-2 rounded-full">
                <Linkedin size={18} />
              </a>

          </div>
        </div>

        {/* Column 2 & 3: Scrollable links section */}
        <div className="md:col-span-2 max-h-48 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-300">
          <div className="mb-6">
            <h4 className="font-bold text-sm mb-3">QUICK LINKS</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/journey" className="hover:text-white">Journey To Kashi</Link></li>
              <li><Link to="/culture" className="hover:text-white">Culture</Link></li>
              <li><Link to="/Excursions" className="hover:text-white">Excursions</Link></li>
              <li><Link to="/stay" className="hover:text-white">Stay</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              {/* Add more if needed */}
            </ul>
          </div>
        </div>

        {/* Column 4: Subscribe */}
        <div className="px-10">
          <h4 className="font-bold text-sm mb-3 ">SUBSCRIBE</h4>
          <p className="text-sm text-gray-600 mb-4">
            You can always be up to date with our company news
          </p>
          <div className="flex items-center bg-gray-800 rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Your email"
              className="bg-transparent px-4 py-2 text-sm outline-none w-full text-white"
            />
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 text-sm text-white font-medium">
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-xs text-gray-700">
        Copyright © 2025 XYZ. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
