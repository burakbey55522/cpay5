import React, { useEffect, useRef } from 'react';
import { Play } from 'lucide-react';

const ManyWaysToEarn: React.FC = () => {
  const sliderRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const interval = setInterval(() => {
      const currentLeft = parseInt(slider.style.left || '0');
      const newLeft = currentLeft - 135;
      
      // Reset when we've moved through all items
      if (Math.abs(newLeft) >= 135 * 6) {
        slider.style.left = '0px';
      } else {
        slider.style.left = `${newLeft}px`;
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const goToLogin = () => {
    console.log('Go to login');
  };

  return (
    <div className="v2-many-ways py-20 bg-gradient-to-br from-orange-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Many ways to earn</h2>
        
        {/* Browsing Section */}
        <div className="v2-many-ways-1 grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="v2-many-ways-1-left order-2 lg:order-1">
            <div className="v2-many-ways-1-left-box bg-white rounded-3xl shadow-2xl border-4 border-gray-800 overflow-hidden max-w-md mx-auto">
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
                
                <div>
                  <button 
                    onClick={goToLogin}
                    className="bg-orange-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors mb-4"
                  >
                    Browse now
                  </button>
                  <p className="text-gray-600 text-sm">Browse the website to earn $0.03.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="v2-many-ways-1-right order-1 lg:order-2 space-y-6">
            <span className="v2-many-ways-1-right-title text-3xl font-bold text-gray-900 block">Browsing</span>
            <p className="text-gray-600 text-lg">Earn coins by browsing various websites.</p>
            <div className="space-y-2">
              <span className="block text-orange-500 font-bold">120+ ads online</span>
              <span className="block text-orange-500 font-bold">Earn up to $0.03 per click</span>
            </div>
          </div>
        </div>

        {/* Gaming Section */}
        <div className="v2-many-ways-2 grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="v2-many-ways-2-left space-y-6">
            <span className="v2-many-ways-2-left-title text-3xl font-bold text-gray-900 block">Gaming</span>
            <p className="text-gray-600 text-lg">Play free games on your phone and get coins for completing various in-game steps.</p>
            <div>
              <span className="text-orange-500 font-bold">50+ online games available</span>
            </div>
          </div>
          
          <div className="v2-many-ways-2-right">
            <div className="v2-many-ways-2-right-box relative overflow-hidden">
              <ul 
                ref={sliderRef}
                className="flex transition-all duration-1000 ease-in-out"
                style={{ left: '0px' }}
              >
                <li className="flex-none w-32 mx-1">
                  <div onClick={goToLogin} className="cursor-pointer group">
                    <div className="relative">
                      <img 
                        src="https://www.coinpayu.com/static/newImg/index/offer2.jpg" 
                        alt="Monopoly Go" 
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <div className="v2-many-ways-2-right-play absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 rounded-lg">
                        <Play className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>
                  <b className="block text-sm font-bold text-gray-900 mt-2 truncate">Monopoly Go!</b>
                  <span className="block text-orange-500 font-bold">$254</span>
                </li>
                
                <li className="flex-none w-32 mx-1">
                  <div onClick={goToLogin} className="cursor-pointer group">
                    <div className="relative">
                      <img 
                        src="https://www.coinpayu.com/static/newImg/index/offer4.png" 
                        alt="AFK Journey" 
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <div className="v2-many-ways-2-right-play absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 rounded-lg">
                        <Play className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>
                  <b className="block text-sm font-bold text-gray-900 mt-2 truncate">AFK Journey.</b>
                  <span className="block text-orange-500 font-bold">$504</span>
                </li>
                
                <li className="flex-none w-32 mx-1">
                  <div onClick={goToLogin} className="cursor-pointer group">
                    <div className="relative">
                      <img 
                        src="https://www.coinpayu.com/static/newImg/index/offer5.png" 
                        alt="Mafia City" 
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <div className="v2-many-ways-2-right-play absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 rounded-lg">
                        <Play className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>
                  <b className="block text-sm font-bold text-gray-900 mt-2 truncate">Mafia City</b>
                  <span className="block text-orange-500 font-bold">$422</span>
                </li>
                
                <li className="flex-none w-32 mx-1">
                  <div onClick={goToLogin} className="cursor-pointer group">
                    <div className="relative">
                      <img 
                        src="https://www.coinpayu.com/static/newImg/index/offer6.jpg" 
                        alt="Candy Match" 
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <div className="v2-many-ways-2-right-play absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 rounded-lg">
                        <Play className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>
                  <b className="block text-sm font-bold text-gray-900 mt-2 truncate">Candy Match - Dream Factory - Android</b>
                  <span className="block text-orange-500 font-bold">$111</span>
                </li>
                
                <li className="flex-none w-32 mx-1">
                  <div onClick={goToLogin} className="cursor-pointer group">
                    <div className="relative">
                      <img 
                        src="https://www.coinpayu.com/static/newImg/index/offer7.jpg" 
                        alt="Dice Dreams" 
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <div className="v2-many-ways-2-right-play absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 rounded-lg">
                        <Play className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>
                  <b className="block text-sm font-bold text-gray-900 mt-2 truncate">Dice Dreams™️</b>
                  <span className="block text-orange-500 font-bold">$49</span>
                </li>
                
                <li className="flex-none w-32 mx-1">
                  <div onClick={goToLogin} className="cursor-pointer group">
                    <div className="relative">
                      <img 
                        src="https://www.coinpayu.com/static/newImg/index/offer8.jpg" 
                        alt="Grab A Toy" 
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <div className="v2-many-ways-2-right-play absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 rounded-lg">
                        <Play className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>
                  <b className="block text-sm font-bold text-gray-900 mt-2 truncate">Grab A Toy</b>
                  <span className="block text-orange-500 font-bold">$178</span>
                </li>

                {/* Duplicate items for seamless loop */}
                <li className="flex-none w-32 mx-1">
                  <div onClick={goToLogin} className="cursor-pointer group">
                    <div className="relative">
                      <img 
                        src="https://www.coinpayu.com/static/newImg/index/offer2.jpg" 
                        alt="Monopoly Go" 
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <div className="v2-many-ways-2-right-play absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 rounded-lg">
                        <Play className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>
                  <b className="block text-sm font-bold text-gray-900 mt-2 truncate">Monopoly Go!</b>
                  <span className="block text-orange-500 font-bold">$254</span>
                </li>
                
                <li className="flex-none w-32 mx-1">
                  <div onClick={goToLogin} className="cursor-pointer group">
                    <div className="relative">
                      <img 
                        src="https://www.coinpayu.com/static/newImg/index/offer4.png" 
                        alt="AFK Journey" 
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <div className="v2-many-ways-2-right-play absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 rounded-lg">
                        <Play className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>
                  <b className="block text-sm font-bold text-gray-900 mt-2 truncate">AFK Journey.</b>
                  <span className="block text-orange-500 font-bold">$504</span>
                </li>
                
                <li className="flex-none w-32 mx-1">
                  <div onClick={goToLogin} className="cursor-pointer group">
                    <div className="relative">
                      <img 
                        src="https://www.coinpayu.com/static/newImg/index/offer5.png" 
                        alt="Mafia City" 
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <div className="v2-many-ways-2-right-play absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 rounded-lg">
                        <Play className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>
                  <b className="block text-sm font-bold text-gray-900 mt-2 truncate">Mafia City</b>
                  <span className="block text-orange-500 font-bold">$422</span>
                </li>
                
                <li className="flex-none w-32 mx-1">
                  <div onClick={goToLogin} className="cursor-pointer group">
                    <div className="relative">
                      <img 
                        src="https://www.coinpayu.com/static/newImg/index/offer6.jpg" 
                        alt="Candy Match" 
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <div className="v2-many-ways-2-right-play absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 rounded-lg">
                        <Play className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>
                  <b className="block text-sm font-bold text-gray-900 mt-2 truncate">Candy Match - Dream Factory - Android</b>
                  <span className="block text-orange-500 font-bold">$111</span>
                </li>
                
                <li className="flex-none w-32 mx-1">
                  <div onClick={goToLogin} className="cursor-pointer group">
                    <div className="relative">
                      <img 
                        src="https://www.coinpayu.com/static/newImg/index/offer7.jpg" 
                        alt="Dice Dreams" 
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <div className="v2-many-ways-2-right-play absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 rounded-lg">
                        <Play className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>
                  <b className="block text-sm font-bold text-gray-900 mt-2 truncate">Dice Dreams™️</b>
                  <span className="block text-orange-500 font-bold">$49</span>
                </li>
                
                <li className="flex-none w-32 mx-1">
                  <div onClick={goToLogin} className="cursor-pointer group">
                    <div className="relative">
                      <img 
                        src="https://www.coinpayu.com/static/newImg/index/offer8.jpg" 
                        alt="Grab A Toy" 
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <div className="v2-many-ways-2-right-play absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 rounded-lg">
                        <Play className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>
                  <b className="block text-sm font-bold text-gray-900 mt-2 truncate">Grab A Toy</b>
                  <span className="block text-orange-500 font-bold">$178</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Trying Out Section */}
        <div className="v2-many-ways-3 grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="v2-many-ways-3-left">
            <div className="v2-many-ways-3-left-box">
              <ul className="grid grid-cols-2 gap-4">
                <li onClick={goToLogin} className="cursor-pointer group">
                  <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
                    <img 
                      src="https://www.coinpayu.com/static/newImg/index/trying_alibaba.png" 
                      alt="Alibaba" 
                      className="w-full h-24 object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                      <div className="bg-white rounded-full p-2">
                        <svg className="h-4 w-4 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </li>
                
                <li onClick={goToLogin} className="cursor-pointer group">
                  <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
                    <img 
                      src="https://www.coinpayu.com/static/newImg/index/trying_tiktok.png" 
                      alt="TikTok" 
                      className="w-full h-24 object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                      <div className="bg-white rounded-full p-2">
                        <svg className="h-4 w-4 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </li>
                
                <li onClick={goToLogin} className="cursor-pointer group">
                  <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
                    <img 
                      src="https://www.coinpayu.com/static/newImg/index/trying_coinbase.png" 
                      alt="Coinbase" 
                      className="w-full h-24 object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                      <div className="bg-white rounded-full p-2">
                        <svg className="h-4 w-4 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </li>
                
                <li onClick={goToLogin} className="cursor-pointer group">
                  <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
                    <img 
                      src="https://www.coinpayu.com/static/newImg/index/trying_campaign.png" 
                      alt="Campaign" 
                      className="w-full h-24 object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                      <div className="bg-white rounded-full p-2">
                        <svg className="h-4 w-4 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="v2-many-ways-3-right space-y-6">
            <span className="v2-many-ways-3-right-title text-3xl font-bold text-gray-900 block">Trying out</span>
            <p className="text-gray-600 text-lg">Help companies try out their apps and collect coin rewards.</p>
            <div className="space-y-2">
              <span className="block text-orange-500 font-bold">200+ apps online</span>
              <span className="block text-orange-500 font-bold">Earn up to $100 per trying out</span>
            </div>
          </div>
        </div>

        {/* Sharing Opinions Section */}
        <div className="v2-many-ways-4 grid lg:grid-cols-2 gap-16 items-center">
          <div className="v2-many-ways-4-left space-y-6">
            <span className="v2-many-ways-4-left-title text-3xl font-bold text-gray-900 block">Sharing opinions</span>
            <p className="text-gray-600 text-lg">Earn coins for sharing your opinions, and influence the next generate products or services of the world.</p>
            <div>
              <span className="text-orange-500 font-bold">Finish these within only 8 minutes to earn $1.00</span>
            </div>
          </div>
          
          <div className="v2-many-ways-4-right">
            <div className="v2-many-ways-4-right-box bg-white rounded-2xl shadow-lg p-6">
              <div className="v2-many-ways-4-right-survey mb-6">
                <p className="font-bold text-gray-900 mb-4">Q: Best survey here?</p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <span className="text-gray-700">A1:</span>
                    <span className="w-4 h-4 border-2 border-gray-300 rounded"></span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-gray-700">A2:</span>
                    <span className="w-4 h-4 border-2 border-gray-300 rounded"></span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-gray-700">A3:</span>
                    <span className="w-4 h-4 border-2 border-gray-300 rounded"></span>
                  </li>
                </ul>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-center justify-between">
                  <span className="text-gray-600">~ 3 min</span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-4 h-4 text-yellow-400">⭐</div>
                    ))}
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-gray-600">~ 5 min</span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-4 h-4 text-yellow-400">⭐</div>
                    ))}
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-gray-600">~ 8 min</span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-4 h-4 text-yellow-400">⭐</div>
                    ))}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManyWaysToEarn;