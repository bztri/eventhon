import React from 'react';
import { Brain, Sparkles, Twitter, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="relative">
                <Brain className="h-8 w-8 text-indigo-400" />
                <Sparkles className="h-4 w-4 text-purple-400 absolute -top-1 -right-1" />
              </div>
              <span className="text-2xl font-bold">Eventhon</span>
            </div>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed max-w-md">
              The world's first AI-powered hackathon platform. Connecting innovators, mentors, and investors 
              through intelligent technology for better collaboration and success.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-3 rounded-xl hover:bg-indigo-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-xl hover:bg-indigo-600 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-xl hover:bg-indigo-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-xl hover:bg-indigo-600 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Platform</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-300 hover:text-indigo-400 transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-300 hover:text-indigo-400 transition-colors">How it Works</a></li>
              <li><a href="#pricing" className="text-gray-300 hover:text-indigo-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">API</a></li>
              <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">Integrations</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">Community</a></li>
              <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">Status</a></li>
              <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Contact info */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-indigo-400" />
              <span className="text-gray-300">San Francisco, CA</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-indigo-400" />
              <span className="text-gray-300">hello@eventhon.ai</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-indigo-400" />
              <span className="text-gray-300">+1 (555) 123-4567</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2025 Eventhon. All rights reserved. Powered by AI.
          </div>
          <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
            <a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}