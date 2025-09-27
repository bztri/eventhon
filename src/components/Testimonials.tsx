import React from 'react';
import { Star, Brain, Users, Trophy } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Hackathon Organizer",
    company: "TechCorp",
    image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    content: "Eventhon's AI completely transformed how we run hackathons. The intelligent team matching increased our success rate by 40%, and participants love the 24/7 AI mentoring.",
    rating: 5,
    category: "Organizer"
  },
  {
    name: "Marcus Rodriguez",
    role: "Full-stack Developer",
    company: "Startup Founder",
    image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    content: "The AI mentor helped me identify the perfect teammates and gave invaluable technical advice. We won first place thanks to the intelligent guidance throughout the event!",
    rating: 5,
    category: "Participant"
  },
  {
    name: "Dr. Emily Watson",
    role: "Senior Judge",
    company: "Innovation Labs",
    image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    content: "The AI pre-evaluation system helps me focus on the most promising projects. It's incredibly accurate and saves hours of initial screening while maintaining fairness.",
    rating: 5,
    category: "Judge"
  },
  {
    name: "Alex Thompson",
    role: "Tech Mentor",
    company: "Microsoft",
    image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    content: "As a mentor, the AI insights about team dynamics and project progress help me provide much more targeted and effective guidance. It's like having a super-smart assistant.",
    rating: 5,
    category: "Mentor"
  },
  {
    name: "Lisa Park",
    role: "Investment Partner",
    company: "Future Ventures",
    image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    content: "The AI investment analysis is remarkably sophisticated. It helped us identify three portfolio companies from hackathon projects with 90% accuracy in market potential.",
    rating: 5,
    category: "Investor"
  },
  {
    name: "Jordan Kim",
    role: "UX Designer",
    company: "Design Studio",
    image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    content: "The team matching AI found me developers who perfectly complemented my design skills. Our collaboration was seamless, and we built something amazing together.",
    rating: 5,
    category: "Participant"
  }
];

const categoryIcons = {
  "Organizer": Brain,
  "Participant": Users,
  "Judge": Trophy,
  "Mentor": Brain,
  "Investor": Trophy
};

const categoryColors = {
  "Organizer": "from-indigo-500 to-indigo-600",
  "Participant": "from-purple-500 to-purple-600",
  "Judge": "from-pink-500 to-pink-600",
  "Mentor": "from-green-500 to-green-600",
  "Investor": "from-orange-500 to-orange-600"
};

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="h-4 w-4" />
            <span>Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Loved by <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Everyone</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what organizers, participants, judges, mentors, and investors say about their AI-powered experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const CategoryIcon = categoryIcons[testimonial.category as keyof typeof categoryIcons];
            const categoryColor = categoryColors[testimonial.category as keyof typeof categoryColors];
            
            return (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/0 to-purple-50/0 group-hover:from-indigo-50/30 group-hover:to-purple-50/30 transition-all duration-300 rounded-3xl"></div>
                
                {/* Category badge */}
                <div className={`absolute top-4 right-4 bg-gradient-to-r ${categoryColor} text-white px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1`}>
                  <CategoryIcon className="h-3 w-3" />
                  <span>{testimonial.category}</span>
                </div>

                <div className="relative">
                  {/* Stars */}
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-gray-700 mb-6 text-lg leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-gray-600 text-sm">{testimonial.role}</div>
                      <div className="text-gray-500 text-xs">{testimonial.company}</div>
                    </div>
                  </div>
                </div>

                {/* Hover indicator */}
                <div className="absolute bottom-4 right-4 w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <Brain className="h-4 w-4 text-white" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Overall stats */}
        <div className="mt-16 bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Trusted by the Community</h3>
            <p className="text-gray-600">Real results from real users across all roles</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">98%</div>
              <div className="text-gray-600">User Satisfaction</div>
              <div className="flex justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">85%</div>
              <div className="text-gray-600">Success Rate Increase</div>
              <div className="text-sm text-gray-500 mt-1">vs traditional hackathons</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">10K+</div>
              <div className="text-gray-600">Happy Users</div>
              <div className="text-sm text-gray-500 mt-1">across all roles</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent mb-2">24/7</div>
              <div className="text-gray-600">AI Support</div>
              <div className="text-sm text-gray-500 mt-1">always available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}