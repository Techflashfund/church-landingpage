'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('HOME');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ['HOME', 'ABOUT', 'WORSHIP', 'EVENTS', 'VISIT', 'GIVE'];

  return (
    <header className={`fixed w-full top-0 z-30 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg py-2' : 'bg-gradient-to-b from-black/40 to-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="relative h-16 w-16 mr-4 overflow-hidden rounded-full bg-white/20 backdrop-blur-sm p-2 shadow-lg">
            <motion.img 
              src="/sdsdsd-removebg-preview.png" 
              alt="St. Joseph Church Logo" 
              className="h-full w-full object-contain" 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <motion.div 
              className="absolute inset-0 border-2 border-amber-500 rounded-full"
              initial={{ opacity: 0, scale: 1.2 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </div>
          <div>
            <h1 className={`text-2xl font-serif font-bold transition-all duration-300 ${isScrolled ? 'text-gray-800' : 'text-white drop-shadow-md'}`}>
              <span className="text-amber-500">St.</span> Joseph Church
            </h1>
            <p className={`text-sm font-light tracking-wider transition-all duration-300 ${isScrolled ? 'text-gray-600' : 'text-white/90 drop-shadow-md'}`}>
              <span className="border-b border-amber-500 pb-px">PUNKUNNAM</span> • SINCE 1924
            </p>
          </div>
        </div>
        
        <nav className="hidden lg:flex space-x-8">
          {menuItems.map((item) => (
            <motion.a 
              key={item} 
              href="#" 
              whileHover={{ y: -2 }}
              className={`
                ${isScrolled ? 'text-gray-700 hover:text-amber-600' : 'text-white hover:text-amber-200'} 
                ${activeItem === item ? 'font-semibold' : 'font-medium'}
                transition duration-300 relative group tracking-wide
              `}
              onClick={() => setActiveItem(item)}
            >
              {item}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-amber-500 transition-all duration-300 ${activeItem === item ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </motion.a>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center space-x-6">
          <motion.a 
            href="#" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`
              ${isScrolled ? 'text-gray-700 hover:text-amber-600' : 'text-white hover:text-amber-200'} 
              transition duration-300 font-medium flex items-center gap-2
            `}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Mass Times
          </motion.a>
          <motion.a 
            href="#" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`
              ${isScrolled 
                ? 'bg-gradient-to-r from-amber-600 to-amber-700 text-white' 
                : 'bg-white/20 backdrop-blur-sm text-white border border-white/30'} 
              transition duration-300 px-5 py-2 rounded-full hover:shadow-lg flex items-center gap-2
            `}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact Us
          </motion.a>
        </div>
        
        <motion.button 
          className="lg:hidden flex items-center justify-center h-10 w-10 rounded-full"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className={`${isScrolled ? 'bg-amber-50' : 'bg-white/20 backdrop-blur-sm'} h-10 w-10 rounded-full flex items-center justify-center shadow-md`}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-6 w-6 ${isScrolled ? 'text-amber-600' : 'text-white'}`} 
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
          </div>
        </motion.button>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-md shadow-lg"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-3">
                {menuItems.map((item) => (
                  <motion.a
                    key={item}
                    href="#"
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: menuItems.indexOf(item) * 0.05 }}
                    className={`
                      text-gray-700 hover:text-amber-600 font-medium py-2 border-b border-gray-100
                      ${activeItem === item ? 'text-amber-600 border-amber-200' : ''}
                    `}
                    onClick={() => {
                      setActiveItem(item);
                      setIsMenuOpen(false);
                    }}
                  >
                    {item}
                  </motion.a>
                ))}
                <motion.a
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.35 }}
                  href="#" 
                  className="text-gray-700 hover:text-amber-600 font-medium py-2 border-b border-gray-100 flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Mass Times
                </motion.a>
                <motion.a
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  href="#" 
                  className="text-gray-700 hover:text-amber-600 font-medium py-2 flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact Us
                </motion.a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;