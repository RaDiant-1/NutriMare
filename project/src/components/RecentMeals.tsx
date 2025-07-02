import React from 'react';
import { Clock, Camera } from 'lucide-react';

const recentMeals = [
  {
    id: 1,
    name: 'Jollof Rice with Chicken',
    time: '13:30',
    calories: 650,
    image: 'https://images.pexels.com/photos/6544222/pexels-photo-6544222.jpeg?auto=compress&cs=tinysrgb&w=400',
    nutrients: { protein: 35, carbs: 75, fats: 18 }
  },
  {
    id: 2,
    name: 'Fish Pepper Soup',
    time: '19:45',
    calories: 280,
    image: 'https://images.pexels.com/photos/7363179/pexels-photo-7363179.jpeg?auto=compress&cs=tinysrgb&w=400',
    nutrients: { protein: 28, carbs: 12, fats: 8 }
  },
  {
    id: 3,
    name: 'Plantain & Egg Sauce',
    time: '08:15',
    calories: 310,
    image: 'https://images.pexels.com/photos/4449161/pexels-photo-4449161.jpeg?auto=compress&cs=tinysrgb&w=400',
    nutrients: { protein: 12, carbs: 45, fats: 15 }
  },
];

export const RecentMeals: React.FC = () => {
  return (
    <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-sm border border-accent-200">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <h2 className="text-lg md:text-xl font-semibold text-accent-900">Recent Meals</h2>
        <button className="text-primary-600 hover:text-primary-700 text-sm font-medium transition-colors">
          View All
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-4">
        {recentMeals.map((meal) => (
          <div key={meal.id} className="group hover:shadow-md transition-shadow duration-200 rounded-lg md:rounded-xl overflow-hidden border border-accent-200">
            <div className="relative h-24 md:h-32 overflow-hidden">
              <img
                src={meal.image}
                alt={meal.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-2 right-2">
                <div className="bg-black/50 backdrop-blur-sm rounded-full p-1">
                  <Camera className="h-3 w-3 text-white" />
                </div>
              </div>
            </div>
            
            <div className="p-3 md:p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-accent-900 text-sm line-clamp-1">{meal.name}</h3>
                <div className="flex items-center space-x-1 text-xs text-accent-600">
                  <Clock className="h-3 w-3" />
                  <span>{meal.time}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-2 md:mb-3">
                <span className="text-sm font-semibold text-primary-600">{meal.calories} cal</span>
              </div>
              
              <div className="flex justify-between text-xs text-accent-600">
                <span>P: {meal.nutrients.protein}g</span>
                <span>C: {meal.nutrients.carbs}g</span>
                <span>F: {meal.nutrients.fats}g</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};