import React from 'react';
import { DollarSign, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Company Info */}
          <div className="space-y-4 md:space-y-6 col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-orange-400 to-orange-600 p-2 md:p-3 rounded-2xl shadow-lg">
                <DollarSign className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </div>
              <span className="text-2xl md:text-3xl font-bold text-gray-900">TaskEarn</span>
            </div>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              The world's leading platform for earning money through simple tasks. 
              Join millions of users earning extra income from home.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-3 md:space-x-4">
              <a href="#" className="w-8 h-8 md:w-10 md:h-10 bg-gray-400 rounded-lg flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-sm border border-gray-300">
                <Facebook className="h-4 w-4 md:h-5 md:w-5 text-white" />
              </a>
              <a href="#" className="w-8 h-8 md:w-10 md:h-10 bg-gray-400 rounded-lg flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-sm border border-gray-300">
                <Twitter className="h-4 w-4 md:h-5 md:w-5 text-white" />
              </a>
              <a href="#" className="w-8 h-8 md:w-10 md:h-10 bg-gray-400 rounded-lg flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-sm border border-gray-300">
                <Instagram className="h-4 w-4 md:h-5 md:w-5 text-white" />
              </a>
              <a href="#" className="w-8 h-8 md:w-10 md:h-10 bg-gray-400 rounded-lg flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-sm border border-gray-300">
                <Youtube className="h-4 w-4 md:h-5 md:w-5 text-white" />
              </a>
              <a href="#" className="w-8 h-8 md:w-10 md:h-10 bg-gray-400 rounded-lg flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-sm border border-gray-300">
                <Linkedin className="h-4 w-4 md:h-5 md:w-5 text-white" />
              </a>
            </div>

            {/* Dark Mode Toggle */}
            <div className="flex items-center space-x-2">
              <span className="text-xl md:text-2xl">🌙</span>
              <span className="text-gray-700 text-sm md:text-base">Dark</span>
            </div>
          </div>

          {/* About Links */}
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-base md:text-lg font-semibold text-gray-900">About</h3>
            <ul className="space-y-2 md:space-y-3">
              <li><a href="#" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium text-sm md:text-base">About Us</a></li>
              <li><a href="#" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium text-sm md:text-base">FAQ</a></li>
              <li><a href="#" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium text-sm md:text-base">Support</a></li>
              <li><a href="#" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium text-sm md:text-base">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium text-sm md:text-base">Terms of Service</a></li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-base md:text-lg font-semibold text-gray-900">Services</h3>
            <ul className="space-y-2 md:space-y-3">
              <li><a href="#" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium text-sm md:text-base">Advertise</a></li>
              <li><a href="#" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium text-sm md:text-base">Leaderboard</a></li>
              <li><a href="#" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium text-sm md:text-base">Affiliate</a></li>
              <li><a href="#" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium text-sm md:text-base">API</a></li>
              <li><a href="#" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium text-sm md:text-base">Business</a></li>
            </ul>
          </div>

          {/* Info Links */}
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-base md:text-lg font-semibold text-gray-900">Info</h3>
            <ul className="space-y-2 md:space-y-3">
              <li><a href="#" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium text-sm md:text-base">Forum</a></li>
              <li><a href="#" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium text-sm md:text-base">Testimonials</a></li>
              <li><a href="#" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium text-sm md:text-base">Live Cashout</a></li>
              <li><a href="#" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium text-sm md:text-base">Success Stories</a></li>
              <li><a href="#" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium text-sm md:text-base">Help Center</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-400 mt-8 md:mt-12 pt-6 md:pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="text-gray-700 text-xs md:text-sm font-medium text-center lg:text-left">
              © 2019-2025 TaskEarn Limited. All rights reserved.
            </div>

            {/* App Download */}
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png" 
                  alt="Get it on Google Play" 
                  className="h-8 md:h-12"
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