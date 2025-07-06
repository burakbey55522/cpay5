import React from 'react';
import { Shield, Zap, Globe, CreditCard, Users, TrendingUp } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Secure Platform',
      description: 'Bank-level security with SSL encryption and fraud protection for all transactions.'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Instant Payouts',
      description: 'Get paid immediately after completing tasks. No waiting periods or delays.'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Global Community',
      description: 'Join millions of users from 190+ countries earning money together.'
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: 'Multiple Payment Methods',
      description: 'Withdraw via PayPal, bank transfer, crypto, or gift cards.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: '24/7 Support',
      description: 'Get help anytime with our dedicated customer support team.'
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Growing Earnings',
      description: 'Access to premium tasks and higher earnings as you complete more work.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose TaskEarn?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're committed to providing the best earning experience with transparency, 
            security, and opportunities for everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl border border-gray-100 hover:border-emerald-200 transition-colors group"
            >
              <div className="bg-emerald-100 p-4 rounded-2xl inline-block mb-6 group-hover:bg-emerald-200 transition-colors">
                <div className="text-emerald-600">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;