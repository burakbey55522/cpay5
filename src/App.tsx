import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import ManyWaysToEarn from './components/ManyWaysToEarn';
import SocialMediaTasks from './components/SocialMediaTasks';
import UserReviews from './components/UserReviews';
import OurAdvertisers from './components/OurAdvertisers';
import FAQ from './components/FAQ';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <HowItWorks />
      <ManyWaysToEarn />
      <SocialMediaTasks />
      <UserReviews />
      <OurAdvertisers />
      <FAQ />
    </div>
  );
}

export default App;