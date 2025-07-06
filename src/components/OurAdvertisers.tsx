import React from 'react';

const OurAdvertisers: React.FC = () => {
  const advertisers = [
    {
      name: 'TikTok',
      logo: 'https://logos-world.net/wp-content/uploads/2021/02/TikTok-Logo.png'
    },
    {
      name: 'Alibaba',
      logo: 'https://logos-world.net/wp-content/uploads/2020/09/Alibaba-Logo.png'
    },
    {
      name: 'BitDeer',
      logo: 'https://cryptologos.cc/logos/bitdeer-btdr-logo.png'
    },
    {
      name: 'BitFuFu',
      logo: 'https://assets.coingecko.com/coins/images/31277/large/bitfufu.png'
    },
    {
      name: 'Bybit',
      logo: 'https://logos-world.net/wp-content/uploads/2022/02/Bybit-Logo.png'
    },
    {
      name: 'eToro',
      logo: 'https://logos-world.net/wp-content/uploads/2021/03/eToro-Logo.png'
    },
    {
      name: 'HBO Max',
      logo: 'https://logos-world.net/wp-content/uploads/2022/01/HBO-Max-Logo.png'
    },
    {
      name: 'Indodax',
      logo: 'https://cryptologos.cc/logos/indodax-indodax-logo.png'
    },
    {
      name: 'OKX',
      logo: 'https://cryptologos.cc/logos/okx-okx-logo.png'
    },
    {
      name: 'Binance',
      logo: 'https://cryptologos.cc/logos/binance-coin-bnb-logo.png'
    },
    {
      name: 'Coinbase',
      logo: 'https://logos-world.net/wp-content/uploads/2021/02/Coinbase-Logo.png'
    },
    {
      name: 'Netflix',
      logo: 'https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png'
    },
    {
      name: 'Spotify',
      logo: 'https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png'
    },
    {
      name: 'Amazon',
      logo: 'https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png'
    },
    {
      name: 'Google',
      logo: 'https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png'
    },
    {
      name: 'Microsoft',
      logo: 'https://logos-world.net/wp-content/uploads/2020/09/Microsoft-Logo.png'
    },
    {
      name: 'Apple',
      logo: 'https://logos-world.net/wp-content/uploads/2020/04/Apple-Logo.png'
    },
    {
      name: 'Meta',
      logo: 'https://logos-world.net/wp-content/uploads/2021/10/Meta-Logo.png'
    }
  ];

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our <span className="text-emerald-600">Advertisers</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by leading global brands and companies worldwide
          </p>
        </div>

        {/* Infinite Scrolling Logos */}
        <div className="relative">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
          
          <div className="flex overflow-hidden">
            <div className="flex animate-scroll-left space-x-12 items-center">
              {/* First set of logos */}
              {advertisers.map((advertiser, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 w-32 h-16 flex items-center justify-center bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300 group"
                >
                  <img
                    src={advertiser.logo}
                    alt={`${advertiser.name} logo`}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 p-2"
                  />
                </div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {advertisers.map((advertiser, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 w-32 h-16 flex items-center justify-center bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300 group"
                >
                  <img
                    src={advertiser.logo}
                    alt={`${advertiser.name} logo`}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 p-2"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
              <div className="text-2xl font-bold text-emerald-600 mb-1">500+</div>
              <div className="text-sm text-gray-600">Global Partners</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
              <div className="text-2xl font-bold text-blue-600 mb-1">190+</div>
              <div className="text-sm text-gray-600">Countries</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
              <div className="text-2xl font-bold text-purple-600 mb-1">$2.5M</div>
              <div className="text-sm text-gray-600">Monthly Ad Spend</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
              <div className="text-2xl font-bold text-orange-600 mb-1">99.9%</div>
              <div className="text-sm text-gray-600">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurAdvertisers;