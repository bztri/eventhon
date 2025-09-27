import React, { useState } from 'react';
import { X, Mail, Lock, User, Brain, Sparkles } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'login' | 'register';
  onLogin?: (email: string, role: string) => void;
}

const userRoles = [
  { id: 'participant', label: 'Participant', description: 'Join hackathons and build amazing projects' },
  { id: 'organizer', label: 'Organizer', description: 'Create and manage hackathon events' },
  { id: 'mentor', label: 'Mentor', description: 'Guide teams with your expertise' },
  { id: 'judge', label: 'Judge', description: 'Evaluate and score projects' },
  { id: 'investor', label: 'Investor', description: 'Discover promising startups' }
];

export default function AuthModal({ isOpen, onClose, initialMode = 'login', onLogin }: AuthModalProps) {
  const [mode, setMode] = useState<'login' | 'register'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [selectedRole, setSelectedRole] = useState('participant');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false);
      onLogin?.(email, selectedRole);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="relative">
              <Brain className="h-8 w-8 text-indigo-600" />
              <Sparkles className="h-4 w-4 text-purple-500 absolute -top-1 -right-1" />
            </div>
            <span className="text-2xl font-bold text-gray-900">Eventhon</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {mode === 'login' ? 'Welcome Back' : 'Join the Future'}
          </h2>
          <p className="text-gray-600">
            {mode === 'login' 
              ? 'Sign in to your AI-powered hackathon account' 
              : 'Create your account and experience AI-powered hackathons'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {mode === 'register' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Enter your full name"
                  required={mode === 'register'}
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>

          {mode === 'register' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Choose Your Role
              </label>
              <div className="space-y-2">
                {userRoles.map((role) => (
                  <label
                    key={role.id}
                    className={`block p-3 rounded-xl border cursor-pointer transition-all ${
                      selectedRole === role.id
                        ? 'border-indigo-500 bg-indigo-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="role"
                      value={role.id}
                      checked={selectedRole === role.id}
                      onChange={(e) => setSelectedRole(e.target.value)}
                      className="sr-only"
                    />
                    <div className="font-medium text-gray-900">{role.label}</div>
                    <div className="text-sm text-gray-600">{role.description}</div>
                  </label>
                ))}
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-indigo-500/25 disabled:opacity-50 flex items-center justify-center space-x-2"
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Processing...</span>
              </>
            ) : (
              <>
                <Brain className="h-5 w-5" />
                <span>{mode === 'login' ? 'Sign In' : 'Create Account'}</span>
              </>
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            {mode === 'login' ? "Don't have an account?" : 'Already have an account?'}
            <button
              onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
              className="ml-2 text-indigo-600 font-medium hover:text-indigo-500 transition-colors"
            >
              {mode === 'login' ? 'Sign up' : 'Sign in'}
            </button>
          </p>
        </div>

        {mode === 'register' && (
          <div className="mt-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Sparkles className="h-4 w-4 text-indigo-500" />
              <span className="text-sm font-medium text-indigo-700">AI-Powered Benefits</span>
            </div>
            <ul className="text-xs text-indigo-600 space-y-1">
              <li>• Intelligent team matching based on skills</li>
              <li>• 24/7 AI mentoring and guidance</li>
              <li>• Smart project analysis and feedback</li>
              <li>• Personalized recommendations</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}