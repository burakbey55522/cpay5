import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Shield, DollarSign, Clock, Users, Globe } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: 'general' | 'payments' | 'tasks' | 'security';
}

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: 'How do I start earning money on TaskEarn?',
      answer: 'Getting started is simple! Just create a free account, verify your email, and you can immediately start browsing available tasks. Choose from watching videos, testing apps, completing surveys, or social media tasks. Most users earn their first money within the first hour of joining.',
      category: 'general'
    },
    {
      id: 2,
      question: 'How much money can I earn per day?',
      answer: 'Earnings vary based on the tasks you choose and time invested. On average, users earn $5-50 per day. High-value gaming tasks can pay $50-150 each, while quick tasks like watching videos pay $0.25-2.00. The more time you invest, the more you can earn.',
      category: 'general'
    },
    {
      id: 3,
      question: 'When and how do I get paid?',
      answer: 'We offer instant payouts! Once you complete a task and it\'s verified, your earnings are immediately available for withdrawal. You can cash out via PayPal, bank transfer, cryptocurrency, or gift cards. Minimum withdrawal is just $1.',
      category: 'payments'
    },
    {
      id: 4,
      question: 'Is TaskEarn really free to join?',
      answer: 'Yes, absolutely! TaskEarn is 100% free to join and use. We never charge any fees, membership costs, or hidden charges. You only earn money - never spend it. We make money when our advertisers pay us for completed tasks, and we share that revenue with you.',
      category: 'general'
    },
    {
      id: 5,
      question: 'What types of tasks are available?',
      answer: 'We offer diverse earning opportunities: mobile gaming (highest paying), app testing, website browsing, social media engagement, surveys, content creation, and product reviews. New tasks are added daily, so there\'s always something new to try.',
      category: 'tasks'
    },
    {
      id: 6,
      question: 'Is my personal information safe?',
      answer: 'Your security is our top priority. We use bank-level SSL encryption, never share your personal data with third parties, and are fully GDPR compliant. We only collect information necessary for task completion and payments. Your privacy is guaranteed.',
      category: 'security'
    },
    {
      id: 7,
      question: 'Can I use TaskEarn on my mobile device?',
      answer: 'Yes! TaskEarn works perfectly on all devices - smartphones, tablets, and computers. Many of our highest-paying tasks are actually mobile games, so having a smartphone can increase your earning potential significantly.',
      category: 'general'
    },
    {
      id: 8,
      question: 'What countries is TaskEarn available in?',
      answer: 'TaskEarn is available in 190+ countries worldwide! We have tasks suitable for users from almost every country. Some premium tasks may be region-specific, but there are always earning opportunities available regardless of your location.',
      category: 'general'
    },
    {
      id: 9,
      question: 'How long does it take to complete tasks?',
      answer: 'Task duration varies widely. Quick tasks like watching videos take 30 seconds to 5 minutes. Surveys typically take 10-30 minutes. Gaming tasks can range from 30 minutes to several days depending on the objectives. You can always see the estimated time before starting.',
      category: 'tasks'
    },
    {
      id: 10,
      question: 'What if I have problems with a task or payment?',
      answer: 'Our customer support team is available 24/7 to help you. Contact us through live chat, email, or our support ticket system. We typically respond within 1 hour and resolve most issues within 24 hours. Your satisfaction is guaranteed.',
      category: 'general'
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'general': return <HelpCircle className="h-5 w-5" />;
      case 'payments': return <DollarSign className="h-5 w-5" />;
      case 'tasks': return <Clock className="h-5 w-5" />;
      case 'security': return <Shield className="h-5 w-5" />;
      default: return <HelpCircle className="h-5 w-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'general': return 'text-blue-600 bg-blue-100';
      case 'payments': return 'text-emerald-600 bg-emerald-100';
      case 'tasks': return 'text-purple-600 bg-purple-100';
      case 'security': return 'text-orange-600 bg-orange-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about earning money with TaskEarn
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-2 rounded-lg ${getCategoryColor(item.category)}`}>
                    {getCategoryIcon(item.category)}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {item.question}
                  </h3>
                </div>
                <div className="flex-shrink-0">
                  {openItems.includes(item.id) ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </div>
              </button>
              
              {openItems.includes(item.id) && (
                <div className="px-6 pb-6">
                  <div className="pl-14">
                    <p className="text-gray-700 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Support Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl p-8 text-center text-white">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="text-blue-100 mb-6">
              Our support team is here to help you 24/7. Get answers to your questions and start earning today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
                Contact Support
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Start Earning Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;