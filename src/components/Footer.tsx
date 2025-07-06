import React from 'react';
import { DollarSign, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-orange-400 to-orange-600 p-3 rounded-2xl shadow-lg">
                <DollarSign className="h-8 w-8 text-white" />
              </div>
              <span className="text-3xl font-bold text-white">TaskEarn</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              The world's leading platform for earning money through simple tasks. 
              Join millions of users earning extra income from home.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-sm border border-gray-600">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-sm border border-gray-600">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-sm border border-gray-600">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-sm border border-gray-600">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-sm border border-gray-600">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>

            {/* Dark Mode Toggle */}
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🌙</span>
              <span className="text-gray-400">Dark</span>
            </div>
          </div>

          {/* About Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">About</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">Support</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">Terms of Service</a></li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">Advertise</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">Leaderboard</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">Affiliate</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">API</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">Business</a></li>
            </ul>
          </div>

          {/* Info Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Info</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">Forum</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">Testimonials</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">Live Cashout</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">Success Stories</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">Help Center</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2019-2025 TaskEarn Limited. All rights reserved.
            </div>

            {/* App Download */}
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png" 
                  alt="Get it on Google Play" 
                  className="h-12"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;