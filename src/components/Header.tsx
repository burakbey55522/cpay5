import React from 'react';
import { DollarSign, Menu, X, Globe, Shield } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-emerald-100 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 p-3 rounded-2xl shadow-lg">
                <DollarSign className="h-8 w-8 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>
            <div>
              <span className="text-2xl lg:text-3xl font-black text-gray-900 tracking-tight">TaskEarn</span>
              <div className="hidden sm:flex items-center space-x-2 mt-1">
                <div className="flex items-center space-x-1 bg-emerald-50 px-2 py-1 rounded-full">
                  <Globe className="h-3 w-3 text-emerald-600" />
                  <span className="text-xs font-bold text-emerald-600">GLOBAL</span>
                </div>
                <div className="flex items-center space-x-1 bg-blue-50 px-2 py-1 rounded-full">
                  <Shield className="h-3 w-3 text-blue-600" />
                  <span className="text-xs font-bold text-blue-600">SECURE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-emerald-600 transition-colors font-semibold">
              Sign In
            </button>
            <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-2.5 lg:px-8 lg:py-3 rounded-xl hover:from-emerald-600 hover:to-emerald-700 transition-all duration-200 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Sign Up
            </button>
          </div>

          {/* Mobile Auth Buttons - Always Visible */}
          <div className="flex lg:hidden items-center space-x-2">
            <button className="text-gray-700 hover:text-emerald-600 transition-colors font-semibold text-sm px-3 py-2">
              Sign In
            </button>
            <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-4 py-2 rounded-lg hover:from-emerald-600 hover:to-emerald-700 transition-all duration-200 font-bold text-sm shadow-lg">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;