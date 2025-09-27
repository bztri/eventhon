import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, Minimize2, Maximize2, Sparkles, X } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  isAI: boolean;
  timestamp: Date;
}

interface AIChatProps {
  userRole?: string;
  isMinimized?: boolean;
  onToggleMinimize?: () => void;
}

export default function AIChat({ userRole = 'participant', isMinimized = false, onToggleMinimize }: AIChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: `Hi! I'm your AI assistant. I can help you with ${
        userRole === 'organizer' ? 'event planning and analytics' :
        userRole === 'participant' ? 'team formation and project development' :
        userRole === 'mentor' ? 'team analysis and mentoring guidance' :
        userRole === 'judge' ? 'project evaluation and scoring' :
        'platform navigation and support'
      }. How can I assist you today?`,
      isAI: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      isAI: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: generateAIResponse(inputMessage, userRole),
        isAI: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const generateAIResponse = (message: string, role: string): string => {
    const responses = {
      organizer: [
        "Based on current trends, I recommend setting up registration with skill-based matching for better team formation.",
        "Your event analytics show 85% engagement rate. Consider adding more AI-powered mentoring sessions.",
        "I can help you optimize the judging criteria based on successful hackathons in your industry."
      ],
      participant: [
        "I found 3 potential teammates with complementary skills to yours. Would you like me to introduce you?",
        "Your project idea has great potential! I suggest focusing on the MVP features first.",
        "Based on your skills, I recommend these technologies for your hackathon project."
      ],
      mentor: [
        "Team Alpha needs guidance on React architecture. Their current progress suggests they'd benefit from your expertise.",
        "I've analyzed the teams' code quality - here are the top 3 that could use your mentoring.",
        "Based on team dynamics, I recommend focusing on communication and project management strategies."
      ],
      judge: [
        "This project scores 8.5/10 on innovation. The technical implementation is solid but could improve on market validation.",
        "I've pre-analyzed all submissions. Here's a summary of the most promising projects in your evaluation queue.",
        "Consistency check: Your scoring pattern aligns well with other judges, showing good calibration."
      ]
    };

    const roleResponses = responses[role as keyof typeof responses] || [
      "I'm here to help! What specific aspect would you like assistance with?",
      "Let me analyze that for you and provide some insights.",
      "Based on your query, here are some recommendations..."
    ];

    return roleResponses[Math.floor(Math.random() * roleResponses.length)];
  };

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={onToggleMinimize}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-all hover:shadow-indigo-500/25 animate-pulse"
        >
          <Bot className="h-6 w-6" />
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 w-80 h-96 bg-white rounded-lg shadow-xl border border-gray-200 z-50 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 rounded-t-lg flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Bot className="h-5 w-5" />
          <span className="font-semibold">AI Assistant</span>
          <Sparkles className="h-4 w-4 opacity-75" />
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={onToggleMinimize}
            className="hover:bg-white/20 p-1 rounded"
          >
            <Minimize2 className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isAI ? 'justify-start' : 'justify-end'}`}
          >
            <div
              className={`max-w-[70%] p-3 rounded-lg ${
                message.isAI
                  ? 'bg-gray-100 text-gray-800 border-l-4 border-indigo-500'
                  : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
              }`}
            >
              {message.isAI && (
                <div className="flex items-center space-x-1 text-xs text-indigo-600 mb-1">
                  <Sparkles className="h-3 w-3" />
                  <span>AI</span>
                </div>
              )}
              <p className="text-sm">{message.content}</p>
              <div className={`text-xs mt-1 opacity-75`}>
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-100 p-3 rounded-lg border-l-4 border-indigo-500">
              <div className="flex items-center space-x-1 text-xs text-indigo-600 mb-1">
                <Sparkles className="h-3 w-3" />
                <span>AI</span>
              </div>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="border-t border-gray-200 p-4">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Ask me anything..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputMessage.trim()}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-2 rounded-lg hover:from-indigo-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}