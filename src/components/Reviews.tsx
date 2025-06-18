import React from 'react';
import { Star, Quote } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: 'Sarah Mitchell',
      review: 'Amazing experience! The team at Aqua Motors helped us find the perfect family jet ski. Their financing options made it possible for us to get on the water this summer. Highly recommend!',
      rating: 5,
      location: 'Mississauga, ON'
    },
    {
      name: 'Mike Rodriguez',
      review: 'Professional service from start to finish. Bought a Sea-Doo RXP-X and couldn\'t be happier. The delivery was seamless and the jet ski was in perfect condition.',
      rating: 5,
      location: 'Toronto, ON'
    },
    {
      name: 'Jennifer Park',
      review: 'Great selection of jet skis and very knowledgeable staff. They took the time to explain all the features and helped me choose the right model for my needs. Will definitely return!',
      rating: 5,
      location: 'Oakville, ON'
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`h-5 w-5 ${
              index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Customer Reviews
          </h2>
          <p className="text-lg text-gray-600">
            See what our satisfied customers have to say about their experience with Aqua Motors
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-md relative">
              <Quote className="absolute top-4 left-4 h-8 w-8 text-blue-200" />

              <div className="relative z-10">
                {/* Rating */}
                <div className="mb-4">
                  {renderStars(review.rating)}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 mb-6 italic">
                  "{review.review}"
                </p>

                {/* Customer Info */}
                <div className="border-t pt-4">
                  <h4 className="font-bold text-gray-900">
                    {review.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {review.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Create Your Own Success Story?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who have found their perfect jet ski at Aqua Motors.
            Start your water adventure today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#inventory"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-semibold transition-colors"
            >
              Shop Now
            </a>
            <a
              href="#contact"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-md text-lg font-semibold transition-colors"
            >
              Visit Our Showroom
            </a>
          </div>
        </div>

        {/* Review Stats */}
        <div className="mt-16 bg-blue-600 rounded-lg p-8 text-center text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2">4.9/5</div>
              <div className="text-blue-200">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">250+</div>
              <div className="text-blue-200">Google Reviews</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-blue-200">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
