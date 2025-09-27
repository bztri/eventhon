import React from 'react';
import { Plus, Users, Calendar, TrendingUp, Brain, Sparkles, BarChart3, Settings, Bell } from 'lucide-react';

interface Event {
  id: string;
  name: string;
  date: string;
  participants: number;
  status: 'upcoming' | 'active' | 'completed';
  aiInsights: string;
}

const mockEvents: Event[] = [
  {
    id: '1',
    name: 'AI Innovation Hackathon',
    date: '2025-02-15',
    participants: 124,
    status: 'upcoming',
    aiInsights: 'High engagement predicted. Suggest adding React track.'
  },
  {
    id: '2',
    name: 'FinTech Challenge',
    date: '2025-01-28',
    participants: 89,
    status: 'active',
    aiInsights: 'Above average team formation rate. Consider extending deadline.'
  },
  {
    id: '3',
    name: 'Green Tech Summit',
    date: '2025-01-10',
    participants: 156,
    status: 'completed',
    aiInsights: '92% satisfaction rate. Teams requested more mentoring time.'
  }
];

export default function OrganizerDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Organizer Dashboard</h1>
          <p className="text-gray-600">Manage your events with AI-powered insights</p>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-indigo-500/25 flex items-center space-x-2">
            <Plus className="h-5 w-5" />
            <span>Create New Event</span>
            <Sparkles className="h-4 w-4" />
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <div className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs font-medium">
                +12%
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">8</div>
            <div className="text-gray-600 text-sm">Active Events</div>
            <div className="flex items-center mt-2">
              <Brain className="h-3 w-3 text-indigo-500 mr-1" />
              <span className="text-xs text-indigo-600">AI-optimized</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs font-medium">
                +28%
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">1,247</div>
            <div className="text-gray-600 text-sm">Total Participants</div>
            <div className="flex items-center mt-2">
              <Brain className="h-3 w-3 text-purple-500 mr-1" />
              <span className="text-xs text-purple-600">AI-matched teams</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs font-medium">
                +15%
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">94%</div>
            <div className="text-gray-600 text-sm">Success Rate</div>
            <div className="flex items-center mt-2">
              <Brain className="h-3 w-3 text-green-500 mr-1" />
              <span className="text-xs text-green-600">AI-predicted</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <div className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs font-medium">
                +22%
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">4.8</div>
            <div className="text-gray-600 text-sm">Avg Rating</div>
            <div className="flex items-center mt-2">
              <Brain className="h-3 w-3 text-orange-500 mr-1" />
              <span className="text-xs text-orange-600">AI-analyzed</span>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Events List */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Your Events</h3>
                <button className="text-indigo-600 hover:text-indigo-700 font-medium text-sm">View All</button>
              </div>
            </div>
            <div className="p-6 space-y-4">
              {mockEvents.map((event) => (
                <div key={event.id} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-gray-900">{event.name}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      event.status === 'upcoming' ? 'bg-blue-100 text-blue-600' :
                      event.status === 'active' ? 'bg-green-100 text-green-600' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      {event.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                    <span>{event.date}</span>
                    <span>{event.participants} participants</span>
                  </div>
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-1">
                      <Brain className="h-4 w-4 text-indigo-500" />
                      <span className="text-sm font-medium text-indigo-700">AI Insight</span>
                    </div>
                    <p className="text-sm text-indigo-600">{event.aiInsights}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Insights Panel */}
          <div className="space-y-6">
            {/* AI Recommendations */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center space-x-2">
                  <Sparkles className="h-5 w-5 text-purple-500" />
                  <h3 className="text-lg font-semibold text-gray-900">AI Recommendations</h3>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="border border-purple-200 rounded-xl p-4 bg-purple-50">
                  <div className="font-medium text-purple-900 mb-2">Optimize Team Size</div>
                  <p className="text-sm text-purple-700">Consider limiting teams to 4 members for 23% better project completion rates.</p>
                  <button className="mt-2 text-xs text-purple-600 font-medium hover:text-purple-800">Apply Suggestion</button>
                </div>
                <div className="border border-indigo-200 rounded-xl p-4 bg-indigo-50">
                  <div className="font-medium text-indigo-900 mb-2">Add Mentors</div>
                  <p className="text-sm text-indigo-700">Your next event could benefit from 2-3 additional React mentors based on participant skills.</p>
                  <button className="mt-2 text-xs text-indigo-600 font-medium hover:text-indigo-800">Find Mentors</button>
                </div>
                <div className="border border-green-200 rounded-xl p-4 bg-green-50">
                  <div className="font-medium text-green-900 mb-2">Schedule Optimization</div>
                  <p className="text-sm text-green-700">Weekend events show 34% higher engagement in your region.</p>
                  <button className="mt-2 text-xs text-green-600 font-medium hover:text-green-800">View Calendar</button>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
              </div>
              <div className="p-6 space-y-3">
                <button className="w-full flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-colors text-left">
                  <Settings className="h-5 w-5 text-gray-600" />
                  <span className="font-medium text-gray-900">Event Settings</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-colors text-left">
                  <Bell className="h-5 w-5 text-gray-600" />
                  <span className="font-medium text-gray-900">Notifications</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-colors text-left">
                  <BarChart3 className="h-5 w-5 text-gray-600" />
                  <span className="font-medium text-gray-900">Analytics</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}