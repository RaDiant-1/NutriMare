import React from 'react';
import { Bot } from 'lucide-react';

export const TypingIndicator: React.FC = () => {
  return (
    <div className="flex justify-start animate-slide-up">
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center">
          <Bot className="h-4 w-4 text-white" />
        </div>
        
        <div className="bg-white border border-accent-200 rounded-2xl px-4 py-3">
          <div className="flex space-x-1">
            <div className="h-2 w-2 bg-primary-500 rounded-full animate-pulse"></div>
            <div className="h-2 w-2 bg-primary-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="h-2 w-2 bg-primary-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
          <div className="text-xs text-accent-500 mt-2">
            NutriMate is typing...
          </div>
        </div>
      </div>
    </div>
  );
};