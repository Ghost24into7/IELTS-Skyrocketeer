import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "The AI feedback completely transformed my writing skills. I went from Band 6 to 8.5 in just 3 months! The personalized insights helped me understand exactly where I was making mistakes.",
    author: "Priya Sharma",
    location: "Mumbai, India",
    stars: 5,
    beforeScore: 6.0,
    afterScore: 8.5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b776?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face"
  },
  {
    quote: "The mock tests felt exactly like the real exam. The detailed analytics showed me my weak points and the study plan was perfectly tailored. Highly recommend this platform!",
    author: "John Davidson",
    location: "London, UK",
    stars: 5,
    beforeScore: 7.0,
    afterScore: 8.0,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face"
  },
  {
    quote: "Speaking practice with native speakers built my confidence tremendously. The real-time feedback helped me improve my pronunciation and fluency. Worth every penny!",
    author: "Aisha Mohammed",
    location: "Dubai, UAE",
    stars: 5,
    beforeScore: 6.5,
    afterScore: 8.0,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face"
  }
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex justify-center mb-4">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real success stories from students who achieved their dream IELTS scores with our platform.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full relative">
                {/* Quote icon */}
                <div className="absolute top-4 right-4 text-blue-200 text-4xl">
                  "
                </div>

                {/* Star rating */}
                <StarRating rating={testimonial.stars} />

                {/* Quote */}
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>

                {/* Score improvement */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg mb-6">
                  <div className="text-center">
                    <div className="text-sm text-gray-600 mb-2">Score Improvement</div>
                    <div className="flex items-center justify-center space-x-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-red-500">{testimonial.beforeScore}</div>
                        <div className="text-xs text-gray-500">Before</div>
                      </div>
                      <div className="text-blue-500">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-500">{testimonial.afterScore}</div>
                        <div className="text-xs text-gray-500">After</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Author info */}
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-800">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Join Our Success Stories
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;