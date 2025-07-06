import React from 'react';
import { DollarSign, Menu, X, Globe, Shield, Users } from 'lucide-react';

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
              <span className="text-3xl font-black text-gray-900 tracking-tight">TaskEarn</span>
              <div className="flex items-center space-x-2 mt-1">
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

          {/* Live Stats */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="text-center">
              <div className="text-2xl font-black text-emerald-600">$847K+</div>
              <div className="text-xs text-gray-500 font-medium">PAID OUT</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-blue-600">2.1M+</div>
              <div className="text-xs text-gray-500 font-medium">USERS</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-purple-600">850+</div>
              <div className="text-xs text-gray-500 font-medium">TASKS</div>
            </div>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-emerald-600 transition-colors font-semibold">
              Sign In
            </button>
            <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-3 rounded-xl hover:from-emerald-600 hover:to-emerald-700 transition-all duration-200 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Start Earning
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="text-center">
                <div className="text-lg font-black text-emerald-600">$847K+</div>
                <div className="text-xs text-gray-500">PAID</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-black text-blue-600">2.1M+</div>
                <div className="text-xs text-gray-500">USERS</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-black text-purple-600">850+</div>
                <div className="text-xs text-gray-500">TASKS</div>
              </div>
            </div>
            <button className="block w-full text-left px-3 py-2 text-gray-700 hover:text-emerald-600 font-semibold">
              Sign In
            </button>
            <button className="block w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-3 py-3 rounded-xl hover:from-emerald-600 hover:to-emerald-700 transition-all font-bold">
              Start Earning
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;