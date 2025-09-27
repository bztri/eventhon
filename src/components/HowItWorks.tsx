import React from 'react';
import { ArrowRight, UserPlus, Users, Trophy, Brain, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: "Smart Registration",
    description: "Sign up and let our AI analyze your skills, preferences, and goals to create your intelligent profile.",
    details: "AI creates a comprehensive skill matrix and compatibility score for optimal team matching."
  },
  {
    icon: Users,
    title: "AI Team Formation",
    description: "Our intelligent matching system connects you with the perfect teammates based on compatibility and complementary skills.",
    details: "Advanced algorithms consider technical skills, soft skills, time zones, and working styles."
  },
  {
    icon: Trophy,
    title: "Intelligent Mentoring",
    description: "Get 24/7 AI guidance plus human mentor support throughout your hackathon journey.",
    details: "Real-time code analysis, presentation feedback, and strategic recommendations from AI and experts."
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Brain className="h-4 w-4" />
            <span>Simple Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of hackathons with our AI-powered platform in just three simple steps.
          </p>
        </div>

        <div className="relative">
          {/* Connection lines */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative group">
                  {/* Step number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold z-10 shadow-lg">
                    {index + 1}
                  </div>

                  {/* Card */}
                  <div className="bg-white border border-gray-200 rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group-hover:border-indigo-200 relative overflow-hidden">
                    {/* Background gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/0 to-purple-50/0 group-hover:from-indigo-50/50 group-hover:to-purple-50/50 transition-all duration-300 rounded-3xl"></div>
                    
                    {/* Icon */}
                    <div className="relative w-20 h-20 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300">
                      <IconComponent className="h-10 w-10 text-indigo-600 group-hover:text-purple-600 transition-colors" />
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                        <Sparkles className="h-3 w-3 text-white" />
                      </div>
                    </div>

                    <div className="relative">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-700 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 mb-4 text-lg">
                        {step.description}
                      </p>
                      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 group-hover:from-indigo-100 group-hover:to-purple-100 transition-all duration-300">
                        <div className="flex items-start space-x-2">
                          <Brain className="h-4 w-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-gray-700 text-left">
                            {step.details}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Arrow for desktop */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-20">
                        <div className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-lg group-hover:border-indigo-300 group-hover:bg-indigo-50 transition-all duration-300">
                          <ArrowRight className="h-5 w-5 text-indigo-600" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative">
              <h3 className="text-3xl font-bold mb-4">Ready to Experience AI-Powered Hackathons?</h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Join thousands of participants, organizers, and mentors who are already using AI to create better hackathon experiences.
              </p>
              <button className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all shadow-lg transform hover:scale-105 inline-flex items-center space-x-2">
                <span>Start Your Journey</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}