import React from 'react';
import { 
  MessageCircle, 
  Star, 
  ThumbsUp, 
  Share2, 
  Heart, 
  Send,
  Shield,
  ArrowRight,
  DollarSign,
  Clock,
  Users,
  TrendingUp
} from 'lucide-react';

const SocialMediaTasks: React.FC = () => {
  const socialTasks = [
    {
      id: 1,
      platform: 'Google Reviews',
      icon: <Star className="h-8 w-8" />,
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      description: 'Write authentic reviews for businesses and services',
      earnings: '$2.50 - $8.00',
      timeEstimate: '5-10 min',
      tasks: [
        'Restaurant reviews',
        'Hotel experiences', 
        'Product feedback',
        'Service ratings'
      ],
      mockup: {
        type: 'review',
        content: {
          business: 'Delicious Pizza Restaurant',
          rating: 5,
          review: 'Amazing pizza with fresh ingredients! The service was excellent and the atmosphere was perfect for a family dinner. Highly recommended!'
        }
      }
    },
    {
      id: 2,
      platform: 'Telegram',
      icon: <Send className="h-8 w-8" />,
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      description: 'Join channels, groups and engage with Telegram content',
      earnings: '$0.50 - $3.00',
      timeEstimate: '2-5 min',
      tasks: [
        'Join channels',
        'Join groups',
        'Share posts',
        'React to messages'
      ],
      mockup: {
        type: 'telegram',
        content: {
          channel: 'Tech News Channel',
          message: 'Breaking: New AI technology breakthrough announced! 🚀',
          members: '125K',
          reactions: 847
        }
      }
    },
    {
      id: 3,
      platform: 'Trustpilot',
      icon: <Shield className="h-8 w-8" />,
      color: 'from-green-500 to-green-700',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      description: 'Write honest reviews for businesses and services',
      earnings: '$1.00 - $4.50',
      timeEstimate: '3-8 min',
      tasks: [
        'Business reviews',
        'Service ratings',
        'Product feedback',
        'Experience sharing'
      ],
      mockup: {
        type: 'trustpilot',
        content: {
          business: 'Online Shopping Store',
          rating: 4,
          review: 'Great customer service and fast delivery. The product quality exceeded my expectations. Highly recommend this store!',
          helpful: 23
        }
      }
    },
    {
      id: 4,
      platform: 'YouTube',
      icon: <MessageCircle className="h-8 w-8" />,
      color: 'from-red-500 to-red-700',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      description: 'Engage with YouTube content through verifiable actions',
      earnings: '$1.50 - $6.00',
      timeEstimate: '5-15 min',
      tasks: [
        'Like content',
        'Subscribe to channels',
        'Write comments',
        'Share videos'
      ],
      mockup: {
        type: 'youtube',
        content: {
          title: 'How to Cook Perfect Pasta',
          channel: 'Cooking Masters',
          views: '2.3M views',
          likes: '45K'
        }
      }
    }
  ];

  const renderMockup = (task: any) => {
    switch (task.mockup.type) {
      case 'review':
        return (
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                G
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">{task.mockup.content.business}</h4>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              {task.mockup.content.review}
            </p>
            <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
              <button className="flex items-center space-x-1 hover:text-blue-600">
                <ThumbsUp className="h-4 w-4" />
                <span>Helpful</span>
              </button>
              <button className="flex items-center space-x-1 hover:text-blue-600">
                <Share2 className="h-4 w-4" />
                <span>Share</span>
              </button>
            </div>
          </div>
        );
      
      case 'telegram':
        return (
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="p-4 flex items-center justify-between border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <Send className="h-5 w-5 text-white" />
                </div>
                <div>
                  <span className="font-semibold text-gray-900">{task.mockup.content.channel}</span>
                  <p className="text-sm text-gray-500">{task.mockup.content.members} members</p>
                </div>
              </div>
              <button className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Join
              </button>
            </div>
            <div className="p-4">
              <div className="bg-gray-50 rounded-lg p-3 mb-3">
                <p className="text-gray-800">{task.mockup.content.message}</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-1 text-gray-600">
                    <span>👍</span>
                    <span className="text-sm">{task.mockup.content.reactions}</span>
                  </button>
                  <button className="flex items-center space-x-1 text-gray-600">
                    <MessageCircle className="h-4 w-4" />
                    <span className="text-sm">Reply</span>
                  </button>
                </div>
                <button className="text-blue-500 text-sm">
                  <Share2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        );
      
      case 'trustpilot':
        return (
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">{task.mockup.content.business}</h4>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < task.mockup.content.rating ? 'text-green-500 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-1">{task.mockup.content.rating}/5</span>
                </div>
              </div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              {task.mockup.content.review}
            </p>
            <div className="mt-4 pt-4 border-t border-gray-200 flex items-center space-x-6">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-green-600">
                <ThumbsUp className="h-4 w-4" />
                <span>Helpful ({task.mockup.content.helpful})</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-green-600">
                <Share2 className="h-4 w-4" />
                <span>Share</span>
              </button>
            </div>
          </div>
        );
      
      case 'youtube':
        return (
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="bg-black aspect-video flex items-center justify-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
              </div>
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-gray-900 mb-2">{task.mockup.content.title}</h4>
              <p className="text-sm text-gray-600 mb-2">{task.mockup.content.channel}</p>
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                <span>{task.mockup.content.views}</span>
                <span>{task.mockup.content.likes} likes</span>
              </div>
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                  <ThumbsUp className="h-4 w-4" />
                  <span>Like</span>
                </button>
                <button className="flex items-center space-x-2 bg-gray-600 text-white px-3 py-1 rounded-full text-sm">
                  <span>Subscribe</span>
                </button>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Social Media <span className="text-indigo-600">Tasks</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Earn money by engaging with social media content across popular platforms. 
            Help businesses grow their online presence while earning real cash.
          </p>
        </div>

        {/* Tasks Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {socialTasks.map((task, index) => (
            <div key={task.id} className="space-y-8">
              {/* Task Info */}
              <div className={`${task.bgColor} rounded-2xl p-8 border-2 ${task.borderColor}`}>
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`bg-gradient-to-r ${task.color} p-4 rounded-2xl text-white`}>
                    {task.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{task.platform}</h3>
                    <p className="text-gray-600">{task.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <div className="flex items-center space-x-2 mb-2">
                      <DollarSign className="h-5 w-5 text-emerald-500" />
                      <span className="font-bold text-emerald-600">{task.earnings}</span>
                    </div>
                    <p className="text-sm text-gray-600">Per task</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <div className="flex items-center space-x-2 mb-2">
                      <Clock className="h-5 w-5 text-blue-500" />
                      <span className="font-bold text-blue-600">{task.timeEstimate}</span>
                    </div>
                    <p className="text-sm text-gray-600">Time needed</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Available Tasks:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {task.tasks.map((taskType, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">{taskType}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button className={`w-full bg-gradient-to-r ${task.color} text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2`}>
                  <span>Start {task.platform} Tasks</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>

              {/* Platform Mockup */}
              <div className="lg:mt-0">
                {renderMockup(task)}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Social Media Impact</h3>
            <p className="text-gray-600">Help businesses grow while earning money</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">2.1M+</div>
              <div className="text-sm text-gray-600">Active social users</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">$485K</div>
              <div className="text-sm text-gray-600">Paid for social tasks</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">850+</div>
              <div className="text-sm text-gray-600">Daily social tasks</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">4.9/5</div>
              <div className="text-sm text-gray-600">User satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaTasks;