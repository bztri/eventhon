import React from 'react';
import { Brain, Users, Trophy, TrendingUp, MessageCircle, Shield } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: "AI-Powered Mentoring",
    description: "Get 24/7 intelligent guidance from our AI mentor that analyzes your project, suggests improvements, and provides technical recommendations based on best practices.",
    gradient: "from-indigo-500 to-purple-500",
    bgGradient: "from-indigo-50 to-purple-50"
  },
  {
    icon: Users,
    title: "Smart Team Matching",
    description: "Our AI analyzes skills, experience, and working styles to create perfectly balanced teams with high success probability and optimal role distribution.",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50"
  },
  {
    icon: Trophy,
    title: "Intelligent Evaluation",
    description: "AI pre-scores projects on technical quality, innovation, and market potential, helping judges make more consistent and fair evaluations.",
    gradient: "from-pink-500 to-rose-500",
    bgGradient: "from-pink-50 to-rose-50"
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description: "Advanced AI models predict event success, team performance, and project outcomes to help organizers optimize their hackathons in real-time.",
    gradient: "from-rose-500 to-orange-500",
    bgGradient: "from-rose-50 to-orange-50"
  },
  {
    icon: MessageCircle,
    title: "AI Communication Hub",
    description: "Intelligent chat system that connects participants with mentors, provides instant answers, and facilitates seamless collaboration across all user roles.",
    gradient: "from-orange-500 to-yellow-500",
    bgGradient: "from-orange-50 to-yellow-50"
  },
  {
    icon: Shield,
    title: "Smart Security & Moderation",
    description: "AI-powered content moderation, plagiarism detection, and security monitoring ensure a safe and fair environment for all participants.",
    gradient: "from-green-500 to-teal-500",
    bgGradient: "from-green-50 to-teal-50"
  }
];

export default function FeatureSection() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Brain className="h-4 w-4" />
            <span>AI-First Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Intelligent Features for
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Every Role</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI-powered platform provides tailored intelligence for organizers, participants, mentors, judges, and investors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className={`group relative bg-gradient-to-br ${feature.bgGradient} rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50`}
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Icon */}
                <div className={`relative w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {feature.description}
                  </p>
                </div>

                {/* Hover indicator */}
                <div className="absolute bottom-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0 shadow-lg">
                  <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>

        {/* AI Capabilities Highlight */}
        <div className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/90 to-purple-600/90"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
          
          <div className="relative text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Brain className="h-8 w-8" />
              <h3 className="text-3xl font-bold">AI at the Core</h3>
            </div>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Every feature in Eventhon is enhanced by artificial intelligence, providing users with intelligent insights, 
              automated assistance, and predictive capabilities that revolutionize the hackathon experience.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">99.9%</div>
                <div className="opacity-80">AI Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">&lt;2s</div>
                <div className="opacity-80">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">85%</div>
                <div className="opacity-80">Match Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">24/7</div>
                <div className="opacity-80">AI Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}