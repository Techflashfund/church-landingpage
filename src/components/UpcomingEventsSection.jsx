// components/UpcomingEventsSection.js
import React from 'react';

const UpcomingEventsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-gray-800 mb-4">Upcoming Events</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img src="/api/placeholder/400/200" alt="Sunday Mass" className="w-full h-48 object-cover" />
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-amber-600 text-white text-center p-2 rounded">
                  <div className="text-xl font-bold">23</div>
                  <div className="text-xs">MAR</div>
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-gray-800">Sunday Mass</h3>
                  <p className="text-gray-600 text-sm">8:00 AM - 9:30 AM</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">Join us for our weekly celebration of the Holy Eucharist with our community.</p>
              <a href="#" className="text-amber-600 hover:text-amber-700 font-medium">Learn More →</a>
            </div>
          </div>
          
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img src="/api/placeholder/400/200" alt="Bible Study" className="w-full h-48 object-cover" />
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-amber-600 text-white text-center p-2 rounded">
                  <div className="text-xl font-bold">25</div>
                  <div className="text-xs">MAR</div>
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-gray-800">Bible Study</h3>
                  <p className="text-gray-600 text-sm">6:30 PM - 8:00 PM</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">Join our weekly Bible study group as we explore the teachings of Christ.</p>
              <a href="#" className="text-amber-600 hover:text-amber-700 font-medium">Learn More →</a>
            </div>
          </div>
          
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img src="/api/placeholder/400/200" alt="Charity Drive" className="w-full h-48 object-cover" />
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-amber-600 text-white text-center p-2 rounded">
                  <div className="text-xl font-bold">30</div>
                  <div className="text-xs">MAR</div>
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-gray-800">Charity Drive</h3>
                  <p className="text-gray-600 text-sm">10:00 AM - 2:00 PM</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">Help us collect essential items for those in need in our community.</p>
              <a href="#" className="text-amber-600 hover:text-amber-700 font-medium">Learn More →</a>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-10">
          <a href="#" className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300">
            View All Events
          </a>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEventsSection;