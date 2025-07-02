import React, { useState } from 'react';
import { X, Camera, Mic, Search } from 'lucide-react';

interface QuickAddMealProps {
  onClose: () => void;
}

const popularMeals = [
  'Jollof Rice', 'Fried Rice', 'Pepper Soup', 'Egusi Soup', 'Pounded Yam',
  'Plantain', 'Beans', 'Suya', 'Moi Moi', 'Akara'
];

export const QuickAddMeal: React.FC<QuickAddMealProps> = ({ onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMealType, setSelectedMealType] = useState('');

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl md:rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto animate-slide-up">
        {/* Header - responsive padding */}
        <div className="flex items-center justify-between p-4 md:p-6 border-b border-accent-200">
          <h2 className="text-lg md:text-xl font-semibold text-accent-900">Add Meal</h2>
          <button
            onClick={onClose}
            className="p-2 text-accent-500 hover:text-accent-700 hover:bg-accent-100 rounded-lg transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content - responsive spacing */}
        <div className="p-4 md:p-6 space-y-4 md:space-y-6">
          {/* Meal Type Selection */}
          <div>
            <label className="block text-sm font-medium text-accent-900 mb-3">Meal Type</label>
            <div className="grid grid-cols-3 gap-2">
              {['Breakfast', 'Lunch', 'Dinner'].map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedMealType(type)}
                  className={`p-2 md:p-3 rounded-lg md:rounded-xl text-xs md:text-sm font-medium transition-all duration-200 ${
                    selectedMealType === type
                      ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white'
                      : 'bg-accent-100 text-accent-700 hover:bg-accent-200'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Search Input */}
          <div>
            <label className="block text-sm font-medium text-accent-900 mb-3">What did you eat?</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent-500 h-4 w-4" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="e.g., Jollof rice with chicken"
                className="w-full pl-10 pr-4 py-2 md:py-3 bg-accent-50 border border-accent-300 rounded-lg md:rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm md:text-base"
              />
            </div>
          </div>

          {/* Quick Actions - responsive layout */}
          <div className="flex space-x-3">
            <button className="flex-1 flex items-center justify-center space-x-2 p-2 md:p-3 bg-accent-100 text-accent-700 rounded-lg md:rounded-xl hover:bg-accent-200 transition-colors">
              <Camera className="h-4 w-4" />
              <span className="text-xs md:text-sm">Take Photo</span>
            </button>
            <button className="flex-1 flex items-center justify-center space-x-2 p-2 md:p-3 bg-accent-100 text-accent-700 rounded-lg md:rounded-xl hover:bg-accent-200 transition-colors">
              <Mic className="h-4 w-4" />
              <span className="text-xs md:text-sm">Voice Input</span>
            </button>
          </div>

          {/* Popular Meals - responsive grid */}
          <div>
            <label className="block text-sm font-medium text-accent-900 mb-3">Popular Nigerian Meals</label>
            <div className="grid grid-cols-2 gap-2">
              {popularMeals.map((meal) => (
                <button
                  key={meal}
                  onClick={() => setSearchTerm(meal)}
                  className="p-2 md:p-3 text-left bg-accent-50 border border-accent-200 rounded-lg md:rounded-xl hover:bg-accent-100 hover:border-primary-300 transition-all duration-200 text-xs md:text-sm text-accent-700"
                >
                  {meal}
                </button>
              ))}
            </div>
          </div>

          {/* AI Suggestion */}
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg md:rounded-xl p-3 md:p-4 border border-primary-200">
            <p className="text-sm font-medium text-accent-900 mb-2">💡 AI Suggestion</p>
            <p className="text-xs text-accent-700">
              Based on your recent meals, you might want to add more vegetables. Try "Vegetable soup with wheat" for dinner!
            </p>
          </div>
        </div>

        {/* Footer - responsive padding */}
        <div className="p-4 md:p-6 border-t border-accent-200">
          <div className="flex space-x-3">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2 md:py-3 bg-accent-100 text-accent-700 rounded-lg md:rounded-xl hover:bg-accent-200 transition-colors text-sm md:text-base"
            >
              Cancel
            </button>
            <button className="flex-1 px-4 py-2 md:py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg md:rounded-xl hover:from-primary-600 hover:to-secondary-600 transition-all duration-200 text-sm md:text-base">
              Add Meal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};