import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Eye, 
  Share2, 
  Star, 
  MessageCircle, 
  Edit3,
  DollarSign,
  TrendingUp,
  Users,
  Globe,
  Zap,
  ArrowRight,
  CheckCircle,
  Clock
} from 'lucide-react';

interface Task {
  id: number;
  title: string;
  description: string;
  earnings: string;
  icon: React.ReactNode;
  category: string;
  color: string;
}

interface Cashout {
  id: number;
  username: string;
  amount: string;
  country: string;
  countryCode: string;
  time: string;
}

const Hero: React.FC = () => {
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [cashouts, setCashouts] = useState<Cashout[]>([
    { id: 1, username: 'alex_m', amount: '$12.45', country: 'USA', countryCode: 'us', time: '2m ago' },
    { id: 2, username: 'sarah_k', amount: '$8.90', country: 'UK', countryCode: 'gb', time: '3m ago' },
    { id: 3, username: 'carlos_r', amount: '$15.30', country: 'Spain', countryCode: 'es', time: '5m ago' },
    { id: 4, username: 'maria_s', amount: '$7.25', country: 'Brazil', countryCode: 'br', time: '6m ago' },
    { id: 5, username: 'yuki_t', amount: '$22.10', country: 'Japan', countryCode: 'jp', time: '8m ago' },
    { id: 6, username: 'ahmed_h', amount: '$9.75', country: 'UAE', countryCode: 'ae', time: '10m ago' },
    { id: 7, username: 'lisa_w', amount: '$11.60', country: 'Germany', countryCode: 'de', time: '12m ago' },
    { id: 8, username: 'raj_p', amount: '$6.40', country: 'India', countryCode: 'in', time: '14m ago' },
    { id: 9, username: 'pierre_l', amount: '$18.95', country: 'France', countryCode: 'fr', time: '16m ago' },
    { id: 10, username: 'anna_k', amount: '$13.20', country: 'Poland', countryCode: 'pl', time: '18m ago' },
    { id: 11, username: 'mehmet_y', amount: '$11.85', country: 'Turkey', countryCode: 'tr', time: '20m ago' },
    { id: 12, username: 'sofia_m', amount: '$9.30', country: 'Bulgaria', countryCode: 'bg', time: '22m ago' },
  ]);

  const tasks: Task[] = [
    {
      id: 1,
      title: 'Watch Videos',
      description: 'Watch promotional videos and earn instantly',
      earnings: '$0.25 - $2.00',
      icon: <Play className="h-6 w-6" />,
      category: 'Entertainment',
      color: 'from-red-400 to-red-600'
    },
    {
      id: 2,
      title: 'App Reviews',
      description: 'Test apps and write honest reviews',
      earnings: '$1.50 - $5.00',
      icon: <Star className="h-6 w-6" />,
      category: 'Testing',
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      id: 3,
      title: 'Social Sharing',
      description: 'Share content on social platforms',
      earnings: '$0.50 - $3.00',
      icon: <Share2 className="h-6 w-6" />,
      category: 'Social',
      color: 'from-blue-400 to-blue-600'
    },
    {
      id: 4,
      title: 'Surveys',
      description: 'Complete market research surveys',
      earnings: '$2.00 - $8.00',
      icon: <MessageCircle className="h-6 w-6" />,
      category: 'Research',
      color: 'from-purple-400 to-purple-600'
    },
    {
      id: 5,
      title: 'Content Writing',
      description: 'Create articles and blog posts',
      earnings: '$5.00 - $25.00',
      icon: <Edit3 className="h-6 w-6" />,
      category: 'Creative',
      color: 'from-green-400 to-green-600'
    },
    {
      id: 6,
      title: 'Website Visits',
      description: 'Visit websites and browse pages',
      earnings: '$0.10 - $1.00',
      icon: <Eye className="h-6 w-6" />,
      category: 'Browsing',
      color: 'from-indigo-400 to-indigo-600'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTaskIndex((prev) => (prev + 1) % tasks.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [tasks.length]);

  const getFlagUrl = (countryCode: string) => {
    return `https://upload.wikimedia.org/wikipedia/commons/thumb/${getFlagPath(countryCode)}`;
  };

  const getFlagPath = (countryCode: string) => {
    const flagPaths: { [key: string]: string } = {
      'us': 'a/a4/Flag_of_the_United_States.svg/320px-Flag_of_the_United_States.svg.png',
      'gb': '8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/320px-Flag_of_the_United_Kingdom_%283-5%29.svg.png',
      'es': '9/9a/Flag_of_Spain.svg/320px-Flag_of_Spain.svg.png',
      'br': '0/05/Flag_of_Brazil.svg/320px-Flag_of_Brazil.svg.png',
      'jp': '9/9e/Flag_of_Japan.svg/320px-Flag_of_Japan.svg.png',
      'ae': 'c/cb/Flag_of_the_United_Arab_Emirates.svg/320px-Flag_of_the_United_Arab_Emirates.svg.png',
      'de': 'b/ba/Flag_of_Germany.svg/320px-Flag_of_Germany.svg.png',
      'in': '4/41/Flag_of_India.svg/320px-Flag_of_India.svg.png',
      'fr': 'c/c3/Flag_of_France.svg/320px-Flag_of_France.svg.png',
      'pl': '1/12/Flag_of_Poland.svg/320px-Flag_of_Poland.svg.png',
      'tr': 'b/b4/Flag_of_Turkey.svg/320px-Flag_of_Turkey.svg.png',
      'bg': '9/9a/Flag_of_Bulgaria.svg/320px-Flag_of_Bulgaria.svg.png',
    };
    return flagPaths[countryCode] || 'a/a4/Flag_of_the_United_States.svg/320px-Flag_of_the_United_States.svg.png';
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-br from-emerald-50 via-white to-blue-50 min-h-screen flex items-center relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse"></div>
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div className="space-y-6 lg:space-y-10">
              <div className="space-y-4 lg:space-y-6">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <div className="flex items-center space-x-1 sm:space-x-2 bg-emerald-100 px-2 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 rounded-full">
                    <TrendingUp className="h-5 w-5 text-emerald-600" />
                    <span className="font-bold text-emerald-700 text-xs sm:text-sm lg:text-base">2.1M+ Users</span>
                  </div>
                  <div className="flex items-center space-x-1 sm:space-x-2 bg-blue-100 px-2 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 rounded-full">
                    <Globe className="h-5 w-5 text-blue-600" />
                    <span className="font-bold text-blue-700 text-xs sm:text-sm lg:text-base">190+ Countries</span>
                  </div>
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 leading-tight">
                  Earn Money
                  <span className="bg-gradient-to-r from-emerald-500 to-blue-600 bg-clip-text text-transparent block">
                    Doing Tasks
                  </span>
                </h1>
                
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed font-medium">
                  Complete simple tasks and earn real money instantly. 
                  <span className="text-emerald-600 font-bold"> No experience required.</span>
                </p>

                {/* Country and Earnings Info - Inline Style */}
                <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 sm:gap-4 lg:gap-6 py-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden border-2 border-gray-200">
                      <img 
                        src="https://www.coinpayu.com/static/images/flags/tr.svg" 
                        alt="Turkey Flag"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="bg-orange-100 text-orange-600 px-2 py-0.5 sm:py-1 rounded-full text-xs font-black">150+</span>
                    <span className="text-gray-700 font-medium text-xs sm:text-sm lg:text-base">offers in Turkey</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600" />
                    <span className="text-emerald-600 font-black text-xs sm:text-sm lg:text-lg">Up to $150 per offer</span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
                <button className="group bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-3 sm:py-4 lg:px-10 lg:py-5 rounded-2xl hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 font-black text-base sm:text-lg lg:text-xl shadow-2xl hover:shadow-emerald-500/25 transform hover:-translate-y-2 flex items-center justify-center space-x-2 sm:space-x-3">
                  <Zap className="h-5 w-5 sm:h-6 sm:w-6" />
                  <span>Start Earning Now</span>
                  <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Example Task Cards */}
              <div className="grid grid-cols-3 sm:grid-cols-3 gap-2 sm:gap-4 lg:gap-6 pt-6 lg:pt-8">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer">
                  <div className="aspect-square bg-gradient-to-br from-green-400 to-green-600 relative overflow-hidden h-20 sm:h-auto">
                    <img 
                      src="https://www.coinpayu.com/static/newImg/index/offer2.jpg" 
                      alt="Monopoly Go Task"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                    <div className="absolute top-1 right-1 sm:top-3 sm:right-3 bg-white/90 backdrop-blur-sm px-1 py-0.5 sm:px-2 sm:py-1 rounded-full">
                      <span className="text-xs font-black text-green-600">HOT</span>
                    </div>
                  </div>
                  <div className="p-1.5 sm:p-3 lg:p-4">
                    <h3 className="font-black text-gray-900 mb-0.5 sm:mb-1 text-xs sm:text-sm lg:text-base truncate">Monopoly Go!</h3>
                    <p className="text-sm sm:text-lg lg:text-2xl font-black text-emerald-600">$150</p>
                    <p className="text-xs text-gray-500 font-medium hidden sm:block">Gaming Task</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer">
                  <div className="aspect-square bg-gradient-to-br from-pink-400 to-purple-600 relative overflow-hidden h-20 sm:h-auto">
                    <img 
                      src="https://www.coinpayu.com/static/newImg/index/offer3.png" 
                      alt="TikTok Install Task"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                    <div className="absolute top-1 right-1 sm:top-3 sm:right-3 bg-white/90 backdrop-blur-sm px-1 py-0.5 sm:px-2 sm:py-1 rounded-full">
                      <span className="text-xs font-black text-pink-600">NEW</span>
                    </div>
                  </div>
                  <div className="p-1.5 sm:p-3 lg:p-4">
                    <h3 className="font-black text-gray-900 mb-0.5 sm:mb-1 text-xs sm:text-sm lg:text-base truncate">TikTok Install</h3>
                    <p className="text-sm sm:text-lg lg:text-2xl font-black text-emerald-600">$2</p>
                    <p className="text-xs text-gray-500 font-medium hidden sm:block">App Install</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer">
                  <div className="aspect-square bg-gradient-to-br from-gray-600 to-gray-800 relative overflow-hidden h-20 sm:h-auto">
                    <img 
                      src="https://www.coinpayu.com/static/newImg/index/offer1.jpg" 
                      alt="Warpath Game Task"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                    <div className="absolute top-1 right-1 sm:top-3 sm:right-3 bg-white/90 backdrop-blur-sm px-1 py-0.5 sm:px-2 sm:py-1 rounded-full">
                      <span className="text-xs font-black text-orange-600">TOP</span>
                    </div>
                  </div>
                  <div className="p-1.5 sm:p-3 lg:p-4">
                    <h3 className="font-black text-gray-900 mb-0.5 sm:mb-1 text-xs sm:text-sm lg:text-base truncate">Warpath: Ace...</h3>
                    <p className="text-sm sm:text-lg lg:text-2xl font-black text-emerald-600">$85</p>
                    <p className="text-xs text-gray-500 font-medium hidden sm:block">Strategy Game</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Interactive Task Showcase */}
            <div className="lg:pl-8 order-first lg:order-last mt-8 lg:mt-0">
              <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-6 lg:p-8 border border-white/20">
                <div className="text-center mb-6 lg:mb-8">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-900 mb-2">Featured Tasks</h3>
                  <p className="text-gray-600 font-medium">Choose your earning method</p>
                </div>
                
                {/* Current Featured Task */}
                <div className="mb-6 lg:mb-8">
                  <div className={`bg-gradient-to-r ${tasks[currentTaskIndex].color} rounded-2xl p-6 text-white transform transition-all duration-500`}>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-white/20 p-2 lg:p-3 rounded-xl">
                        {tasks[currentTaskIndex].icon}
                      </div>
                      <div>
                        <h4 className="text-lg sm:text-xl lg:text-2xl font-black">{tasks[currentTaskIndex].title}</h4>
                        <p className="text-white/80 font-medium">{tasks[currentTaskIndex].category}</p>
                      </div>
                    </div>
                    <p className="text-white/90 mb-4 font-medium">{tasks[currentTaskIndex].description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg sm:text-xl lg:text-2xl font-black">{tasks[currentTaskIndex].earnings}</span>
                      <button className="bg-white/20 hover:bg-white/30 px-3 py-1.5 sm:py-2 lg:px-4 lg:py-2 rounded-lg font-bold transition-colors text-sm lg:text-base">
                        Start Now
                      </button>
                    </div>
                  </div>
                </div>

                {/* Task Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 lg:gap-4 mb-6 lg:mb-8">
                  {tasks.slice(0, 6).map((task, index) => (
                    <div
                      key={task.id}
                      className={`p-3 sm:p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                        index === currentTaskIndex 
                          ? 'border-emerald-500 bg-emerald-50' 
                          : 'border-gray-200 hover:border-emerald-300 bg-white'
                      }`}
                      onClick={() => setCurrentTaskIndex(index)}
                    >
                      <div className={`bg-gradient-to-r ${task.color} p-1.5 lg:p-2 rounded-lg inline-block mb-2`}>
                        <div className="text-white text-xs sm:text-sm">
                          {task.icon}
                        </div>
                      </div>
                      <div className="text-xs font-bold text-gray-700">{task.title}</div>
                      <div className="text-xs text-emerald-600 font-bold">{task.earnings.split(' - ')[0]}</div>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-black text-emerald-600 mb-1">$847,392</div>
                    <div className="text-sm text-gray-600 font-medium">Paid This Month</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-black text-blue-600 mb-1">850+</div>
                    <div className="text-sm text-gray-600 font-medium">Available Tasks</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Cashout Section - Compact Ticker Style */}
      <section className="py-2 sm:py-3 bg-white border-y border-gray-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/50 to-blue-50/50"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-center mb-1 lg:mb-2">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-bold text-gray-700">Live Cashout</span>
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            </div>
          </div>

          <div className="overflow-hidden">
            <div className="flex space-x-3 sm:space-x-4 lg:space-x-8 animate-slide">
              {[...cashouts, ...cashouts].map((cashout, index) => (
                <div
                  key={`${cashout.id}-${index}`}
                  className="flex-none flex items-center space-x-1.5 sm:space-x-2 lg:space-x-3 bg-white/80 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 rounded-full border border-gray-200 shadow-sm"
                >
                  <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 rounded-full overflow-hidden border border-gray-200">
                    <img 
                      src={getFlagUrl(cashout.countryCode)}
                      alt={`${cashout.country} Flag`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-xs font-medium text-gray-700">{cashout.username}</span>
                  <span className="text-xs font-bold text-emerald-600">{cashout.amount}</span>
                  <span className="text-xs text-gray-500">{cashout.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;