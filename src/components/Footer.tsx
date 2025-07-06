import React from 'react';
import { DollarSign, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        {/* Mobile Layout */}
        <div className="block md:hidden">
          {/* Mobile Grid - 3 columns */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {/* About Column */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-gray-900">About</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-xs text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium">FAQ</a></li>
                <li><a href="#" className="text-xs text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium">Support</a></li>
                <li><a href="#" className="text-xs text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium">Privacy Policy</a></li>
                <li><a href="#" className="text-xs text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium">Terms of Service</a></li>
              </ul>
            </div>

            {/* Services Column */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-gray-900">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-xs text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium">Advertise</a></li>
                <li><a href="#" className="text-xs text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium">Leaderboard</a></li>
                <li><a href="#" className="text-xs text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium">Affiliate</a></li>
                <li><a href="#" className="text-xs text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium">API</a></li>
              </ul>
            </div>

            {/* Info Column */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-gray-900">Info</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-xs text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium">Forum</a></li>
                <li><a href="#" className="text-xs text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium">Testimonials</a></li>
                <li><a href="#" className="text-xs text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium">Live Cashout</a></li>
                <li><a href="#" className="text-xs text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium">Success Stories</a></li>
              </ul>
            </div>
          </div>

          {/* Mobile Logo Section */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <div className="bg-gradient-to-br from-orange-400 to-orange-600 p-2 rounded-xl shadow-lg">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">coinpayu</span>
            </div>
          </div>

          {/* Mobile Social Media Icons */}
          <div className="flex justify-center space-x-3 mb-6">
            <a href="#" className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-all duration-300">
              <span className="text-white text-sm">💬</span>
            </a>
            <a href="#" className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-all duration-300">
              <span className="text-white text-sm">𝕏</span>
            </a>
            <a href="#" className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-all duration-300">
              <span className="text-white text-sm">📱</span>
            </a>
            <a href="#" className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-all duration-300">
              <Facebook className="h-4 w-4 text-white" />
            </a>
            <a href="#" className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-all duration-300">
              <Youtube className="h-4 w-4 text-white" />
            </a>
          </div>

          {/* Mobile App Download */}
          <div className="text-center mb-6">
            <a href="#" className="inline-block hover:opacity-80 transition-opacity">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png" 
                alt="Get it on Google Play" 
                className="h-10"
              />
            </a>
          </div>

          {/* Mobile Copyright */}
          <div className="text-center border-t border-gray-400 pt-4">
            <div className="text-gray-700 text-xs font-medium">
              © 2019-2025 Adgrand Limited. All rights reserved.
            </div>
          </div>
        </div>

        {/* Desktop Layout - Original */}
        <div className="hidden md:grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-orange-400 to-orange-600 p-3 rounded-2xl shadow-lg">
                <DollarSign className="h-8 w-8 text-white" />
              </div>
              <span className="text-3xl font-bold text-gray-900">TaskEarn</span>
            </div>
            <p className="text-gray-700 leading-relaxed">
              The world's leading platform for earning money through simple tasks. 
              Join millions of users earning extra income from home.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-400 rounded-lg flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-sm border border-gray-300">
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-400 rounded-lg flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-sm border border-gray-300">
                <Twitter className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-400 rounded-lg flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-sm border border-gray-300">
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-400 rounded-lg flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-sm border border-gray-300">
                <Youtube className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-400 rounded-lg flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-sm border border-gray-300">
                <Linkedin className="h-5 w-5 text-white" />
              </a>
            </div>

            {/* Dark Mode Toggle */}
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🌙</span>
              <span className="text-gray-700">Dark</span>
            </div>
          </div>

          {/* About Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">About</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium">About Us</a></li>
              <li><a href="#" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium">FAQ</a></li>
              <li><a href="#" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium">Support</a></li>
              <li><a href="#" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium">Terms of Service</a></li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium">Advertise</a></li>
              <li><a href="#" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium">Leaderboard</a></li>
              <li><a href="#" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium">Affiliate</a></li>
              <li><a href="#" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium">API</a></li>
              <li><a href="#" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium">Business</a></li>
            </ul>
          </div>

          {/* Info Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Info</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium">Forum</a></li>
              <li><a href="#" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium">Testimonials</a></li>
              <li><a href="#" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium">Live Cashout</a></li>
              <li><a href="#" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium">Success Stories</a></li>
              <li><a href="#" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium">Help Center</a></li>
            </ul>
          </div>
        </div>

        {/* Desktop Bottom Section */}
        <div className="hidden md:block border-t border-gray-400 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="text-gray-700 text-sm font-medium">
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