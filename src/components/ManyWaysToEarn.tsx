import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { 
  Globe, 
  Gamepad2, 
  Download, 
  MessageSquare, 
  Play, 
  Star,
  ArrowRight,
  Coins,
  Clock,
  Users,
  TrendingUp
} from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const ManyWaysToEarn: React.FC = () => {
  const gameOffers = [
    {
      id: 1,
      title: 'Monopoly Go!',
      image: 'https://www.coinpayu.com/static/newImg/index/offer2.jpg',
      reward: '$150',
      category: 'Strategy'
    },
    {
      id: 2,
      title: 'AFK Journey',
      image: 'https://www.coinpayu.com/static/newImg/index/offer4.png',
      reward: '$85',
      category: 'RPG'
    },
    {
      id: 3,
      title: 'Mafia City',
      image: 'https://www.coinpayu.com/static/newImg/index/offer5.png',
      reward: '$120',
      category: 'Strategy'
    },
    {
      id: 4,
      title: 'Candy Match',
      image: 'https://www.coinpayu.com/static/newImg/index/offer6.jpg',
      reward: '$45',
      category: 'Puzzle'
    },
    {
      id: 5,
      title: 'Dice Dreams',
      image: 'https://www.coinpayu.com/static/newImg/index/offer7.jpg',
      reward: '$75',
      category: 'Casual'
    },
    {
      id: 6,
      title: 'Grab A Toy',
      image: 'https://www.coinpayu.com/static/newImg/index/offer8.jpg',
      reward: '$95',
      category: 'Arcade'
    }
  ];

  const appOffers = [
    {
      name: 'Alibaba',
      image: 'https://www.coinpayu.com/static/newImg/index/trying_alibaba.png',
      reward: '$25'
    },
    {
      name: 'TikTok',
      image: 'https://www.coinpayu.com/static/newImg/index/trying_tiktok.png',
      reward: '$15'
    },
    {
      name: 'Coinbase',
      image: 'https://www.coinpayu.com/static/newImg/index/trying_coinbase.png',
      reward: '$35'
    },
    {
      name: 'Campaign',
      image: 'https://www.coinpayu.com/static/newImg/index/trying_campaign.png',
      reward: '$20'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Multiple Ways to <span className="text-emerald-600">Earn Money</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from various earning methods that fit your lifestyle and preferences
          </p>
        </div>

        {/* Browsing Section */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden max-w-md mx-auto">
                {/* Browser Header */}
                <div className="bg-gray-100 px-4 py-3 border-b border-gray-200">
                  <div className="flex items-center space-x-3">
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="flex-1 bg-white rounded-lg px-3 py-1">
                      <span className="text-sm text-gray-500">taskearn.com</span>
                    </div>
                  </div>
                </div>
                
                {/* Browser Content */}
                <div className="p-8 text-center min-h-[280px] flex flex-col justify-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full mx-auto flex items-center justify-center mb-3">
                      <Globe className="h-8 w-8 text-emerald-600" />
                    </div>
                    <div className="text-emerald-600 font-bold text-lg">0 visits completed</div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full mx-auto flex items-center justify-center mb-4">
                      <Coins className="h-10 w-10 text-emerald-600" />
                    </div>
                  </div>
                  
                  <button className="bg-emerald-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-600 transition-colors mb-3">
                    Start Browsing
                  </button>
                  <p className="text-gray-500 text-sm">Browse websites to earn up to $0.05 per visit</p>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Website Browsing</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Earn money by visiting and browsing various websites. Simple, quick, and profitable.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <div className="text-2xl font-bold text-emerald-600 mb-1">150+</div>
                  <div className="text-sm text-gray-600">Active websites</div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <div className="text-2xl font-bold text-emerald-600 mb-1">$0.05</div>
                  <div className="text-sm text-gray-600">Per website visit</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gaming Section */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <Gamepad2 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Mobile Gaming</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Play engaging mobile games and earn money by completing in-game objectives and milestones.
              </p>
              <div className="bg-white rounded-xl p-4 border border-gray-200">
                <div className="text-2xl font-bold text-blue-600 mb-1">60+</div>
                <div className="text-sm text-gray-600">Games available across all genres</div>
              </div>
            </div>
            
            <div className="relative">
              <Swiper
                modules={[Autoplay, Navigation]}
                spaceBetween={20}
                slidesPerView={4.2}
                breakpoints={{
                  320: {
                    slidesPerView: 2.2,
                    spaceBetween: 15
                  },
                  640: {
                    slidesPerView: 3.2,
                    spaceBetween: 15
                  },
                  768: {
                    slidesPerView: 4.2,
                    spaceBetween: 20
                  },
                  1024: {
                    slidesPerView: 4.5,
                    spaceBetween: 20
                  }
                }}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                loop={true}
                className="gaming-swiper"
              >
                {gameOffers.map((game) => (
                  <SwiperSlide key={game.id}>
                    <div className="group cursor-pointer">
                      <div className="relative bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300">
                        <div className="relative aspect-square w-full">
                          <img 
                            src={game.image} 
                            alt={game.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                              <Play className="h-4 w-4 text-gray-700" />
                            </div>
                          </div>
                          <div className="absolute top-2 right-2 bg-blue-500 text-white px-1.5 py-0.5 rounded text-xs font-bold">
                            {game.category}
                          </div>
                        </div>
                        <div className="p-3">
                          <h4 className="font-bold text-gray-900 mb-1 truncate text-sm">{game.title}</h4>
                          <div className="text-base font-bold text-emerald-600">{game.reward}</div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        {/* App Testing Section */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                {appOffers.map((app, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300">
                      <div className="aspect-square relative">
                        <img 
                          src={app.image} 
                          alt={app.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                            <Download className="h-6 w-6 text-gray-700" />
                          </div>
                        </div>
                      </div>
                      <div className="p-3 text-center">
                        <div className="font-bold text-gray-900 text-sm mb-1">{app.name}</div>
                        <div className="text-emerald-600 font-bold">{app.reward}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                  <Download className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">App Testing</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Help companies improve their apps by testing and providing valuable feedback.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <div className="text-2xl font-bold text-purple-600 mb-1">250+</div>
                  <div className="text-sm text-gray-600">Apps to test</div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <div className="text-2xl font-bold text-purple-600 mb-1">$50</div>
                  <div className="text-sm text-gray-600">Average per test</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Surveys Section */}
        <div className="mb-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Opinion Surveys</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Share your opinions and influence the next generation of products and services worldwide.
              </p>
              <div className="bg-white rounded-xl p-4 border border-gray-200">
                <div className="text-2xl font-bold text-indigo-600 mb-1">$2.50</div>
                <div className="text-sm text-gray-600">Average earnings per 10-minute survey</div>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8">
              <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-4">Sample Survey Question:</h4>
                <p className="text-gray-700 mb-4">Which social media platform do you use most frequently?</p>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="radio" name="survey" className="w-4 h-4 text-indigo-600" />
                    <span className="text-gray-700">Instagram</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="radio" name="survey" className="w-4 h-4 text-indigo-600" />
                    <span className="text-gray-700">TikTok</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="radio" name="survey" className="w-4 h-4 text-indigo-600" />
                    <span className="text-gray-700">Twitter/X</span>
                  </label>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                <h5 className="font-semibold text-gray-900 mb-3">Available Surveys:</h5>
                <div className="space-y-3">
                  {[
                    { time: '5 min', rating: 5 },
                    { time: '8 min', rating: 5 },
                    { time: '12 min', rating: 4 }
                  ].map((survey, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-600">~{survey.time}</span>
                      </div>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < survey.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-emerald-500 to-blue-600 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Earning?</h3>
          <p className="text-xl mb-8 text-emerald-50">Join thousands of users earning money daily</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors flex items-center space-x-2">
              <span>Get Started Now</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <div className="flex items-center space-x-4 text-emerald-100">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>2.1M+ Users</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5" />
                <span>$2.5M+ Paid</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManyWaysToEarn;