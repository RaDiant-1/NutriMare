import React, { useState, useRef, useEffect } from 'react';
import { Send, Mic, Camera, Smile } from 'lucide-react';
import { ChatMessage } from '../components/ChatMessage';
import { TypingIndicator } from '../components/TypingIndicator';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  type?: 'text' | 'suggestion';
}

const initialMessages: Message[] = [
  {
    id: '1',
    content: "Hi there! I'm NutriMate, your personal AI meal assistant. I'm here to help you eat well and feel amazing! 🌟\n\nI know all about delicious Nigerian cuisine and can help you with meal planning, nutrition advice, and healthy recipes. What would you like to chat about today?",
    sender: 'ai',
    timestamp: new Date(),
  }
];

const suggestions = [
  "What's a healthy Nigerian breakfast?",
  "Log my lunch: jollof rice with chicken",
  "I'm craving something spicy",
  "Help me plan dinner for tonight"
];

export const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(content);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: aiResponse,
        sender: 'ai',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const generateAIResponse = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase();
    
    if (lowerInput.includes('breakfast')) {
      return "Great question! For a healthy Nigerian breakfast, I'd recommend:\n\n🥚 **Scrambled eggs with plantain** - Quick, protein-rich, and energizing\n🍲 **Akamu (pap) with milk and honey** - Easy to digest and nutritious\n🥖 **Whole grain bread with avocado** - Fiber and healthy fats\n\nWhich of these sounds good to you? I can share a detailed recipe and nutritional breakdown!";
    }
    
    if (lowerInput.includes('jollof') || lowerInput.includes('lunch')) {
      return "Jollof rice with chicken - excellent choice! 🍛\n\nI've logged this for you:\n• **Calories**: ~650\n• **Protein**: 35g\n• **Carbs**: 75g\n• **Fats**: 18g\n\nThis meal gives you great energy and protein! To make it even more nutritious, consider adding some steamed vegetables like carrots or green beans next time. How are you feeling energy-wise after this meal?";
    }
    
    if (lowerInput.includes('spicy') || lowerInput.includes('craving')) {
      return "I know exactly what you need! 🌶️ For something spicy and satisfying:\n\n🔥 **Pepper soup with fish** - Warming, protein-rich, perfect for Lagos weather\n🌶️ **Spicy jollof with extra scotch bonnet** - Comfort food at its finest\n🍲 **Bitterleaf soup with pounded yam** - Traditional and hearty\n\nWhat's your spice tolerance level? I can adjust the heat accordingly!";
    }
    
    if (lowerInput.includes('dinner') || lowerInput.includes('tonight')) {
      return "Let me suggest some perfect dinner options for tonight! 🌙\n\n✨ **Grilled tilapia with jollof rice** - Light but satisfying\n🥗 **Vegetable soup with wheat** - Fiber-rich and filling\n🍖 **Pepper soup with yam** - Warming and comforting\n\nWhat ingredients do you have at home? I can customize a recipe based on what's available in your kitchen right now!";
    }
    
    return "That's interesting! I'm here to help with all your nutrition and meal planning needs. Whether you want to:\n\n• Log a meal you've eaten\n• Get recipe suggestions\n• Plan your next meal\n• Learn about nutrition\n• Track your health goals\n\nJust let me know what you'd like to explore! I'm full of ideas for delicious, healthy Nigerian meals. What sounds most helpful right now?";
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion);
  };

  return (
    <div className="flex flex-col h-full max-h-[calc(100vh-120px)] md:max-h-[calc(100vh-200px)] bg-white rounded-xl md:rounded-2xl shadow-sm border border-accent-200">
      {/* Chat Header - responsive padding */}
      <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white p-3 md:p-4 rounded-t-xl md:rounded-t-2xl">
        <div className="flex items-center space-x-3">
          <div className="h-8 w-8 md:h-10 md:w-10 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-base md:text-lg">🤖</span>
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="font-semibold text-sm md:text-base">NutriMate AI</h2>
            <p className="text-xs md:text-sm text-primary-100 truncate">Your intelligent meal assistant</p>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-primary-100">Online</span>
            </div>
          </div>
        </div>
      </div>

      {/* Messages Area - responsive padding */}
      <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-3 md:space-y-4 bg-gradient-to-b from-accent-50/30 to-white">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        
        {isTyping && <TypingIndicator />}
        
        {/* Quick Suggestions - responsive grid */}
        {messages.length === 1 && (
          <div className="space-y-3 animate-slide-up">
            <p className="text-sm text-accent-600 text-center">Try asking me about:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="p-3 bg-white border border-accent-200 rounded-lg md:rounded-xl text-sm text-accent-700 hover:bg-primary-50 hover:border-primary-300 hover:text-primary-700 transition-all duration-200 text-left"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area - responsive layout */}
      <div className="p-3 md:p-4 border-t border-accent-200">
        <div className="flex items-center space-x-2 md:space-x-3">
          <div className="flex-1 relative">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
              placeholder="Ask me anything about nutrition..."
              className="w-full px-3 md:px-4 py-2 md:py-3 pr-10 md:pr-12 bg-accent-50 border border-accent-300 rounded-lg md:rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-sm md:text-base"
              disabled={isTyping}
            />
            <div className="absolute right-2 md:right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-1 md:space-x-2">
              <button className="text-accent-500 hover:text-primary-600 transition-colors">
                <Smile className="h-3 w-3 md:h-4 md:w-4" />
              </button>
            </div>
          </div>
          
          <div className="flex items-center space-x-1 md:space-x-2">
            <button className="p-2 md:p-3 text-accent-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg md:rounded-xl transition-all duration-200">
              <Camera className="h-4 w-4 md:h-5 md:w-5" />
            </button>
            <button className="p-2 md:p-3 text-accent-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg md:rounded-xl transition-all duration-200">
              <Mic className="h-4 w-4 md:h-5 md:w-5" />
            </button>
            <button
              onClick={() => handleSendMessage(inputValue)}
              disabled={!inputValue.trim() || isTyping}
              className="p-2 md:p-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg md:rounded-xl hover:from-primary-600 hover:to-secondary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105"
            >
              <Send className="h-4 w-4 md:h-5 md:w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};