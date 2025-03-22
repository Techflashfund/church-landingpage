'use client'
import React from 'react';
import { motion } from 'framer-motion';

const WelcomeSection = () => {
  return (
    <div className="relative w-full bg-stone-50/95 py-16 md:py-24">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/10 to-transparent"></div>
      
      {/* Cross symbol */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="absolute top-20 right-10 -z-0 hidden lg:block"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-48 w-48 text-amber-100" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11 21v-5H5v-2h6V8H5V6h6V1h2v5h6v2h-6v6h6v2h-6v5z"/>
        </svg>
      </motion.div>
      
      <div className="container mx-auto px-4 max-w-7xl flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
        <motion.div 
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img 
            src="/fdf.jpg" 
            alt="St. Joseph Church Interior" 
            className="w-full h-auto rounded-lg shadow-xl"
          />
        </motion.div>
        
        <motion.div 
          className="w-full lg:w-1/2 space-y-6"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="mb-2 flex">
            <div className="w-20 h-1 bg-amber-500 rounded-full"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800">
            Welcome to <span className="text-amber-600">St. Joseph</span> Pukunnam
          </h2>
          
          <div className="w-12 h-1 bg-amber-300 rounded-full"></div>
          
          <p className="text-stone-700 leading-relaxed">
            Welcome to the website for the St. Joseph Church, Pukunnam. A sacred place of worship, love, and community service since its establishment.
          </p>
          
          <p className="text-stone-700 leading-relaxed">
            St. Joseph Church is one of the most historic buildings in our community with roots dating back many decades. The present building is a testament to the faith and dedication of our parish members. The church serves as a spiritual home for all who seek God's presence.
          </p>
          
          <p className="text-stone-700 leading-relaxed">
            We hope you will visit our historic church and pray with us soon! Thank you for visiting our website.
          </p>
          
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <motion.a 
              href="#" 
              className="bg-gradient-to-r from-amber-600 to-amber-700 text-white font-medium py-3 px-6 rounded-md transition duration-300 flex items-center justify-center gap-2 shadow-md group"
              whileHover={{ y: -3, boxShadow: "0 10px 15px rgba(0,0,0,0.1)" }}
              whileTap={{ y: 0 }}
            >
              <span className="whitespace-nowrap">MASS TIMES</span>
            </motion.a>
            
            <motion.a 
              href="#" 
              className="bg-gradient-to-r from-stone-500 to-stone-600 text-white font-medium py-3 px-6 rounded-md transition duration-300 flex items-center justify-center gap-2 shadow-md"
              whileHover={{ y: -3, boxShadow: "0 10px 15px rgba(0,0,0,0.1)" }}
              whileTap={{ y: 0 }}
            >
              <span className="whitespace-nowrap">WATCH LIVE STREAM</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative element */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-amber-100/30 to-transparent"
      ></motion.div>
    </div>
  );
};

export default WelcomeSection;