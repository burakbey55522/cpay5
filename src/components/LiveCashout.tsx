import React, { useState, useEffect } from 'react';
import { DollarSign, TrendingUp } from 'lucide-react';

interface Cashout {
  id: number;
  username: string;
  amount: string;
  country: string;
  flag: string;
  time: string;
}

const LiveCashout: React.FC = () => {
  const [cashouts, setCashouts] = useState<Cashout[]>([
    { id: 1, username: 'alex_m', amount: '$12.45', country: 'USA', flag: '🇺🇸', time: '2m ago' },
    { id: 2, username: 'sarah_k', amount: '$8.90', country: 'UK', flag: '🇬🇧', time: '3m ago' },
    { id: 3, username: 'carlos_r', amount: '$15.30', country: 'Spain', flag: '🇪🇸', time: '5m ago' },
    { id: 4, username: 'maria_s', amount: '$7.25', country: 'Brazil', flag: '🇧🇷', time: '6m ago' },
    { id: 5, username: 'yuki_t', amount: '$22.10', country: 'Japan', flag: '🇯🇵', time: '8m ago' },
    { id: 6, username: 'ahmed_h', amount: '$9.75', country: 'UAE', flag: '🇦🇪', time: '10m ago' },
    { id: 7, username: 'lisa_w', amount: '$11.60', country: 'Germany', flag: '🇩🇪', time: '12m ago' },
    { id: 8, username: 'raj_p', amount: '$6.40', country: 'India', flag: '🇮🇳', time: '14m ago' },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cashouts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [cashouts.length]);

  const visibleCashouts = [
    cashouts[currentIndex],
    cashouts[(currentIndex + 1) % cashouts.length],
    cashouts[(currentIndex + 2) % cashouts.length],
    cashouts[(currentIndex + 3) % cashouts.length],
  ];

  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
            <h2 className="text-2xl font-bold text-gray-900">Live Cashouts</h2>
            <TrendingUp className="h-6 w-6 text-emerald-500" />
          </div>
          <p className="text-gray-600">Real payments happening right now</p>
        </div>

        <div className="overflow-hidden">
          <div className="flex space-x-4 animate-slide">
            {visibleCashouts.map((cashout) => (
              <div
                key={cashout.id}
                className="flex-none w-72 bg-gradient-to-r from-emerald-50 to-green-50 p-6 rounded-2xl border border-emerald-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
                      <DollarSign className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{cashout.username}</div>
                      <div className="flex items-center space-x-1 text-sm text-gray-600">
                        <span>{cashout.flag}</span>
                        <span>{cashout.country}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-emerald-600">{cashout.amount}</div>
                    <div className="text-sm text-gray-500">{cashout.time}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <div className="inline-flex items-center space-x-2 text-sm text-gray-600">
            <span>💰 $847,392 paid out this month</span>
            <span>•</span>
            <span>⚡ Next payout in 2 minutes</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveCashout;