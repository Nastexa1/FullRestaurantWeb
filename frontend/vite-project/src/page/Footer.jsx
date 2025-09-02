import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-yellow-600 text-white mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h1 className="text-2xl font-bold mb-4">Zara Restaurant</h1>
          <p className="text-gray-100">
            Experience the best flavors, fresh ingredients, and delicious meals. 
            Join us for a delightful dining experience.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-yellow-300 transition">Home</a></li>
            <li><a href="/about" className="hover:text-yellow-300 transition">About</a></li>
            <li><a href="/menu" className="hover:text-yellow-300 transition">Menu</a></li>
            <li><a href="/blog" className="hover:text-yellow-300 transition">Blog</a></li>
            <li><a href="/contact" className="hover:text-yellow-300 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <p>📍 KM4, Mogadishu, Somalia</p>
          <p>📞 +252 61 234 5678</p>
          <p>✉️ info@zararestaurant.com</p>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <div className="flex gap-4 text-lg">
            <a href="#" className="hover:text-yellow-300 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-yellow-300 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-yellow-300 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-yellow-300 transition"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-yellow-700 text-center py-4 mt-6">
        <p className="text-white font-semibold">&copy; 2025 Zara Restaurant. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
