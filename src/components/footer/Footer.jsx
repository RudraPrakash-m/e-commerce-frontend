import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 mt-16 pt-10 pb-6 px-6">

      {/* TOP SECTION */}
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-10 max-w-6xl mx-auto">

        {/* BRAND INFO */}
        <div>
          <h2 className="text-2xl font-bold text-white">EStore</h2>
          <p className="mt-3 text-gray-400">
            Your one-stop shop for everything — fashion, electronics, home & more.
          </p>

          <div className="flex gap-4 mt-4 text-xl">
            <FaFacebook className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaYoutube className="hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><NavLink to="/" className="hover:text-white">Home</NavLink></li>
            <li><NavLink to="/deals" className="hover:text-white">Deals</NavLink></li>
            <li><NavLink to="/wishlist" className="hover:text-white">Wishlist</NavLink></li>
            <li><NavLink to="/cart" className="hover:text-white">Cart</NavLink></li>
          </ul>
        </div>

        {/* CATEGORIES */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Categories</h3>
          <ul className="space-y-2">
            <li><NavLink to="/cat/men" className="hover:text-white">Men</NavLink></li>
            <li><NavLink to="/cat/women" className="hover:text-white">Women</NavLink></li>
            <li><NavLink to="/cat/electronics" className="hover:text-white">Electronics</NavLink></li>
            <li><NavLink to="/cat/home" className="hover:text-white">Home Appliances</NavLink></li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
          <ul className="space-y-2">
            <li><a className="hover:text-white">Contact Us</a></li>
            <li><a className="hover:text-white">Returns</a></li>
            <li><a className="hover:text-white">Privacy Policy</a></li>
            <li><a className="hover:text-white">Terms & Conditions</a></li>
          </ul>
        </div>

      </div>

      {/* COPYRIGHT SECTION */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-500">
        © {new Date().getFullYear()} <span className="text-gray-300">EStore</span>.  
        All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
