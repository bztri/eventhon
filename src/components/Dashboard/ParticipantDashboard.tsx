import React, { useState } from 'react';
import { Users, Code, Trophy, Brain, Sparkles, Calendar, MessageCircle, Star } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  skills: string[];
  avatar: string;
  compatibility: number;
}

interface Project {
  id: string;
  name: string;
  description: string;
  tech: string[];
  progress: number;
  aiScore: number;
}

const mockTeam: TeamMember[] = [
  {
    id: '1',
    name: 'Alex Chen',
    role: 'Frontend Developer',
    skills: ['React', 'TypeScript', 'UI/UX'],
    avatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    compatibility: 92
  },
  {
    id: '2',
    name: 'Sarah Kim',
    role: 'Backend Developer',
    skills: ['Node.js', 'Python', 'Databases'],
    avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    compatibility: 88
  },
  {
    id: '3',
    name: 'Mike Rodriguez',
    role: 'Designer',
    skills: ['Figma', 'Branding', 'User Research'],
    avatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    compatibility: 95
  }
];

const mockProject: Project = {
  id: '1',
  name: 'EcoTrack App',
  description: 'AI-powered carbon footprint tracking application',
  tech: ['React', 'Node.js', 'TensorFlow'],
  progress: 67,
  aiScore: 8.5
};

export default function ParticipantDashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'team' | 'project'>('overview');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Participant Dashboard</h1>
          <p className="text-gray-600">Your AI-enhanced hackathon experience</p>
        </div>

        {/* Current Event Banner */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-6 text-white mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="relative">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">AI Innovation Hackathon</h2>
                <p className="opacity-90 mb-4">Build the future with artificial intelligence</p>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>2 days left</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>124 participants</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">8.5</div>
                <div className="text-sm opacity-75">AI Score</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 bg-gray-100 rounded-xl p-1 mb-8 inline-flex">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
              activeTab === 'overview'
                ? 'bg-white text-indigo-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('team')}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
              activeTab === 'team'
                ? 'bg-white text-indigo-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            My Team
          </button>
          <button
            onClick={() => setActiveTab('project')}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
              activeTab === 'project'
                ? 'bg-white text-indigo-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Project
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Stats */}
            <div className="lg:col-span-2 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">95%</div>
                  <div className="text-gray-600 text-sm">Team Compatibility</div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">67%</div>
                  <div className="text-gray-600 text-sm">Project Progress</div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
                    <Trophy className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">8.5</div>
                  <div className="text-gray-600 text-sm">AI Evaluation</div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="p-6 border-b border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Code className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-gray-900 font-medium">Code pushed to repository</p>
                      <p className="text-gray-600 text-sm">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <MessageCircle className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-gray-900 font-medium">Mentor feedback received</p>
                      <p className="text-gray-600 text-sm">4 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                      <Brain className="h-4 w-4 text-indigo-600" />
                    </div>
                    <div>
                      <p className="text-gray-900 font-medium">AI analysis completed</p>
                      <p className="text-gray-600 text-sm">6 hours ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Insights */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center space-x-2">
                    <Sparkles className="h-5 w-5 text-purple-500" />
                    <h3 className="text-lg font-semibold text-gray-900">AI Recommendations</h3>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="border border-indigo-200 rounded-xl p-4 bg-indigo-50">
                    <div className="font-medium text-indigo-900 mb-2">Improve Documentation</div>
                    <p className="text-sm text-indigo-700">Add API documentation to boost your technical score by ~15%.</p>
                  </div>
                  <div className="border border-purple-200 rounded-xl p-4 bg-purple-50">
                    <div className="font-medium text-purple-900 mb-2">User Testing</div>
                    <p className="text-sm text-purple-700">Consider adding user feedback to strengthen your presentation.</p>
                  </div>
                  <div className="border border-green-200 rounded-xl p-4 bg-green-50">
                    <div className="font-medium text-green-900 mb-2">Demo Ready</div>
                    <p className="text-sm text-green-700">Your project is 89% ready for final presentation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'team' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Team Members */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900">Team Members</h3>
              </div>
              <div className="p-6 space-y-4">
                {mockTeam.map((member) => (
                  <div key={member.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-xl">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{member.name}</h4>
                      <p className="text-gray-600 text-sm">{member.role}</p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {member.skills.map((skill, idx) => (
                          <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">{member.compatibility}%</div>
                      <div className="text-xs text-gray-500">Match</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Team Chat */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900">Team Chat</h3>
              </div>
              <div className="h-64 overflow-y-auto p-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <img src={mockTeam[0].avatar} className="w-8 h-8 rounded-full" />
                    <div>
                      <p className="text-sm text-gray-900 font-medium">{mockTeam[0].name}</p>
                      <p className="text-sm text-gray-600">Just pushed the frontend updates!</p>
                      <p className="text-xs text-gray-400 mt-1">2 min ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <img src={mockTeam[1].avatar} className="w-8 h-8 rounded-full" />
                    <div>
                      <p className="text-sm text-gray-900 font-medium">{mockTeam[1].name}</p>
                      <p className="text-sm text-gray-600">API is ready for testing</p>
                      <p className="text-xs text-gray-400 mt-1">5 min ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                      <Brain className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-indigo-600 font-medium">AI Assistant</p>
                      <p className="text-sm text-gray-600">Great progress! Consider adding error handling to the API endpoints.</p>
                      <p className="text-xs text-gray-400 mt-1">7 min ago</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 border-t border-gray-100">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'project' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Project Details */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{mockProject.name}</h3>
                <p className="text-gray-600 mb-6">{mockProject.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {mockProject.tech.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-lg text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900">Progress</h4>
                    <span className="text-sm text-gray-600">{mockProject.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2 rounded-full"
                      style={{ width: `${mockProject.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Star className="h-5 w-5 text-green-600" />
                    <span className="font-medium text-green-900">AI Evaluation Score</span>
                  </div>
                  <div className="text-3xl font-bold text-green-600 mb-1">{mockProject.aiScore}/10</div>
                  <p className="text-sm text-green-700">Your project shows excellent technical implementation and innovation potential.</p>
                </div>
              </div>
            </div>

            {/* Project AI Analysis */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center space-x-2">
                  <Brain className="h-5 w-5 text-indigo-500" />
                  <h3 className="text-lg font-semibold text-gray-900">AI Analysis</h3>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Innovation</span>
                    <span className="text-sm font-medium text-gray-900">9.2/10</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Technical Quality</span>
                    <span className="text-sm font-medium text-gray-900">8.1/10</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 h-2 rounded-full" style={{ width: '81%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Market Potential</span>
                    <span className="text-sm font-medium text-gray-900">8.8/10</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full" style={{ width: '88%' }}></div>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-4 mt-4">
                  <h4 className="font-medium text-gray-900 mb-3">Key Strengths</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Unique AI implementation approach</li>
                    <li>• Strong user experience design</li>
                    <li>• Scalable architecture</li>
                    <li>• Clear market opportunity</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}