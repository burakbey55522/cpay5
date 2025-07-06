import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenItem(prev => prev === id ? null : id);
  };

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: 'How do I start earning money on TaskEarn?',
      answer: 'Getting started is simple! Just create a free account, verify your email, and you can immediately start browsing available tasks. Choose from watching videos, testing apps, completing surveys, or social media tasks. Most users earn their first money within the first hour of joining.',
    },
    {
      id: 2,
      question: 'How much money can I earn per day?',
      answer: 'Earnings vary based on the tasks you choose and time invested. On average, users earn $5-50 per day. High-value gaming tasks can pay $50-150 each, while quick tasks like watching videos pay $0.25-2.00. The more time you invest, the more you can earn.',
    },
    {
      id: 3,
      question: 'When and how do I get paid?',
      answer: 'We offer instant payouts! Once you complete a task and it\'s verified, your earnings are immediately available for withdrawal. You can cash out via PayPal, bank transfer, cryptocurrency, or gift cards. Minimum withdrawal is just $1.',
    },
    {
      id: 4,
      question: 'Is TaskEarn really free to join?',
      answer: 'Yes, absolutely! TaskEarn is 100% free to join and use. We never charge any fees, membership costs, or hidden charges. You only earn money - never spend it. We make money when our advertisers pay us for completed tasks, and we share that revenue with you.',
    },
    {
      id: 5,
      question: 'What types of tasks are available?',
      answer: 'We offer diverse earning opportunities: mobile gaming (highest paying), app testing, website browsing, social media engagement, surveys, content creation, and product reviews. New tasks are added daily, so there\'s always something new to try.',
    },
    {
      id: 6,
      question: 'Is my personal information safe?',
      answer: 'Your security is our top priority. We use bank-level SSL encryption, never share your personal data with third parties, and are fully GDPR compliant. We only collect information necessary for task completion and payments. Your privacy is guaranteed.',
    },
    {
      id: 7,
      question: 'Can I use TaskEarn on my mobile device?',
      answer: 'Yes! TaskEarn works perfectly on all devices - smartphones, tablets, and computers. Many of our highest-paying tasks are actually mobile games, so having a smartphone can increase your earning potential significantly.',
    },
    {
      id: 8,
      question: 'What countries is TaskEarn available in?',
      answer: 'TaskEarn is available in 190+ countries worldwide! We have tasks suitable for users from almost every country. Some premium tasks may be region-specific, but there are always earning opportunities available regardless of your location.',
    },
    {
      id: 9,
      question: 'How long does it take to complete tasks?',
      answer: 'Task duration varies widely. Quick tasks like watching videos take 30 seconds to 5 minutes. Surveys typically take 10-30 minutes. Gaming tasks can range from 30 minutes to several days depending on the objectives. You can always see the estimated time before starting.',
    },
    {
      id: 10,
      question: 'What if I have problems with a task or payment?',
      answer: 'Our customer support team is available 24/7 to help you. Contact us through live chat, email, or our support ticket system. We typically respond within 1 hour and resolve most issues within 24 hours. Your satisfaction is guaranteed.',
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column */}
          <div className="flex-1 space-y-6">
            {faqData.filter((_, index) => index % 2 === 0).map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {item.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openItem === item.id ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </div>
                </button>
                
                {openItem === item.id && (
                  <div className="px-6 pb-6 animate-in slide-in-from-top-2 duration-200">
                    <p className="text-gray-700 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex-1 space-y-6">
            {faqData.filter((_, index) => index % 2 === 1).map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {item.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openItem === item.id ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </div>
                </button>
                
                {openItem === item.id && (
                  <div className="px-6 pb-6 animate-in slide-in-from-top-2 duration-200">
                    <p className="text-gray-700 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;