// pages/ChurchLandingPage.js
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import WelcomeSection from '../components/WelcomeSection';
import UpcomingEventsSection from '../components/UpcomingEventsSection';
import Footer from '../components/Footer';

const ChurchLandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <HeroSection />
      <main className="flex-grow">
        <WelcomeSection />
        <UpcomingEventsSection />
      </main>
      <Footer />
    </div>
  );
};

export default ChurchLandingPage;