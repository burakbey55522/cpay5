import React from 'react';
import { UserPlus, Coins, CreditCard, ArrowRight } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: 'Login',
      description: 'Sign up a free account and login.',
      mobileDescription: 'Sign up free account',
      icon: <UserPlus className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8 lg:h-12 lg:w-12" />,
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-50',
      illustration: '👤'
    },
    {
      id: 2,
      title: 'Earn',
      description: 'Earn coins by browsing, gaming, trying out and sharing options.',
      mobileDescription: 'Complete simple tasks',
      icon: <Coins className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8 lg:h-12 lg:w-12" />,
      color: 'from-orange-400 to-orange-600',
      bgColor: 'bg-orange-50',
      illustration: '🎯'
    },
    {
      id: 3,
      title: 'Cashout',
      description: 'Exchange collected coins for cash or a variety of gift cards.',
      mobileDescription: 'Get paid instantly',
      icon: <CreditCard className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8 lg:h-12 lg:w-12" />,
      color: 'from-emerald-400 to-emerald-600',
      bgColor: 'bg-emerald-50',
      illustration: '💰'
    }
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
            Getting started is easy
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Start earning money in just three simple steps. No experience required, 
            no hidden fees, and instant payouts.
          </p>
        </div>

        {/* Mobile: Vertical Compact Layout */}
        <div className="block sm:hidden space-y-4 mb-6">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center space-x-4 bg-white rounded-xl p-4 shadow-sm border border-gray-200">
              {/* Icon Container */}
              <div className={`${step.bgColor} rounded-xl p-3 w-16 h-16 flex items-center justify-center relative flex-shrink-0`}>
                <div className={`bg-gradient-to-r ${step.color} rounded-lg p-2 text-white shadow-md`}>
                  {step.icon}
                </div>
                {/* Step Number */}
                <div className="absolute -top-1 -left-1 w-5 h-5 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center">
                  <span className="text-xs font-bold text-gray-700">{step.id}</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-base font-bold text-gray-900 mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {step.mobileDescription}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tablet and Desktop: Original Layout */}
        <div className="hidden sm:grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 mb-8 md:mb-12 lg:mb-16">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Step Card */}
              <div className="text-center group">
                {/* Icon Container */}
                <div className={`${step.bgColor} rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 mb-4 md:mb-6 mx-auto w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 flex items-center justify-center relative group-hover:scale-105 transition-transform duration-300`}>
                  <div className={`bg-gradient-to-r ${step.color} rounded-xl md:rounded-2xl p-2 md:p-3 lg:p-4 text-white shadow-lg`}>
                    {step.icon}
                  </div>
                  {/* Illustration Overlay */}
                  <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 text-lg md:text-2xl lg:text-3xl">
                    {step.illustration}
                  </div>
                  {/* Step Number */}
                  <div className="absolute -top-1 -left-1 md:-top-2 md:-left-2 lg:-top-3 lg:-left-3 w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-white rounded-full border-2 md:border-2 lg:border-4 border-gray-200 flex items-center justify-center">
                    <span className="text-xs md:text-sm font-bold text-gray-700">{step.id}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2 md:mb-4">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-sm mx-auto px-2 md:px-0">
                  {step.description}
                </p>
              </div>

              {/* Arrow Between Steps - Only show on desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 md:top-16 -right-4 md:-right-6 lg:-right-8">
                  <ArrowRight className="h-6 w-6 md:h-8 md:w-8 text-gray-300" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-3 lg:px-12 lg:py-4 rounded-xl sm:rounded-2xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 font-bold text-sm sm:text-base md:text-lg lg:text-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center space-x-2 md:space-x-3 mx-auto">
            <span>Get started now</span>
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;