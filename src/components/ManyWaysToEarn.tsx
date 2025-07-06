import React, { useState, useEffect } from 'react';
import { Globe, Gamepad2 } from 'lucide-react';

interface GameTask {
  id: number;
  title: string;
  image: string;
  reward: string;
}

const ManyWaysToEarn: React.FC = () => {
  const [currentGameIndex, setCurrentGameIndex] = useState(0);

  const gameTasks: GameTask[] = [
    {
      id: 1,
      title: 'Mafia City',
      image: 'https://www.coinpayu.com/static/newImg/index/offer1.jpg',
      reward: '$22'
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
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGameIndex((prev) => (prev + 1) % gameTasks.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [gameTasks.length]);

  const getVisibleGames = () => {
    const visible = [];
    for (let i = 0; i < 5; i++) {
      const index = (currentGameIndex + i) % gameTasks.length;
      visible.push(gameTasks[index]);
    }
    return visible;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Many ways to earn
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Browsing */}
          <div className="space-y-8">
            {/* Browsing Section */}
            <div className="bg-orange-50 rounded-3xl p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-white p-4 rounded-2xl shadow-lg">
                  <Globe className="h-8 w-8 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Browsing</h3>
                  <p className="text-gray-600">Earn coins by browsing various websites.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border-4 border-gray-800">
                <div className="text-center">
                  <h4 className="text-3xl font-bold text-gray-900 mb-4">Browse Now</h4>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="text-orange-500 font-bold">120+ ads online</div>
                <div className="text-orange-500 font-bold">Earn up to $0.03 per click</div>
              </div>
            </div>
          </div>

          {/* Right Side - Gaming */}
          <div className="space-y-8">
            {/* Gaming Section */}
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-emerald-100 p-4 rounded-2xl">
                  <Gamepad2 className="h-8 w-8 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Gaming</h3>
                  <p className="text-gray-600">Play free games on your phone and get coins for completing various in-game steps.</p>
                </div>
              </div>

              <div className="text-orange-500 font-bold mb-6">50+ online games available</div>

              {/* Game Cards */}
              <div className="grid grid-cols-5 gap-4">
                {getVisibleGames().map((game, index) => (
                  <div
                    key={`${game.id}-${currentGameIndex}`}
                    className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="aspect-square">
                      <img
                        src={game.image}
                        alt={game.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-3">
                      <h5 className="font-bold text-gray-900 text-sm mb-1 truncate">
                        {game.title}
                      </h5>
                      <p className="text-emerald-600 font-bold text-lg">
                        {game.reward}
                      </p>
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