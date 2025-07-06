import React from 'react';
import { DollarSign, Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        
        {/* Mobile Layout */}
        <div className="block md:hidden">
          {/* Links Grid - Mobile */}
          <div className="grid grid-cols-3 gap-x-8 gap-y-4 mb-8">
            {/* About Column */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-3">About</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-xs text-gray-300 hover:text-orange-400 transition-colors">FAQ</a></li>
                <li><a href="#" className="text-xs text-gray-300 hover:text-orange-400 transition-colors">Support</a></li>
                <li><a href="#" className="text-xs text-gray-300 hover:text-orange-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-xs text-gray-300 hover:text-orange-400 transition-colors">Terms of Service</a></li>
              </ul>
            </div>

            {/* Services Column */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-3">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-xs text-gray-300 hover:text-orange-400 transition-colors">Advertise</a></li>
                <li><a href="#" className="text-xs text-gray-300 hover:text-orange-400 transition-colors">Leaderboard</a></li>
                <li><a href="#" className="text-xs text-gray-300 hover:text-orange-400 transition-colors">Affiliate</a></li>
              </ul>
            </div>

            {/* Info Column */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-3">Info</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-xs text-gray-300 hover:text-orange-400 transition-colors">Forum</a></li>
                <li><a href="#" className="text-xs text-gray-300 hover:text-orange-400 transition-colors">Testimonials</a></li>
                <li><a href="#" className="text-xs text-gray-300 hover:text-orange-400 transition-colors">Live Cashout</a></li>
              </ul>
            </div>
          </div>

          {/* Logo Section - Mobile */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="bg-gradient-to-br from-orange-400 to-orange-600 p-2 rounded-xl">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">coinpayu</span>
            </div>
          </div>

          {/* Social Media Icons - Mobile */}
          <div className="flex justify-center space-x-3 mb-6">
            <a href="#" className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-all duration-300">
              <span className="text-white text-sm">💬</span>
            </a>
            <a href="#" className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-all duration-300">
              <Twitter className="h-4 w-4 text-white" />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-all duration-300">
              <span className="text-white text-sm">📱</span>
            </a>
            <a href="#" className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-all duration-300">
              <Facebook className="h-4 w-4 text-white" />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-all duration-300">
              <Youtube className="h-4 w-4 text-white" />
            </a>
          </div>

          {/* App Download - Mobile */}
          <div className="text-center mb-6">
            <a href="#" className="inline-block hover:opacity-80 transition-opacity">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png" 
                alt="Get it on Google Play" 
                className="h-10"
              />
            </a>
          </div>

          {/* Copyright - Mobile */}
          <div className="text-center">
            <p className="text-xs text-gray-400">
              © 2019-2025 Agrand Limited. All rights reserved.
            </p>
          </div>
        </div>

        {/* Desktop Layout */}
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
          </div>

          {/* About Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">About</h3>
            <ul className="grid grid-cols-2 gap-2">
              <li><a href="#" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium text-sm md:text-base">About Us</a></li>
              <li><a href="#" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium text-sm md:text-base">FAQ</a></li>
              <li><a href="#" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium text-sm md:text-base">Support</a></li>
              <li><a href="#" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium text-sm md:text-base">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium text-sm md:text-base">Terms of Service</a></li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Services</h3>
            <ul className="grid grid-cols-2 gap-2">
              <li><a href="#" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium text-sm md:text-base">Advertise</a></li>
              <li><a href="#" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium text-sm md:text-base">Leaderboard</a></li>
              <li><a href="#" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium text-sm md:text-base">Affiliate</a></li>
              <li><a href="#" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium text-sm md:text-base">API</a></li>
              <li><a href="#" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium text-sm md:text-base">Business</a></li>
            </ul>
          </div>

          {/* Info Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Info</h3>
            <ul className="grid grid-cols-2 gap-2">
              <li><a href="#" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium text-sm md:text-base">Forum</a></li>
              <li><a href="#" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium text-sm md:text-base">Testimonials</a></li>
              <li><a href="#" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium text-sm md:text-base">Live Cashout</a></li>
              <li><a href="#" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium text-sm md:text-base">Success Stories</a></li>
              <li><a href="#" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-medium text-sm md:text-base">Help Center</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section - Desktop */}
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