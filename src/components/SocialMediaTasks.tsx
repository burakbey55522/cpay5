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
      icon: <Star className="h-6 w-6 md:h-8 md:w-8" />,
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
      icon: <Send className="h-6 w-6 md:h-8 md:w-8" />,
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
      icon: <Shield className="h-6 w-6 md:h-8 md:w-8" />,
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
          helpful: 23,
          additionalReview: {
            business: 'Tech Support Service',
            rating: 5,
            review: 'Outstanding technical support! They solved my problem quickly and professionally.',
            helpful: 18
          }
        }
      }
    },
    {
      id: 4,
      platform: 'YouTube',
      icon: <MessageCircle className="h-6 w-6 md:h-8 md:w-8" />,
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
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-3 md:p-6">
            <div className="flex items-center space-x-2 md:space-x-3 mb-3 md:mb-4">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base">
                G
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm md:text-base">{task.mockup.content.business}</h4>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 md:h-4 md:w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
              {task.mockup.content.review}
            </p>
            <div className="mt-3 md:mt-4 flex items-center space-x-3 md:space-x-4 text-xs md:text-sm text-gray-500">
              <button className="flex items-center space-x-1 hover:text-blue-600">
                <ThumbsUp className="h-3 w-3 md:h-4 md:w-4" />
                <span>Helpful</span>
              </button>
              <button className="flex items-center space-x-1 hover:text-blue-600">
                <Share2 className="h-3 w-3 md:h-4 md:w-4" />
                <span>Share</span>
              </button>
            </div>
          </div>
        );
      
      case 'telegram':
        return (
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="p-3 md:p-4 flex items-center justify-between border-b border-gray-200">
              <div className="flex items-center space-x-2 md:space-x-3">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <Send className="h-4 w-4 md:h-5 md:w-5 text-white" />
                </div>
                <div>
                  <span className="font-semibold text-gray-900 text-sm md:text-base">{task.mockup.content.channel}</span>
                  <p className="text-xs md:text-sm text-gray-500">{task.mockup.content.members} members</p>
                </div>
              </div>
              <button className="bg-blue-500 text-white px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium">
                Join
              </button>
            </div>
            <div className="p-3 md:p-4">
              <div className="bg-gray-50 rounded-lg p-2 md:p-3 mb-3">
                <p className="text-gray-800 text-xs md:text-sm">{task.mockup.content.message}</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3 md:space-x-4">
                  <button className="flex items-center space-x-1 text-gray-600">
                    <span className="text-sm md:text-base">👍</span>
                    <span className="text-xs md:text-sm">{task.mockup.content.reactions}</span>
                  </button>
                  <button className="flex items-center space-x-1 text-gray-600">
                    <MessageCircle className="h-3 w-3 md:h-4 md:w-4" />
                    <span className="text-xs md:text-sm">Reply</span>
                  </button>
                </div>
                <button className="text-blue-500 text-xs md:text-sm">
                  <Share2 className="h-3 w-3 md:h-4 md:w-4" />
                </button>
              </div>
            </div>
          </div>
        );
      
      case 'trustpilot':
        return (
          <div className="space-y-3 md:space-y-4">
            {/* First Review */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-3 md:p-6">
              <div className="flex items-center space-x-2 md:space-x-3 mb-3 md:mb-4">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-green-600 rounded-full flex items-center justify-center">
                  <Shield className="h-4 w-4 md:h-5 md:w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm md:text-base">{task.mockup.content.business}</h4>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-3 w-3 md:h-4 md:w-4 ${i < task.mockup.content.rating ? 'text-green-500 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                    <span className="text-xs md:text-sm text-gray-600 ml-1">{task.mockup.content.rating}/5</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-xs md:text-sm leading-relaxed mb-3 md:mb-4">
                {task.mockup.content.review}
              </p>
              <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-gray-200 flex items-center space-x-4 md:space-x-6">
                <button className="flex items-center space-x-1 md:space-x-2 text-gray-600 hover:text-green-600">
                  <ThumbsUp className="h-3 w-3 md:h-4 md:w-4" />
                  <span className="text-xs md:text-sm">Helpful ({task.mockup.content.helpful})</span>
                </button>
                <button className="flex items-center space-x-1 md:space-x-2 text-gray-600 hover:text-green-600">
                  <Share2 className="h-3 w-3 md:h-4 md:w-4" />
                  <span className="text-xs md:text-sm">Share</span>
                </button>
              </div>
            </div>

            {/* Second Review - Hidden on mobile */}
            <div className="hidden md:block bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{task.mockup.content.additionalReview.business}</h4>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < task.mockup.content.additionalReview.rating ? 'text-green-500 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-1">{task.mockup.content.additionalReview.rating}/5</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                {task.mockup.content.additionalReview.review}
              </p>
              <div className="mt-4 pt-4 border-t border-gray-200 flex items-center space-x-6">
                <button className="flex items-center space-x-2 text-gray-600 hover:text-green-600">
                  <ThumbsUp className="h-4 w-4" />
                  <span>Helpful ({task.mockup.content.additionalReview.helpful})</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-green-600">
                  <Share2 className="h-4 w-4" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>
        );
      
      case 'youtube':
        return (
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="aspect-video bg-gray-900 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4">
                  <Play className="h-6 w-6 md:h-8 md:w-8 text-white ml-1" />
                </div>
                <p className="text-xs md:text-sm">Sample Task Video</p>
              </div>
            </div>
            <div className="p-3 md:p-4">
              <h4 className="font-semibold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">Sample Task Video</h4>
              <p className="text-xs md:text-sm text-gray-600 mb-1 md:mb-2">TaskEarn Official</p>
              <div className="flex items-center space-x-3 md:space-x-4 text-xs md:text-sm text-gray-500 mb-3 md:mb-4">
                <span>Watch and engage</span>
                <span>Earn money for actions</span>
              </div>
              <div className="flex items-center space-x-2 md:space-x-4">
                <button className="flex items-center space-x-1 md:space-x-2 bg-red-600 text-white px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm">
                  <ThumbsUp className="h-3 w-3 md:h-4 md:w-4" />
                  <span>Like</span>
                </button>
                <button className="flex items-center space-x-1 md:space-x-2 bg-gray-600 text-white px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm">
                  <span>Subscribe</span>
                </button>
                <button className="flex items-center space-x-1 md:space-x-2 bg-blue-600 text-white px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm">
                  <MessageCircle className="h-3 w-3 md:h-4 md:w-4" />
                  <span>Comment</span>
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
    <section className="py-12 md:py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Social Media <span className="text-indigo-600">Tasks</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Earn money by engaging with social media content across popular platforms. 
            Help businesses grow their online presence while earning real cash.
          </p>
        </div>

        {/* Tasks Grid */}
        <div className="space-y-8 md:space-y-12 mb-12 md:mb-16">
          {socialTasks.map((task, index) => (
            <div key={task.id} className={`grid lg:grid-cols-2 gap-6 lg:gap-12 items-start ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Task Info */}
              <div className={`${task.bgColor} rounded-2xl p-4 md:p-6 lg:p-8 border-2 ${task.borderColor} ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center space-x-3 md:space-x-4 mb-4 md:mb-6">
                  <div className={`bg-gradient-to-r ${task.color} p-3 md:p-4 rounded-2xl text-white`}>
                    {task.icon}
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900">{task.platform}</h3>
                    <p className="text-gray-600 text-sm md:text-base">{task.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
                  <div className="bg-white rounded-xl p-3 md:p-4 border border-gray-200">
                    <div className="flex items-center space-x-1 md:space-x-2 mb-1 md:mb-2">
                      <DollarSign className="h-4 w-4 md:h-5 md:w-5 text-emerald-500" />
                      <span className="font-bold text-emerald-600 text-sm md:text-base">{task.earnings}</span>
                    </div>
                    <p className="text-xs md:text-sm text-gray-600">Per task</p>
                  </div>
                  <div className="bg-white rounded-xl p-3 md:p-4 border border-gray-200">
                    <div className="flex items-center space-x-1 md:space-x-2 mb-1 md:mb-2">
                      <Clock className="h-4 w-4 md:h-5 md:w-5 text-blue-500" />
                      <span className="font-bold text-blue-600 text-sm md:text-base">{task.timeEstimate}</span>
                    </div>
                    <p className="text-xs md:text-sm text-gray-600">Time needed</p>
                  </div>
                </div>

                <div className="mb-4 md:mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm md:text-base">Available Tasks:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {task.tasks.map((taskType, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span className="text-xs md:text-sm text-gray-700">{taskType}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button className={`w-full bg-gradient-to-r ${task.color} text-white py-3 px-4 lg:px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 text-sm md:text-base`}>
                  <span>Start {task.platform} Tasks</span>
                  <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
                </button>
              </div>

              {/* Platform Mockup */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                {renderMockup(task)}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SocialMediaTasks;