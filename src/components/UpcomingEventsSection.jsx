'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const UpcomingEventsSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const events = [
    {
      id: 1,
      title: "Lent, Holy Week & Easter Sunday Mass Times",
      date: "23",
      month: "MAR",
      time: "Various Times",
      description: "Stations of the Cross every Friday during Lent following the 12:10pm mass.",
      image: "/Screenshot 2025-03-18 170804.png",
      location: "Main Sanctuary"
    },
    {
      id: 2,
      title: "Join Us To Celebrate The Sodality of the Most Sacred Heart",
      date: "04",
      month: "APR",
      time: "11:30 AM",
      description: "Join us every First Friday of the month to celebrate the Sacred Heart.",
      image: "/IMG_0130.JPG",
      location: "Main Sanctuary"
    },
    {
      id: 3,
      title: "Jubilee Year of Hope Pilgrimage Site",
      date: "2025",
      month: "ALL",
      time: "Ongoing",
      description: "The Old Cathedral is one of nine officially designated pilgrimage sites for the Jubilee Year of Hope.",
      image: "/fdf.jpg",
      location: "Old Cathedral"
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
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-3">
            <span className="text-amber-600 text-sm font-medium tracking-wider uppercase">Cathedral Updates</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">Old Cathedral Events & Updates</h2>
          <div className="flex justify-center items-center gap-2 mb-6">
            <div className="w-10 h-1 bg-amber-300 rounded-full"></div>
            <div className="w-20 h-1 bg-amber-500 rounded-full"></div>
            <div className="w-10 h-1 bg-amber-300 rounded-full"></div>
          </div>
          <p className="max-w-2xl mx-auto text-stone-600 text-lg">
            Stay updated with the latest events and news from our cathedral community.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {events.map((event, index) => (
            <motion.div 
              key={event.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredCard(event.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 transform group-hover:shadow-2xl group-hover:-translate-y-2">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  <div className="absolute top-4 left-4 bg-amber-600 text-white text-center p-3 rounded-lg shadow-md">
                    <div className="text-2xl font-bold">{event.date}</div>
                    <div className="text-xs font-medium">{event.month}</div>
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-flex items-center bg-black/40 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {event.location}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 pb-8">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-stone-800 group-hover:text-amber-600 transition-colors duration-300">
                      {event.title}
                    </h3>
                    <div className="flex items-center mt-2 text-stone-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-sm">{event.time}</p>
                    </div>
                  </div>
                  
                  <p className="text-stone-600 mb-6">{event.description}</p>
                  
                  <div className="relative overflow-hidden inline-block">
                    <motion.div
                      initial={{ x: "-100%" }}
                      animate={{ 
                        x: hoveredCard === event.id ? "0%" : "-100%" 
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-amber-500 h-0.5"
                    />
                    <a 
                      href="#" 
                      className="text-amber-600 font-medium flex items-center group-hover:text-amber-700 transition-colors duration-300"
                    >
                      Learn More
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* "More News" button */}
        <div className="flex justify-center mt-16">
          <a 
            href="#" 
            className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-8 py-3 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg flex items-center"
          >
            MORE NEWS
          </a>
        </div>
        
        {/* Decorative cross pattern */}
        <div className="absolute top-40 left-0 opacity-5 hidden lg:block">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-64 w-64 text-amber-900" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11 21v-5H5v-2h6V8H5V6h6V1h2v5h6v2h-6v6h6v2h-6v5z"/>
          </svg>
        </div>
        
        <div className="absolute bottom-40 right-0 opacity-5 hidden lg:block">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-64 w-64 text-amber-900" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11 21v-5H5v-2h6V8H5V6h6V1h2v5h6v2h-6v6h6v2h-6v5z"/>
          </svg>
        </div>
      </div>
      
      {/* Parish/Weddings/History Section */}
      <div className="container mx-auto px-4 max-w-7xl mt-24 pt-16 border-t border-amber-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="mb-4 overflow-hidden rounded-lg">
              <img 
                src="/Image (7).jpg" 
                alt="Parish" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" 
              />
            </div>
            <h3 className="text-2xl font-bold text-stone-800 mb-4">Parish</h3>
            <a 
              href="#" 
              className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-medium px-6 py-2 rounded transition-colors duration-300"
            >
              LEARN MORE
            </a>
          </div>
          
          <div className="text-center">
            <div className="mb-4 overflow-hidden rounded-lg">
              <img 
                src="/weddings-image.jpg" 
                alt="Weddings" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" 
              />
            </div>
            <h3 className="text-2xl font-bold text-stone-800 mb-4">Weddings</h3>
            <a 
              href="#" 
              className="inline-block bg-stone-800 hover:bg-stone-900 text-white font-medium px-6 py-2 rounded transition-colors duration-300"
            >
              LEARN MORE
            </a>
          </div>
          
          <div className="text-center">
            <div className="mb-4 overflow-hidden rounded-lg">
              <img 
                src="/fdf.jpg" 
                alt="History" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" 
              />
            </div>
            <h3 className="text-2xl font-bold text-stone-800 mb-4">History</h3>
            <a 
              href="#" 
              className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-medium px-6 py-2 rounded transition-colors duration-300"
            >
              LEARN MORE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEventsSection;