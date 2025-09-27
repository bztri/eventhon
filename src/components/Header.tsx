import React, { useState } from 'react';
import { Menu, X, Brain, Sparkles, User, LogIn } from 'lucide-react';

interface HeaderProps {
  isAuthenticated?: boolean;
  userRole?: string;
  onLogin?: () => void;
  onRegister?: () => void;
}

export default function Header({ isAuthenticated = false, userRole, onLogin, onRegister }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Brain className="h-8 w-8 text-indigo-600" />
              <Sparkles className="h-4 w-4 text-purple-500 absolute -top-1 -right-1" />
            </div>
            <span className="text-xl font-bold text-gray-900">Eventhon</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-indigo-600 transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-indigo-600 transition-colors">How it Works</a>
            <a href="#pricing" className="text-gray-600 hover:text-indigo-600 transition-colors">Pricing</a>
            <a href="#about" className="text-gray-600 hover:text-indigo-600 transition-colors">About</a>
          </nav>

          {/* Auth Buttons */}
          {!isAuthenticated ? (
            <div className="hidden md:flex items-center space-x-4">
              <button 
                onClick={onLogin}
                className="text-gray-600 hover:text-indigo-600 transition-colors flex items-center space-x-1"
              >
                <LogIn className="h-4 w-4" />
                <span>Sign In</span>
              </button>
              <button 
                onClick={onRegister}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-indigo-500/25"
              >
                Get Started
              </button>
            </div>
          ) : (
            <div className="hidden md:flex items-center space-x-4">
              <span className="text-sm text-gray-600">{userRole}</span>
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-white" />
              </div>
            </div>
          )}

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-600 hover:text-indigo-600 transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-indigo-600 transition-colors">How it Works</a>
              <a href="#pricing" className="text-gray-600 hover:text-indigo-600 transition-colors">Pricing</a>
              <a href="#about" className="text-gray-600 hover:text-indigo-600 transition-colors">About</a>
              {!isAuthenticated && (
                <div className="pt-4 border-t border-gray-200 flex flex-col space-y-2">
                  <button 
                    onClick={onLogin}
                    className="text-gray-600 hover:text-indigo-600 transition-colors text-left"
                  >
                    Sign In
                  </button>
                  <button 
                    onClick={onRegister}
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all text-left"
                  >
                    Get Started
                  </button>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}