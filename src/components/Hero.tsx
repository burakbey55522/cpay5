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
  flag: string;
  time: string;
}

const Hero: React.FC = () => {
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <div className="space-y-10">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2 bg-emerald-100 px-4 py-2 rounded-full">
                    <TrendingUp className="h-5 w-5 text-emerald-600" />
                    <span className="font-bold text-emerald-700">2.1M+ Active Users</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full">
                    <Globe className="h-5 w-5 text-blue-600" />
                    <span className="font-bold text-blue-700">190+ Countries</span>
                  </div>
                </div>
                
                <h1 className="text-6xl lg:text-7xl font-black text-gray-900 leading-tight">
                  Earn Money
                  <span className="bg-gradient-to-r from-emerald-500 to-blue-600 bg-clip-text text-transparent block">
                    Doing Tasks
                  </span>
                </h1>
                
                <p className="text-2xl text-gray-600 leading-relaxed font-medium">
                  Complete simple tasks and earn real money instantly. 
                  <span className="text-emerald-600 font-bold"> No experience required.</span>
                </p>

                {/* Country and Earnings Info - Inline Style */}
                <div className="flex flex-wrap items-center gap-6 py-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-gray-200">
                      <img 
                        src="https://www.coinpayu.com/static/images/flags/tr.svg" 
                        alt="Turkey Flag"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-black">150+</span>
                    <span className="text-gray-700 font-medium">offers available in Turkey</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-5 w-5 text-emerald-600" />
                    <span className="text-emerald-600 font-black text-lg">Earn up to $150 per offer</span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="group bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-10 py-5 rounded-2xl hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 font-black text-xl shadow-2xl hover:shadow-emerald-500/25 transform hover:-translate-y-2 flex items-center justify-center space-x-3">
                  <Zap className="h-6 w-6" />
                  <span>Start Earning Now</span>
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Example Task Cards */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer">
                  <div className="aspect-square bg-gradient-to-br from-green-400 to-green-600 relative overflow-hidden">
                    <img 
                      src="https://www.coinpayu.com/static/newImg/index/offer2.jpg" 
                      alt="Monopoly Go Task"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                      <span className="text-xs font-black text-green-600">HOT</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-black text-gray-900 mb-1">Monopoly Go!</h3>
                    <p className="text-2xl font-black text-emerald-600">$150</p>
                    <p className="text-xs text-gray-500 font-medium">Gaming Task</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer">
                  <div className="aspect-square bg-gradient-to-br from-pink-400 to-purple-600 relative overflow-hidden">
                    <img 
                      src="https://www.coinpayu.com/static/newImg/index/offer3.png" 
                      alt="TikTok Install Task"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                      <span className="text-xs font-black text-pink-600">NEW</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-black text-gray-900 mb-1">TikTok Install</h3>
                    <p className="text-2xl font-black text-emerald-600">$2</p>
                    <p className="text-xs text-gray-500 font-medium">App Install</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer">
                  <div className="aspect-square bg-gradient-to-br from-gray-600 to-gray-800 relative overflow-hidden">
                    <img 
                      src="https://www.coinpayu.com/static/newImg/index/offer1.jpg" 
                      alt="Warpath Game Task"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                      <span className="text-xs font-black text-orange-600">TOP</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-black text-gray-900 mb-1">Warpath: Ace...</h3>
                    <p className="text-2xl font-black text-emerald-600">$85</p>
                    <p className="text-xs text-gray-500 font-medium">Strategy Game</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Interactive Task Showcase */}
            <div className="lg:pl-8">
              <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-black text-gray-900 mb-2">Featured Tasks</h3>
                  <p className="text-gray-600 font-medium">Choose your earning method</p>
                </div>
                
                {/* Current Featured Task */}
                <div className="mb-8">
                  <div className={`bg-gradient-to-r ${tasks[currentTaskIndex].color} rounded-2xl p-6 text-white transform transition-all duration-500`}>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-white/20 p-3 rounded-xl">
                        {tasks[currentTaskIndex].icon}
                      </div>
                      <div>
                        <h4 className="text-2xl font-black">{tasks[currentTaskIndex].title}</h4>
                        <p className="text-white/80 font-medium">{tasks[currentTaskIndex].category}</p>
                      </div>
                    </div>
                    <p className="text-white/90 mb-4 font-medium">{tasks[currentTaskIndex].description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black">{tasks[currentTaskIndex].earnings}</span>
                      <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg font-bold transition-colors">
                        Start Now
                      </button>
                    </div>
                  </div>
                </div>

                {/* Task Grid */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {tasks.slice(0, 6).map((task, index) => (
                    <div
                      key={task.id}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                        index === currentTaskIndex 
                          ? 'border-emerald-500 bg-emerald-50' 
                          : 'border-gray-200 hover:border-emerald-300 bg-white'
                      }`}
                      onClick={() => setCurrentTaskIndex(index)}
                    >
                      <div className={`bg-gradient-to-r ${task.color} p-2 rounded-lg inline-block mb-2`}>
                        <div className="text-white text-sm">
                          {task.icon}
                        </div>
                      </div>
                      <div className="text-xs font-bold text-gray-700">{task.title}</div>
                      <div className="text-xs text-emerald-600 font-bold">{task.earnings.split(' - ')[0]}</div>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-black text-emerald-600 mb-1">$847,392</div>
                    <div className="text-sm text-gray-600 font-medium">Paid This Month</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-blue-600 mb-1">850+</div>
                    <div className="text-sm text-gray-600 font-medium">Available Tasks</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Cashout Section */}
      <section className="py-8 bg-gradient-to-r from-emerald-500 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center space-x-3 mb-2">
              <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
              <h2 className="text-2xl font-black text-white">Live Cashouts</h2>
              <TrendingUp className="h-6 w-6 text-yellow-400" />
            </div>
            <p className="text-white/80 font-medium">Real payments happening right now</p>
          </div>

          <div className="overflow-hidden">
            <div className="flex space-x-4 animate-slide">
              {[...cashouts, ...cashouts].map((cashout, index) => (
                <div
                  key={`${cashout.id}-${index}`}
                  className="flex-none w-80 bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-white/20 shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full flex items-center justify-center">
                        <DollarSign className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="font-black text-gray-900">{cashout.username}</div>
                        <div className="flex items-center space-x-1 text-sm text-gray-600">
                          <span>{cashout.flag}</span>
                          <span className="font-medium">{cashout.country}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-black text-emerald-600">{cashout.amount}</div>
                      <div className="text-sm text-gray-500 font-medium">{cashout.time}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-6">
            <div className="inline-flex items-center space-x-4 text-white/90 font-medium">
              <span>💰 $847,392 paid this month</span>
              <span>•</span>
              <span>⚡ Next payout in 2 minutes</span>
              <span>•</span>
              <span>🌍 Available in 190+ countries</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;