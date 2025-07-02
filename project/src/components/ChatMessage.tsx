import React from 'react';
import { Bot, User } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  type?: 'text' | 'suggestion';
}

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isAI = message.sender === 'ai';
  
  return (
    <div className={`flex ${isAI ? 'justify-start' : 'justify-end'} animate-slide-up`}>
      <div className={`flex max-w-[80%] ${isAI ? 'flex-row' : 'flex-row-reverse'} items-start space-x-3`}>
        {/* Avatar */}
        <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center ${
          isAI 
            ? 'bg-gradient-to-r from-primary-500 to-secondary-500' 
            : 'bg-accent-600'
        }`}>
          {isAI ? (
            <Bot className="h-4 w-4 text-white" />
          ) : (
            <User className="h-4 w-4 text-white" />
          )}
        </div>
        
        {/* Message Content */}
        <div className={`rounded-2xl px-4 py-3 ${
          isAI 
            ? 'bg-white border border-accent-200 text-accent-900' 
            : 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white'
        }`}>
          <div className="whitespace-pre-wrap text-sm leading-relaxed">
            {message.content}
          </div>
          
          {/* Timestamp */}
          <div className={`text-xs mt-2 ${
            isAI ? 'text-accent-500' : 'text-primary-100'
          }`}>
            {message.timestamp.toLocaleTimeString('en-NG', { 
              hour: '2-digit', 
              minute: '2-digit' 
            })}
          </div>
        </div>
      </div>
    </div>
  );
};