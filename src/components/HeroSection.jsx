'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  
  const images = [
    '/IMG_0130.JPG',
    '/IMG_9984.jpg',
    '/mainnnn.jpg'
  ];
  
  const headings = [
    "Welcome to St. Joseph Church",
    "Explore Faith & Fellowship",
    "Serving Our Community"
  ];
  
  const subheadings = [
    "A sacred place of worship, love, and community",
    "Join us in prayer and spiritual growth",
    "Reaching out with compassion and care"
  ];

  const verses = [
    "For where two or three gather in my name, there am I with them. — Matthew 18:20",
    "I am the light of the world. Whoever follows me will never walk in darkness. — John 8:12",
    "Let us not love with words or speech but with actions and in truth. — 1 John 3:18"
  ];

  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 6000);
  
      return () => clearInterval(interval);
    }
  }, [isHovering]);

  const handlePrevSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div 
      className="relative w-full min-h-screen overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Image Carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 w-full h-full"
        >
          <div 
            className="w-full h-full bg-cover bg-center transition-transform duration-10000 ease-in-out hover:scale-105"
            style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          
          {/* Decorative overlay elements */}
          <div className="absolute inset-0 bg-[url('/subtle-pattern.png')] opacity-20 mix-blend-overlay pointer-events-none"></div>
          
          <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)] pointer-events-none"></div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute inset-y-0 left-4 md:left-8 flex items-center justify-center z-10 opacity-0 hover:opacity-100 transition-opacity duration-300">
        <motion.button
          onClick={handlePrevSlide}
          className="bg-black/20 hover:bg-amber-600 text-white p-2 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </motion.button>
      </div>
      
      <div className="absolute inset-y-0 right-4 md:right-8 flex items-center justify-center z-10 opacity-0 hover:opacity-100 transition-opacity duration-300">
        <motion.button
          onClick={handleNextSlide}
          className="bg-black/20 hover:bg-amber-600 text-white p-2 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`transition-all duration-500 relative ${
              currentImageIndex === index 
                ? 'w-8 h-3 bg-amber-500 rounded-full' 
                : 'w-3 h-3 bg-white/50 hover:bg-white/70 rounded-full'
            }`}
            aria-label={`View slide ${index + 1}`}
          >
            {currentImageIndex === index && (
              <motion.span 
                className="absolute inset-0 rounded-full border border-amber-400 -m-1"
                initial={{ opacity: 0, scale: 1.2 }}
                animate={{ opacity: 1, scale: 1.5 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 md:px-8 pt-16 md:pt-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <motion.div
              className="mb-2 flex justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-20 h-1 bg-amber-500 rounded-full"></div>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl  font-bold mb-3 md:mb-4 drop-shadow-lg">
              <span className="text-amber-400">{headings[currentImageIndex].split(' ')[0]}</span>{' '}
              {headings[currentImageIndex].split(' ').slice(1).join(' ')}
            </h1>
            
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mb-6 md:mb-8 drop-shadow-md max-w-3xl mx-auto">
              {subheadings[currentImageIndex]}
            </h2>
            
            <motion.div
              className="max-w-2xl mx-auto mb-10 bg-black/30 backdrop-blur-sm p-4 rounded-lg border-l-4 border-amber-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <p className="italic font-serif text-white/90 text-lg">
                {verses[currentImageIndex]}
              </p>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 w-full max-w-lg sm:max-w-2xl px-4"
        >
          <motion.a 
            href="#" 
            className="bg-gradient-to-r from-amber-600 to-amber-700 text-white font-medium py-3 md:py-4 px-6 md:px-8 rounded-md transition duration-300 flex items-center justify-center gap-2 shadow-lg flex-1 relative overflow-hidden group"
            whileHover={{ y: -3, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
            whileTap={{ y: 0 }}
          >
            <span className="absolute w-full h-full top-0 left-0 bg-gradient-to-r from-amber-500 to-amber-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0"></span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="whitespace-nowrap relative z-10">Mass Timings</span>
          </motion.a>
          
          <motion.a 
            href="#" 
            className="bg-gradient-to-r from-amber-600 to-amber-700 text-white font-medium py-3 md:py-4 px-6 md:px-8 rounded-md transition duration-300 flex items-center justify-center gap-2 shadow-lg flex-1 relative overflow-hidden group"
            whileHover={{ y: -3, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
            whileTap={{ y: 0 }}
          >
            <span className="absolute w-full h-full top-0 left-0 bg-gradient-to-r from-amber-500 to-amber-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0"></span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <span className="whitespace-nowrap relative z-10">Live Stream</span>
          </motion.a>
          
          <motion.a 
            href="#" 
            className="bg-gradient-to-r from-amber-600 to-amber-700 text-white font-medium py-3 md:py-4 px-6 md:px-8 rounded-md transition duration-300 flex items-center justify-center gap-2 shadow-lg flex-1 relative overflow-hidden group"
            whileHover={{ y: -3, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
            whileTap={{ y: 0 }}
          >
            <span className="absolute w-full h-full top-0 left-0 bg-gradient-to-r from-amber-500 to-amber-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0"></span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 10V8a2 2 0 0 1 2-2h2"></path>
              <path d="M4 14v2a2 2 0 0 0 2 2h2"></path>
              <path d="M10 4h2a2 2 0 0 1 2 2v2"></path>
              <path d="M10 20h2a2 2 0 0 0 2-2v-2"></path>
              <line x1="12" y1="12" x2="12" y2="12.01"></line>
              <path d="M12 7v5"></path>
            </svg>
            <span className="whitespace-nowrap relative z-10">Donate ₹</span>
          </motion.a>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-24 sm:bottom-28 md:bottom-36 left-1/2 transform -translate-x-1/2"
        >
          <motion.div 
            className="flex flex-col items-center"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <p className="text-white/80 text-sm mb-2 font-light">Scroll to Explore</p>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
        
        {/* Premium spiritual quote element */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute top-36 md:top-40 right-6 md:right-8 max-w-xs z-10"
        >
          <div className="bg-black/40 backdrop-blur-sm p-4 rounded-lg border-r-4 border-amber-500 shadow-lg hidden md:block">
            <p className="text-white/90 text-sm italic font-serif leading-relaxed">
              "Faith is the bird that feels the light when the dawn is still dark."
              <span className="block text-amber-400 text-xs mt-2 text-right font-semibold">- Rabindranath Tagore</span>
            </p>
          </div>
        </motion.div>
        
        {/* Premium established badge */}
        
        
       
        
        {/* Weekly schedule highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.8 }}
          className="absolute bottom-6 right-6 md:right-8 max-w-xs z-10 hidden md:block"
        >
          
<div className="bg-gradient-to-r from-amber-700/80 to-amber-600/80 backdrop-blur-sm p-3 rounded-lg shadow-lg text-left">
  <h3 className="text-white font-serif text-sm font-bold mb-2 flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
    This Sunday
  </h3>
  <p className="text-white/90 text-xs mb-1">Holy Mass: 7:00 AM | 9:30 AM | 11:00 AM</p>
  <p className="text-white/90 text-xs mb-2">Adoration: 6:00 PM</p>
  <motion.a
    href="#" 
    className="text-amber-100 text-xs font-medium hover:text-white inline-flex items-center"
    whileHover={{ x: 3 }}
  >
    Full Schedule
    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </motion.a>
</div>
        </motion.div>
        
        {/* Cross symbol */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.5 }}
          className="absolute top-20 left-1/2 transform -translate-x-1/2 z-0"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-48 w-48 text-white/5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11 21v-5H5v-2h6V8H5V6h6V1h2v5h6v2h-6v6h6v2h-6v5z"/>
          </svg>
        </motion.div>
      </div>
    </div>
  );

}
export default HeroSection;