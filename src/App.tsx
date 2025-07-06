import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import ManyWaysToEarn from './components/ManyWaysToEarn';
import SocialMediaTasks from './components/SocialMediaTasks';
import UserReviews from './components/UserReviews';

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
    </div>
  );
}

export default App;