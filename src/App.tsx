import React, { useState } from 'react';
import Header from './components/Header';
import LandingHero from './components/LandingHero';
import FeatureSection from './components/FeatureSection';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import AIChat from './components/AIChat';
import AuthModal from './components/AuthModal';
import OrganizerDashboard from './components/Dashboard/OrganizerDashboard';
import ParticipantDashboard from './components/Dashboard/ParticipantDashboard';

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<string>('');
  const [isChatMinimized, setIsChatMinimized] = useState(true);

  const handleLogin = () => {
    setAuthMode('login');
    setIsAuthModalOpen(true);
  };

  const handleRegister = () => {
    setAuthMode('register');
    setIsAuthModalOpen(true);
  };

  const handleAuthSuccess = (email: string, role: string) => {
    setIsAuthenticated(true);
    setUserRole(role);
    setIsAuthModalOpen(false);
  };

  const handleGetStarted = () => {
    setAuthMode('register');
    setIsAuthModalOpen(true);
  };

  const handleWatchDemo = () => {
    // Simulate demo viewing
    alert('Demo video would play here! 🎥');
  };

  const toggleChat = () => {
    setIsChatMinimized(!isChatMinimized);
  };

  // If authenticated, show role-specific dashboard
  if (isAuthenticated) {
    if (userRole === 'organizer') {
      return (
        <>
          <OrganizerDashboard />
          <AIChat 
            userRole={userRole} 
            isMinimized={isChatMinimized} 
            onToggleMinimize={toggleChat}
          />
        </>
      );
    }
    
    if (userRole === 'participant') {
      return (
        <>
          <ParticipantDashboard />
          <AIChat 
            userRole={userRole} 
            isMinimized={isChatMinimized} 
            onToggleMinimize={toggleChat}
          />
        </>
      );
    }
    
    // For other roles (mentor, judge, investor), show a coming soon message with basic dashboard
    return (
      <div className="min-h-screen bg-gray-50">
        <Header 
          isAuthenticated={isAuthenticated}
          userRole={userRole}
          onLogin={handleLogin}
          onRegister={handleRegister}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="bg-white rounded-3xl p-12 shadow-lg border border-gray-100">
              <div className="text-6xl mb-6">🚧</div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {userRole.charAt(0).toUpperCase() + userRole.slice(1)} Dashboard Coming Soon
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                We're building an amazing {userRole} experience with AI-powered features. Stay tuned!
              </p>
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3">What's coming for {userRole}s:</h3>
                <ul className="text-left text-gray-700 space-y-2">
                  {userRole === 'mentor' && (
                    <>
                      <li>• AI-powered team analysis and insights</li>
                      <li>• Smart mentoring recommendations</li>
                      <li>• Integrated video calls and chat</li>
                      <li>• Progress tracking and reporting</li>
                    </>
                  )}
                  {userRole === 'judge' && (
                    <>
                      <li>• AI pre-evaluation of projects</li>
                      <li>• Intelligent scoring assistance</li>
                      <li>• Consistency checking and calibration</li>
                      <li>• Automated report generation</li>
                    </>
                  )}
                  {userRole === 'investor' && (
                    <>
                      <li>• AI startup potential analysis</li>
                      <li>• Smart project recommendations</li>
                      <li>• Investment opportunity scoring</li>
                      <li>• Market potential insights</li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <AIChat 
          userRole={userRole} 
          isMinimized={isChatMinimized} 
          onToggleMinimize={toggleChat}
        />
      </div>
    );
  }

  // Show landing page for non-authenticated users
  return (
    <div className="min-h-screen">
      <Header 
        isAuthenticated={isAuthenticated}
        userRole={userRole}
        onLogin={handleLogin}
        onRegister={handleRegister}
      />
      <LandingHero 
        onGetStarted={handleGetStarted}
        onWatchDemo={handleWatchDemo}
      />
      <FeatureSection />
      <HowItWorks />
      <Testimonials />
      <Footer />
      
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialMode={authMode}
        onLogin={handleAuthSuccess}
      />
      
      <AIChat 
        userRole="guest" 
        isMinimized={isChatMinimized} 
        onToggleMinimize={toggleChat}
      />
    </div>
  );
}

export default App;