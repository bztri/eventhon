import React from 'react';
import { Brain, Sparkles, ArrowRight, Play, Users, Trophy, Zap } from 'lucide-react';

interface LandingHeroProps {
  onGetStarted?: () => void;
  onWatchDemo?: () => void;
}

export default function LandingHero({ onGetStarted, onWatchDemo }: LandingHeroProps) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          {/* AI Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-8 shadow-lg">
            <Sparkles className="h-4 w-4" />
            <span>Powered by Artificial Intelligence</span>
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              AI-Powered
            </span>
            <br />
            Hackathons
            <br />
            <span className="text-4xl md:text-5xl text-gray-600">Reimagined</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join the future of innovation events. Our intelligent platform connects participants, 
            mentors, judges, and investors in one seamless ecosystem powered by advanced AI.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={onGetStarted}
              className="group bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-indigo-500/25 transform hover:scale-105 flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={onWatchDemo}
              className="group bg-white text-gray-800 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all shadow-lg border border-gray-200 flex items-center space-x-2"
            >
              <Play className="h-5 w-5 text-indigo-600" />
              <span>Watch Demo</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl mx-auto mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">10K+</div>
              <div className="text-gray-600">Active Participants</div>
              <div className="flex items-center justify-center mt-2">
                <Sparkles className="h-4 w-4 text-indigo-500 mr-1" />
                <span className="text-sm text-indigo-600 font-medium">AI-Matched Teams</span>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl mx-auto mb-4">
                <Trophy className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600">Successful Events</div>
              <div className="flex items-center justify-center mt-2">
                <Sparkles className="h-4 w-4 text-purple-500 mr-1" />
                <span className="text-sm text-purple-600 font-medium">AI-Optimized</span>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl mx-auto mb-4">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
              <div className="flex items-center justify-center mt-2">
                <Sparkles className="h-4 w-4 text-pink-500 mr-1" />
                <span className="text-sm text-pink-600 font-medium">AI-Enhanced</span>
              </div>
            </div>
          </div>

          {/* AI Features Preview */}
          <div className="mt-16 bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Brain className="h-8 w-8 text-indigo-600" />
              <h3 className="text-2xl font-bold text-gray-900">AI Features</h3>
              <Sparkles className="h-6 w-6 text-purple-500" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-100 to-indigo-200 rounded-2xl mx-auto mb-3 flex items-center justify-center">
                  <span className="text-2xl">🧠</span>
                </div>
                <div className="font-semibold text-gray-900 mb-1">AI Mentor</div>
                <div className="text-sm text-gray-600">24/7 intelligent guidance</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-purple-200 rounded-2xl mx-auto mb-3 flex items-center justify-center">
                  <span className="text-2xl">👥</span>
                </div>
                <div className="font-semibold text-gray-900 mb-1">Smart Matching</div>
                <div className="text-sm text-gray-600">Perfect team formation</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-green-200 rounded-2xl mx-auto mb-3 flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <div className="font-semibold text-gray-900 mb-1">Auto Evaluation</div>
                <div className="text-sm text-gray-600">Intelligent project scoring</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-100 to-pink-200 rounded-2xl mx-auto mb-3 flex items-center justify-center">
                  <span className="text-2xl">💡</span>
                </div>
                <div className="font-semibold text-gray-900 mb-1">Investment AI</div>
                <div className="text-sm text-gray-600">Smart startup analysis</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}