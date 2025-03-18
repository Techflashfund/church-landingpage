'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Premium Header Component
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-30 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="h-16 w-16 mr-4">
            <img src="/sdsdsd-removebg-preview.png" alt="St. Joseph Church Logo" className="h-full w-full object-contain" />
          </div>
          <div>
            <h1 className={`text-2xl font-serif font-bold ${isScrolled ? 'text-gray-800' : 'text-white drop-shadow-md'}`}>St. Joseph Church</h1>
            <p className={`text-sm font-light tracking-wider ${isScrolled ? 'text-gray-600' : 'text-white drop-shadow-md'}`}>PUNKUNNAM</p>
          </div>
        </div>
        
        <nav className="hidden lg:flex space-x-8">
          {['HOME', 'ABOUT', 'WORSHIP', 'EVENTS', 'VISIT', 'GIVE'].map((item) => (
            <a 
              key={item} 
              href="#" 
              className={`
                ${isScrolled ? 'text-gray-700 hover:text-amber-600' : 'text-white hover:text-amber-200'} 
                font-medium transition duration-300 relative group
              `}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center space-x-6">
          <a 
            href="#" 
            className={`
              ${isScrolled ? 'text-gray-700 hover:text-amber-600' : 'text-white hover:text-amber-200'} 
              transition duration-300 font-medium
            `}
          >
            Mass Times
          </a>
          <a 
            href="#" 
            className={`
              ${isScrolled ? 'bg-amber-600 text-white' : 'bg-white bg-opacity-20 text-white'} 
              transition duration-300 px-4 py-2 rounded hover:bg-amber-700
            `}
          >
            Contact
          </a>
        </div>
        
        <button 
          className="lg:hidden flex items-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white shadow-lg"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                <a href="#" className="text-gray-700 hover:text-amber-600 font-medium py-2 border-b border-gray-100">HOME</a>
                <a href="#" className="text-gray-700 hover:text-amber-600 font-medium py-2 border-b border-gray-100">ABOUT</a>
                <a href="#" className="text-gray-700 hover:text-amber-600 font-medium py-2 border-b border-gray-100">WORSHIP</a>
                <a href="#" className="text-gray-700 hover:text-amber-600 font-medium py-2 border-b border-gray-100">EVENTS</a>
                <a href="#" className="text-gray-700 hover:text-amber-600 font-medium py-2 border-b border-gray-100">VISIT</a>
                <a href="#" className="text-gray-700 hover:text-amber-600 font-medium py-2 border-b border-gray-100">GIVE</a>
                <a href="#" className="text-gray-700 hover:text-amber-600 font-medium py-2 border-b border-gray-100">Mass Times</a>
                <a href="#" className="text-gray-700 hover:text-amber-600 font-medium py-2">Contact</a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;