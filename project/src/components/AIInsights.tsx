import React from 'react';
import { Brain, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';

export const AIInsights: React.FC = () => {
  return (
    <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-sm border border-accent-200">
      <div className="flex items-center space-x-3 mb-4 md:mb-6">
        <div className="p-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg">
          <Brain className="h-4 w-4 md:h-5 md:w-5 text-white" />
        </div>
        <h2 className="text-lg md:text-xl font-semibold text-accent-900">AI Insights</h2>
      </div>
      
      <div className="space-y-3 md:space-y-4">
        <div className="flex items-start space-x-3">
          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm font-medium text-accent-900">Great protein intake!</p>
            <p className="text-xs text-accent-600 mt-1">
              Your fish pepper soup provided excellent lean protein. Keep it up!
            </p>
          </div>
        </div>
        
        <div className="flex items-start space-x-3">
          <AlertCircle className="h-4 w-4 md:h-5 md:w-5 text-secondary-500 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm font-medium text-accent-900">Add more vegetables</p>
            <p className="text-xs text-accent-600 mt-1">
              Try adding spinach or bitter leaf to your next meal for extra vitamins.
            </p>
          </div>
        </div>
        
        <div className="flex items-start space-x-3">
          <TrendingUp className="h-4 w-4 md:h-5 md:w-5 text-blue-500 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm font-medium text-accent-900">Hydration reminder</p>
            <p className="text-xs text-accent-600 mt-1">
              You're doing well! Try to drink 3 more glasses of water today.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-4 md:mt-6 p-3 md:p-4 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl border border-primary-200">
        <p className="text-sm font-medium text-accent-900 mb-2">💡 Suggestion for dinner</p>
        <p className="text-xs text-accent-700">
          How about grilled tilapia with jollof rice and steamed vegetables? It'll balance your macros perfectly!
        </p>
      </div>
    </div>
  );
};