import React, { useState } from 'react';
import { Plus, Camera, Search, Clock, Flame, TrendingUp } from 'lucide-react';
import { MealCard } from '../components/MealCard';
import { QuickAddMeal } from '../components/QuickAddMeal';

const todaysMeals = [
  {
    id: 1,
    name: 'Plantain & Scrambled Eggs',
    time: '08:15',
    type: 'Breakfast',
    calories: 310,
    image: 'https://images.pexels.com/photos/4449161/pexels-photo-4449161.jpeg?auto=compress&cs=tinysrgb&w=400',
    nutrients: { protein: 12, carbs: 45, fats: 15, fiber: 6 },
    ingredients: ['Plantain', 'Eggs', 'Onions', 'Tomatoes', 'Palm oil']
  },
  {
    id: 2,
    name: 'Jollof Rice with Grilled Chicken',
    time: '13:30',
    type: 'Lunch',
    calories: 650,
    image: 'https://images.pexels.com/photos/6544222/pexels-photo-6544222.jpeg?auto=compress&cs=tinysrgb&w=400',
    nutrients: { protein: 35, carbs: 75, fats: 18, fiber: 4 },
    ingredients: ['Rice', 'Chicken breast', 'Tomatoes', 'Onions', 'Bell peppers', 'Scotch bonnet']
  },
  {
    id: 3,
    name: 'Fish Pepper Soup',
    time: '19:45',
    type: 'Dinner',
    calories: 280,
    image: 'https://images.pexels.com/photos/7363179/pexels-photo-7363179.jpeg?auto=compress&cs=tinysrgb&w=400',
    nutrients: { protein: 28, carbs: 12, fats: 8, fiber: 3 },
    ingredients: ['Fresh fish', 'Pepper soup spices', 'Ginger', 'Garlic', 'Scent leaves']
  }
];

export const MealLog: React.FC = () => {
  const [showQuickAdd, setShowQuickAdd] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const totalCalories = todaysMeals.reduce((sum, meal) => sum + meal.calories, 0);
  const totalProtein = todaysMeals.reduce((sum, meal) => sum + meal.nutrients.protein, 0);

  return (
    <div className="space-y-4 md:space-y-6 animate-fade-in">
      {/* Header - responsive layout */}
      <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-accent-900 mb-2">Meal Log</h1>
          <p className="text-accent-600 text-sm md:text-base">Track your daily nutrition and build healthy habits</p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="px-3 md:px-4 py-2 border border-accent-300 rounded-lg md:rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm md:text-base"
          />
          <button
            onClick={() => setShowQuickAdd(true)}
            className="flex items-center justify-center space-x-2 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg md:rounded-xl hover:from-primary-600 hover:to-secondary-600 transition-all duration-200 transform hover:scale-105 text-sm md:text-base"
          >
            <Plus className="h-4 w-4" />
            <span>Add Meal</span>
          </button>
        </div>
      </div>

      {/* Daily Summary - responsive grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
        <div className="bg-white rounded-xl md:rounded-2xl p-3 md:p-6 shadow-sm border border-accent-200">
          <div className="flex items-center space-x-2 md:space-x-3 mb-2 md:mb-3">
            <div className="p-1.5 md:p-2 bg-primary-100 rounded-lg">
              <Flame className="h-4 w-4 md:h-5 md:w-5 text-primary-600" />
            </div>
            <div>
              <p className="text-xs md:text-sm text-accent-600">Total Calories</p>
              <p className="text-lg md:text-2xl font-bold text-accent-900">{totalCalories}</p>
            </div>
          </div>
          <div className="w-full bg-accent-200 rounded-full h-1.5 md:h-2">
            <div 
              className="bg-gradient-to-r from-primary-500 to-secondary-500 h-full rounded-full transition-all duration-300"
              style={{ width: `${(totalCalories / 2000) * 100}%` }}
            />
          </div>
          <p className="text-xs text-accent-500 mt-1">Goal: 2000 cal</p>
        </div>

        <div className="bg-white rounded-xl md:rounded-2xl p-3 md:p-6 shadow-sm border border-accent-200">
          <div className="flex items-center space-x-2 md:space-x-3 mb-2 md:mb-3">
            <div className="p-1.5 md:p-2 bg-blue-100 rounded-lg">
              <TrendingUp className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-xs md:text-sm text-accent-600">Protein</p>
              <p className="text-lg md:text-2xl font-bold text-accent-900">{totalProtein}g</p>
            </div>
          </div>
          <p className="text-xs text-accent-500">Target: 150g</p>
        </div>

        <div className="bg-white rounded-xl md:rounded-2xl p-3 md:p-6 shadow-sm border border-accent-200">
          <div className="flex items-center space-x-2 md:space-x-3 mb-2 md:mb-3">
            <div className="p-1.5 md:p-2 bg-green-100 rounded-lg">
              <Clock className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
            </div>
            <div>
              <p className="text-xs md:text-sm text-accent-600">Meals Today</p>
              <p className="text-lg md:text-2xl font-bold text-accent-900">{todaysMeals.length}</p>
            </div>
          </div>
          <p className="text-xs text-accent-500">Keep it up!</p>
        </div>

        <div className="bg-white rounded-xl md:rounded-2xl p-3 md:p-6 shadow-sm border border-accent-200">
          <div className="flex items-center space-x-2 md:space-x-3 mb-2 md:mb-3">
            <div className="p-1.5 md:p-2 bg-secondary-100 rounded-lg">
              <Search className="h-4 w-4 md:h-5 md:w-5 text-secondary-600" />
            </div>
            <div>
              <p className="text-xs md:text-sm text-accent-600">Weekly Avg</p>
              <p className="text-lg md:text-2xl font-bold text-accent-900">1,845</p>
            </div>
          </div>
          <p className="text-xs text-accent-500">Calories/day</p>
        </div>
      </div>

      {/* Meals List - responsive layout */}
      <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-sm border border-accent-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 md:mb-6 space-y-2 sm:space-y-0">
          <h2 className="text-lg md:text-xl font-semibold text-accent-900">Today's Meals</h2>
          <div className="flex items-center space-x-2">
            <button className="p-2 text-accent-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors">
              <Camera className="h-4 w-4" />
            </button>
            <button className="p-2 text-accent-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors">
              <Search className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="space-y-3 md:space-y-4">
          {todaysMeals.map((meal) => (
            <MealCard key={meal.id} meal={meal} />
          ))}
        </div>

        {todaysMeals.length === 0 && (
          <div className="text-center py-8 md:py-12">
            <div className="h-12 w-12 md:h-16 md:w-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Utensils className="h-6 w-6 md:h-8 md:w-8 text-accent-500" />
            </div>
            <h3 className="text-base md:text-lg font-medium text-accent-900 mb-2">No meals logged yet</h3>
            <p className="text-accent-600 mb-4 text-sm md:text-base">Start tracking your nutrition by adding your first meal</p>
            <button 
              onClick={() => setShowQuickAdd(true)}
              className="px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg md:rounded-xl hover:from-primary-600 hover:to-secondary-600 transition-all duration-200 text-sm md:text-base"
            >
              Log Your First Meal
            </button>
          </div>
        )}
      </div>

      {/* Quick Add Modal */}
      {showQuickAdd && (
        <QuickAddMeal onClose={() => setShowQuickAdd(false)} />
      )}
    </div>
  );
};