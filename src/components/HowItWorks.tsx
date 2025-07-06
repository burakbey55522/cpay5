import React from 'react';
import { UserPlus, Coins, CreditCard, ArrowRight } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: 'Login',
      description: 'Sign up a free account and login.',
      icon: <UserPlus className="h-12 w-12" />,
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-50',
      illustration: '👤'
    },
    {
      id: 2,
      title: 'Earn',
      description: 'Earn coins by browsing, gaming, trying out and sharing options.',
      icon: <Coins className="h-12 w-12" />,
      color: 'from-orange-400 to-orange-600',
      bgColor: 'bg-orange-50',
      illustration: '🎯'
    },
    {
      id: 3,
      title: 'Cashout',
      description: 'Exchange collected coins for cash or a variety of gift cards.',
      icon: <CreditCard className="h-12 w-12" />,
      color: 'from-emerald-400 to-emerald-600',
      bgColor: 'bg-emerald-50',
      illustration: '💰'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Getting started is easy
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start earning money in just three simple steps. No experience required, 
            no hidden fees, and instant payouts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Step Card */}
              <div className="text-center group">
                {/* Icon Container */}
                <div className={`${step.bgColor} rounded-3xl p-8 mb-6 mx-auto w-32 h-32 flex items-center justify-center relative group-hover:scale-105 transition-transform duration-300`}>
                  <div className={`bg-gradient-to-r ${step.color} rounded-2xl p-4 text-white shadow-lg`}>
                    {step.icon}
                  </div>
                  {/* Illustration Overlay */}
                  <div className="absolute -top-2 -right-2 text-3xl">
                    {step.illustration}
                  </div>
                  {/* Step Number */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-white rounded-full border-4 border-gray-200 flex items-center justify-center">
                    <span className="text-sm font-bold text-gray-700">{step.id}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                  {step.description}
                </p>
              </div>

              {/* Arrow Between Steps */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 -right-6 lg:-right-8">
                  <ArrowRight className="h-8 w-8 text-gray-300" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-12 py-4 rounded-2xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 font-bold text-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center space-x-3 mx-auto">
            <span>Get start now</span>
            <ArrowRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;