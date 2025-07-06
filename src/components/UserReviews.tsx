import React from 'react';
import { Star, Users, TrendingUp, Shield, Clock } from 'lucide-react';

interface Review {
  id: number;
  username: string;
  country: string;
  countryCode: string;
  rating: number;
  review: string;
  verified: boolean;
}

const UserReviews: React.FC = () => {
  const reviews: Review[] = [
    {
      id: 1,
      username: 'Semanur7474',
      country: 'Turkey',
      countryCode: 'tr',
      rating: 5,
      review: 'Since I started using the TaskEarn website and I\'m very satisfied with it. Besides it is a trusty website it can also help beginners to start earning by just doing simple tasks and it also provides them some passive income.',
      verified: true
    },
    {
      id: 2,
      username: 'bankai3',
      country: 'USA',
      countryCode: 'us',
      rating: 5,
      review: 'I like this paid link: TaskEarn.com, I will always recommend it, it meets all your payments without delay and in the time they tell you it is an excellent page and very easy to handle.',
      verified: true
    },
    {
      id: 3,
      username: 'alfonz',
      country: 'Germany',
      countryCode: 'de',
      rating: 5,
      review: 'Using CPU since 12/22, sometimes withdrawal requests fail in pending state but in the end all payments were processed correct and in 3/4 cases within 5 - 10 Minutes. Received over 700usd since sign up - from offer earnings and daily contest rewards.',
      verified: true
    },
    {
      id: 4,
      username: 'kingkay47',
      country: 'Germany',
      countryCode: 'de',
      rating: 5,
      review: 'My first withdrawals and they in no doubt really pays.. a very legit site even on holidays they pay you.. attached here with the payment i got from them. cheers and more power TaskEarn.',
      verified: true
    },
    {
      id: 5,
      username: 'maria_santos',
      country: 'Brazil',
      countryCode: 'br',
      rating: 5,
      review: 'TaskEarn has been amazing for earning extra income. The tasks are simple and payments are always on time. I\'ve earned over $500 in just 3 months!',
      verified: true
    },
    {
      id: 6,
      username: 'alex_chen',
      country: 'Canada',
      countryCode: 'ca',
      rating: 5,
      review: 'Fast withdrawals and great customer support. I received my payment within 24 hours every time. Highly recommend this platform for anyone looking to earn money online.',
      verified: true
    }
  ];

  const getFlagUrl = (countryCode: string) => {
    const flagPaths: { [key: string]: string } = {
      'tr': 'https://www.coinpayu.com/static/images/flags/tr.svg',
      'us': 'https://www.coinpayu.com/static/images/flags/us.svg',
      'de': 'https://www.coinpayu.com/static/images/flags/de.svg',
      'br': 'https://www.coinpayu.com/static/images/flags/br.svg',
      'ca': 'https://www.coinpayu.com/static/images/flags/ca.svg',
    };
    return flagPaths[countryCode] || 'https://www.coinpayu.com/static/images/flags/us.svg';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            See what our <span className="text-orange-500">members say</span>
          </h2>
          
          {/* Trustpilot-style Rating */}
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-green-500 fill-current" />
              ))}
            </div>
            <span className="text-lg font-semibold text-gray-900">Score: 4.9</span>
            <span className="text-gray-600">|</span>
            <span className="text-gray-600">7,228 Reviews</span>
          </div>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied users earning money daily with TaskEarn
          </p>
        </div>

        {/* Reviews Grid - 6 Reviews */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              {/* Review Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200">
                    <img 
                      src={getFlagUrl(review.countryCode)}
                      alt={`${review.country} Flag`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{review.username}</div>
                    <div className="text-sm text-gray-500">{review.country}</div>
                  </div>
                </div>
                
                {review.verified && (
                  <div className="flex items-center space-x-1 bg-green-100 px-2 py-1 rounded-full">
                    <Shield className="h-4 w-4 text-green-600" />
                    <span className="text-xs font-medium text-green-600">Verified</span>
                  </div>
                )}
              </div>

              {/* Star Rating */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-600">{review.rating}/5</span>
              </div>

              {/* Review Text */}
              <p className="text-gray-700 leading-relaxed text-sm">
                {review.review}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default UserReviews;