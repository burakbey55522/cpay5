import React from 'react';

const OurAdvertisers: React.FC = () => {
  const advertisers = [
    {
      name: 'BitFuFu',
      logo: 'https://www.coinpayu.com/static/newImg/index/advertiser/bitfufu_2.svg'
    },
    {
      name: 'Bybit',
      logo: 'https://www.coinpayu.com/static/newImg/index/advertiser/bybit_1.svg'
    },
    {
      name: 'eToro',
      logo: 'https://www.coinpayu.com/static/newImg/index/advertiser/etoro_2.svg'
    },
    {
      name: 'HBO Max',
      logo: 'https://www.coinpayu.com/static/newImg/index/advertiser/hbomax_2.svg'
    },
    {
      name: 'Indoex',
      logo: 'https://www.coinpayu.com/static/newImg/index/advertiser/indoex_2.svg'
    },
    {
      name: 'StormGain',
      logo: 'https://www.coinpayu.com/static/newImg/index/advertiser/stormgain_2.svg'
    },
    {
      name: 'TikTok',
      logo: 'https://www.coinpayu.com/static/newImg/index/advertiser/tiktok_2.svg'
    }
  ];

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Our <span className="text-emerald-600">Advertisers</span>
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by leading global brands and companies worldwide
          </p>
        </div>

        {/* Infinite Scrolling Logos */}
        <div className="relative">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 w-10 lg:w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-10 lg:w-20 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
          
          <div className="flex overflow-hidden">
            <div className="flex animate-scroll-left space-x-8 lg:space-x-16 items-center">
              {/* First set of logos */}
              {advertisers.map((advertiser, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 w-32 h-16 lg:w-48 lg:h-24 flex items-center justify-center bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 group hover:scale-105"
                >
                  <img
                    src={advertiser.logo}
                    alt={`${advertiser.name} logo`}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 p-2 lg:p-4"
                  />
                </div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {advertisers.map((advertiser, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 w-32 h-16 lg:w-48 lg:h-24 flex items-center justify-center bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 group hover:scale-105"
                >
                  <img
                    src={advertiser.logo}
                    alt={`${advertiser.name} logo`}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 p-2 lg:p-4"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurAdvertisers;