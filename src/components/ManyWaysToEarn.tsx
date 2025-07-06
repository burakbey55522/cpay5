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
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
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
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden transform hover:scale-105 transition-all duration-300">
                {/* Browser Header */}
                <div className="bg-gray-100 px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center space-x-3">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="flex-1 bg-white rounded-lg px-4 py-2 ml-4">
                      <span className="text-sm text-gray-500">taskearn.com/browse</span>
                    </div>
                  </div>
                </div>
                
                {/* Browser Content */}
                <div className="p-16 text-center bg-gradient-to-br from-emerald-500 to-blue-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative z-10">
                    <h4 className="text-4xl font-black text-white mb-4">Browse Now</h4>
                    <p className="text-emerald-100 text-lg font-medium">Click ads and earn instantly</p>
                    <div className="mt-6 inline-flex items-center space-x-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-white font-bold">120+ Live Ads Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Browsing Info */}
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-emerald-100 p-4 rounded-2xl">
                    <Globe className="h-8 w-8 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">Browsing</h3>
                    <p className="text-gray-600 text-lg">Earn coins by browsing various websites.</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl p-6 border border-emerald-200 text-center shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-3xl font-black text-emerald-600 mb-2">120+</div>
                    <div className="text-emerald-700 font-bold">ads online</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 border border-emerald-200 text-center shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-3xl font-black text-emerald-600 mb-2">Earn up to $0.03 per click</div>
                    <div className="text-emerald-700 font-bold">per click</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gaming Section */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4 mb-8">
              <div className="bg-blue-100 p-4 rounded-2xl">
                <Gamepad2 className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">Gaming</h3>
                <p className="text-gray-600 text-lg">Play free games on your phone and get coins for completing various in-game steps.</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-100 to-purple-100 px-6 py-3 rounded-full inline-block mb-8">
              <span className="text-blue-700 font-bold text-lg">50+ online games available</span>
            </div>

            {/* Game Cards Swiper */}
            <div className="relative">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
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
                    spaceBetween: 16,
                  },
                  640: {
                    slidesPerView: 3,
                    spaceBetween: 18,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                  },
                }}
                className="gaming-swiper pb-4"
              >
                {gameTasks.map((game) => (
                  <SwiperSlide key={game.id}>
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer">
                      <div className="aspect-square relative overflow-hidden">
                        <img
                          src={game.image}
                          alt={game.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                          <span className="text-xs font-black text-emerald-600">HOT</span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h5 className="font-black text-gray-900 text-sm mb-2 truncate">
                          {game.title}
                        </h5>
                        <p className="text-emerald-600 font-black text-xl">
                          {game.reward}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManyWaysToEarn;