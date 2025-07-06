import React from 'react';
import { Globe, Gamepad2 } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

interface GameTask {
  id: number;
  title: string;
  image: string;
  reward: string;
}

const ManyWaysToEarn: React.FC = () => {
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
    },
    {
      id: 6,
      title: 'War Path',
      image: 'https://www.coinpayu.com/static/newImg/index/offer3.png',
      reward: '$89'
    },
    {
      id: 7,
      title: 'Coin Master',
      image: 'https://www.coinpayu.com/static/newImg/index/offer1.jpg',
      reward: '$156'
    },
    {
      id: 8,
      title: 'Puzzle Game',
      image: 'https://www.coinpayu.com/static/newImg/index/offer2.jpg',
      reward: '$67'
    }
  ];

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
            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-3xl p-8 border border-emerald-100">
              <div className="flex items-center space-x-4 mb-8">
                <div className="bg-white p-4 rounded-2xl shadow-lg border border-emerald-200">
                  <Globe className="h-8 w-8 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Browsing</h3>
                  <p className="text-gray-600">Earn coins by browsing various websites.</p>
                </div>
              </div>

              {/* Browser Mockup */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                {/* Browser Header */}
                <div className="bg-gray-100 px-4 py-3 border-b border-gray-200">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="flex-1 bg-white rounded-md px-3 py-1 ml-4">
                      <span className="text-sm text-gray-500">taskearn.com/browse</span>
                    </div>
                  </div>
                </div>
                
                {/* Browser Content */}
                <div className="p-8 text-center bg-gradient-to-br from-emerald-500 to-blue-600">
                  <h4 className="text-3xl font-bold text-white mb-2">Browse Now</h4>
                  <p className="text-emerald-100">Click ads and earn instantly</p>
                  <div className="mt-4 inline-flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white text-sm font-medium">Live Ads Available</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 border border-emerald-200 text-center">
                  <div className="text-2xl font-bold text-emerald-600">120+</div>
                  <div className="text-sm text-gray-600">ads online</div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-emerald-200 text-center">
                  <div className="text-2xl font-bold text-emerald-600">$0.03</div>
                  <div className="text-sm text-gray-600">per click</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Gaming */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-blue-100 p-4 rounded-2xl">
                  <Gamepad2 className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Gaming</h3>
                  <p className="text-gray-600">Play free games on your phone and get coins for completing various in-game steps.</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full inline-block mb-6">
                <span className="text-blue-700 font-bold">50+ online games available</span>
              </div>

              {/* Game Cards Swiper */}
              <div className="relative">
                <Swiper
                  modules={[Autoplay]}
                  spaceBetween={16}
                  slidesPerView={5}
                  autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  speed={1000}
                  breakpoints={{
                    320: {
                      slidesPerView: 2,
                      spaceBetween: 12,
                    },
                    640: {
                      slidesPerView: 3,
                      spaceBetween: 14,
                    },
                    768: {
                      slidesPerView: 4,
                      spaceBetween: 16,
                    },
                    1024: {
                      slidesPerView: 5,
                      spaceBetween: 16,
                    },
                  }}
                  className="gaming-swiper"
                >
                  {gameTasks.map((game) => (
                    <SwiperSlide key={game.id}>
                      <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                        <div className="aspect-square relative overflow-hidden">
                          <img
                            src={game.image}
                            alt={game.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
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
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Gaming Stats */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 text-center border border-blue-200">
                  <div className="text-xl font-bold text-blue-600">50+</div>
                  <div className="text-xs text-gray-600">Games</div>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-4 text-center border border-emerald-200">
                  <div className="text-xl font-bold text-emerald-600">$5-250</div>
                  <div className="text-xs text-gray-600">Rewards</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 text-center border border-purple-200">
                  <div className="text-xl font-bold text-purple-600">Daily</div>
                  <div className="text-xs text-gray-600">New Tasks</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManyWaysToEarn;