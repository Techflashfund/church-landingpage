'use client'
import React from 'react';
import { motion } from 'framer-motion';

const MassIntentionsSection = () => {
  const callToActionItems = [
    {
      id: 1,
      title: "Light a Candle",
      buttonText: "LIGHT A CANDLE",
      buttonColor: "bg-amber-600 hover:bg-amber-700",
      href: "#"
    },
    {
      id: 2,
      title: "Mass Intentions",
      buttonText: "MASS INTENTIONS",
      buttonColor: "bg-stone-800 hover:bg-stone-900",
      href: "#"
    },
    {
      id: 3,
      title: "Donate",
      buttonText: "DONATE",
      buttonColor: "bg-amber-500 hover:bg-amber-600",
      href: "#"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-stone-50 to-amber-50">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-amber-100/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-amber-100/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-xl overflow-hidden shadow-xl"
          >
            <img 
              src="/IMG_0132.JPG" 
              alt="Cathedral Interior" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 to-transparent"></div>
            
            {/* Video Tour & Visitor's Guide overlays */}
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full px-6">
                <motion.div 
                  whileHover={{ scale: 1.05 }} 
                  className="bg-stone-900/80 backdrop-blur-sm p-8 rounded-lg text-center cursor-pointer transition-all duration-300 hover:bg-stone-800/90"
                >
                  <h3 className="text-white text-2xl font-bold mb-4">Take a Video Tour</h3>
                  <div className="inline-flex justify-center items-center w-12 h-12 rounded-full bg-amber-500 hover:bg-amber-600 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.05 }} 
                  className="bg-amber-600/80 backdrop-blur-sm p-8 rounded-lg text-center cursor-pointer transition-all duration-300 hover:bg-amber-600/90"
                >
                  <h3 className="text-white text-2xl font-bold mb-4">Download Visitor's Guide</h3>
                  <div className="inline-flex justify-center items-center w-12 h-12 rounded-full bg-white hover:bg-stone-100 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          {/* Right side - Mass Intentions & Giving content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6">Mass Intentions & Giving</h2>
              <div className="flex items-center gap-2 mb-8">
                <div className="w-20 h-1 bg-amber-500 rounded-full"></div>
                <div className="w-10 h-1 bg-amber-300 rounded-full"></div>
              </div>
              <p className="text-stone-600 text-lg mb-8 leading-relaxed">
                The Old Cathedral is a Catholic community dedicated to better knowing and 
                serving God. Our mission is to serve the spiritual needs of our parishioners 
                and to nurture the thousands who visit the Basilica each year.
              </p>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {callToActionItems.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                    className="flex justify-center"
                  >
                    <a 
                      href={item.href} 
                      className={`${item.buttonColor} w-full text-white font-medium px-4 py-3 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg text-center`}
                    >
                      {item.buttonText}
                    </a>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative cross pattern */}
        <div className="absolute top-40 right-0 opacity-5 hidden lg:block">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-64 w-64 text-amber-900" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11 21v-5H5v-2h6V8H5V6h6V1h2v5h6v2h-6v6h6v2h-6v5z"/>
          </svg>
        </div>
        
        <div className="absolute bottom-40 left-0 opacity-5 hidden lg:block">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-64 w-64 text-amber-900" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11 21v-5H5v-2h6V8H5V6h6V1h2v5h6v2h-6v6h6v2h-6v5z"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default MassIntentionsSection;