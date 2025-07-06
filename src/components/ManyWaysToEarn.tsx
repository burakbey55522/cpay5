import React, { useState, useEffect } from 'react';
import { Globe, Gamepad2 } from 'lucide-react';

interface GameTask {
  id: number;
  title: string;
  image: string;
  reward: string;
}

const ManyWaysToEarn: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const gameTasks: GameTask[] = [
    {
      id: 1,
      title: 'Mafia City',
      image: 'https://www.coinpayu.com/static/newImg/index/offer1.jpg',
      reward: '$422'
    },
    {
      id: 2,
      title: 'Candy Match',
      image: 'https://www.coinpayu.com/static/newImg/index/offer2.jpg',
      reward: '$111'
    },
    {
      id: 3,
      title: 'Dice Dreams',
      image: 'https://www.coinpayu.com/static/newImg/index/offer3.png',
      reward: '$49'
    },
    {
      id: 4,
      title: 'Grab A Toy',
      image: 'https://www.coinpayu.com/static/newImg/index/offer1.jpg',
      reward: '$178'
    },
    {
      id: 5,
      title: 'Monopoly GO!',
      image: 'https://www.coinpayu.com/static/newImg/index/offer2.jpg',
      reward: '$254'
    },
    {
      id: 6,
      title: 'AFK Journey',
      image: 'https://www.coinpayu.com/static/newImg/index/offer3.png',
      reward: '$504'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % gameTasks.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [gameTasks.length]);

  const getVisibleGames = () => {
    const visible = [];
    for (let i = 0; i < 5; i++) {
      const index = (currentIndex + i) % gameTasks.length;
      visible.push(gameTasks[index]);
    }
    return visible;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Many ways to earn
          </h2>
        </div>

        <div className="space-y-20">
          {/* Browsing Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Browser Mockup */}
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-3xl shadow-2xl border-4 border-gray-800 overflow-hidden max-w-md mx-auto">
                {/* Browser Header */}
                <div className="bg-gray-200 px-4 py-3 border-b-2 border-gray-800">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex-1 bg-white rounded px-3 py-1 ml-3">
                      <span className="text-xs text-gray-600">coinpayu.com</span>
                    </div>
                  </div>
                </div>
                
                {/* Browser Content */}
                <div className="bg-white p-8 text-center min-h-[300px] flex flex-col justify-center">
                  <div className="mb-6">
                    <div className="text-orange-500 text-2xl mb-2">🦊</div>
                    <div className="text-orange-500 font-bold text-lg">0 coins</div>
                  </div>
                  
                  <div className="mb-8">
                    <div className="w-16 h-16 bg-yellow-200 rounded-full mx-auto flex items-center justify-center mb-4">
                      <div className="text-2xl">💰</div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-800 mb-2">Browse Now</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Browsing Info */}
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Browsing</h3>
                <p className="text-gray-600 text-lg mb-8">Earn coins by browsing various websites.</p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <span className="text-orange-500 font-bold">120+ ads online</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-orange-500 font-bold">Earn up to $0.03 per click</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gaming Section */}
          <div className="space-y-8">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Gaming</h3>
              <p className="text-gray-600 text-lg mb-6">
                Play free games on your phone and get coins for completing various in-game steps.
              </p>
              <div className="inline-block">
                <span className="text-orange-500 font-bold">50+ online games available</span>
              </div>
            </div>

            {/* Game Cards Slider */}
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ 
                  transform: `translateX(-${currentIndex * (100 / 5)}%)`,
                  width: `${(gameTasks.length * 100) / 5}%`
                }}
              >
                {gameTasks.map((game, index) => (
                  <div 
                    key={game.id} 
                    className="flex-none px-2"
                    style={{ width: `${100 / gameTasks.length}%` }}
                  >
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group cursor-pointer">
                      <div className="aspect-square relative overflow-hidden">
                        <img
                          src={game.image}
                          alt={game.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                      <div className="p-4 text-center">
                        <h5 className="font-bold text-gray-900 text-sm mb-2 truncate">
                          {game.title}
                        </h5>
                        <p className="text-gray-900 font-bold text-lg">
                          {game.reward}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManyWaysToEarn;