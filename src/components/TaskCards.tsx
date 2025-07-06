import React from 'react';
import { 
  Play, 
  Eye, 
  Share2, 
  Star, 
  MessageCircle, 
  Edit3, 
  Clock,
  DollarSign,
  ArrowRight
} from 'lucide-react';

interface Task {
  id: number;
  title: string;
  description: string;
  earnings: string;
  timeEstimate: string;
  icon: React.ReactNode;
  category: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  popularityScore: number;
}

const TaskCards: React.FC = () => {
  const tasks: Task[] = [
    {
      id: 1,
      title: 'Watch & Earn',
      description: 'Watch promotional videos and earn money for each completed view',
      earnings: '$0.25 - $2.00',
      timeEstimate: '1-5 min',
      icon: <Play className="h-6 w-6" />,
      category: 'Entertainment',
      difficulty: 'Easy',
      popularityScore: 95
    },
    {
      id: 2,
      title: 'App Reviews',
      description: 'Test mobile apps and write honest reviews about your experience',
      earnings: '$1.50 - $5.00',
      timeEstimate: '10-15 min',
      icon: <Star className="h-6 w-6" />,
      category: 'Testing',
      difficulty: 'Medium',
      popularityScore: 88
    },
    {
      id: 3,
      title: 'Social Sharing',
      description: 'Share content on your social media platforms and earn per engagement',
      earnings: '$0.50 - $3.00',
      timeEstimate: '2-5 min',
      icon: <Share2 className="h-6 w-6" />,
      category: 'Social Media',
      difficulty: 'Easy',
      popularityScore: 92
    },
    {
      id: 4,
      title: 'Survey Participation',
      description: 'Complete market research surveys and share your valuable opinions',
      earnings: '$2.00 - $8.00',
      timeEstimate: '15-30 min',
      icon: <MessageCircle className="h-6 w-6" />,
      category: 'Research',
      difficulty: 'Medium',
      popularityScore: 85
    },
    {
      id: 5,
      title: 'Content Creation',
      description: 'Write articles, create posts, or produce content for various platforms',
      earnings: '$5.00 - $25.00',
      timeEstimate: '30-60 min',
      icon: <Edit3 className="h-6 w-6" />,
      category: 'Creative',
      difficulty: 'Hard',
      popularityScore: 78
    },
    {
      id: 6,
      title: 'Website Visits',
      description: 'Visit websites, browse pages, and earn money for genuine traffic',
      earnings: '$0.10 - $1.00',
      timeEstimate: '30 sec - 2 min',
      icon: <Eye className="h-6 w-6" />,
      category: 'Browsing',
      difficulty: 'Easy',
      popularityScore: 90
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Tasks
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from hundreds of tasks tailored to your skills and interests. 
            Start earning money today with these popular opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-emerald-500 p-3 rounded-xl text-white group-hover:bg-emerald-600 transition-colors">
                    {task.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{task.title}</h3>
                    <p className="text-sm text-gray-500">{task.category}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1 text-sm text-gray-500">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span>{task.popularityScore}% completion rate</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {task.description}
              </p>

              {/* Earnings & Time */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-5 w-5 text-emerald-500" />
                  <span className="font-bold text-emerald-600">{task.earnings}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-500">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">{task.timeEstimate}</span>
                </div>
              </div>

              {/* Difficulty Badge */}
              <div className="flex items-center justify-between mb-6">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(task.difficulty)}`}>
                  {task.difficulty}
                </span>
                <div className="flex items-center space-x-1">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-emerald-500 h-2 rounded-full" 
                      style={{ width: `${task.popularityScore}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button className="w-full bg-emerald-500 text-white py-3 px-6 rounded-xl hover:bg-emerald-600 transition-colors font-semibold flex items-center justify-center space-x-2 group">
                <span>Start Task</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* View All Tasks Button */}
        <div className="text-center mt-12">
          <button className="border-2 border-emerald-500 text-emerald-600 px-8 py-4 rounded-xl hover:bg-emerald-50 transition-colors font-semibold text-lg">
            View All 850+ Tasks
          </button>
        </div>
      </div>
    </section>
  );
};

export default TaskCards;