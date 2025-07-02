import React from 'react';
import { Clock, Edit, Trash2, MoreHorizontal } from 'lucide-react';

interface Meal {
  id: number;
  name: string;
  time: string;
  type: string;
  calories: number;
  image: string;
  nutrients: {
    protein: number;
    carbs: number;
    fats: number;
    fiber: number;
  };
  ingredients: string[];
}

interface MealCardProps {
  meal: Meal;
}

export const MealCard: React.FC<MealCardProps> = ({ meal }) => {
  return (
    <div className="group hover:shadow-md transition-shadow duration-200 bg-accent-50/50 rounded-lg md:rounded-xl p-3 md:p-4 border border-accent-200">
      <div className="flex items-start space-x-3 md:space-x-4">
        {/* Meal Image - responsive sizing */}
        <div className="flex-shrink-0">
          <img
            src={meal.image}
            alt={meal.name}
            className="h-16 w-16 md:h-20 md:w-20 object-cover rounded-lg md:rounded-xl group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        {/* Meal Details - responsive layout */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-2 mb-1">
                <span className="text-xs font-medium text-primary-600 bg-primary-100 px-2 py-1 rounded-full w-fit">
                  {meal.type}
                </span>
                <div className="flex items-center space-x-1 text-xs text-accent-600">
                  <Clock className="h-3 w-3" />
                  <span>{meal.time}</span>
                </div>
              </div>
              <h3 className="font-semibold text-accent-900 mb-2 text-sm md:text-base line-clamp-1">{meal.name}</h3>
              <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs md:text-sm text-accent-600">
                <span className="font-medium text-primary-600">{meal.calories} cal</span>
                <span>P: {meal.nutrients.protein}g</span>
                <span>C: {meal.nutrients.carbs}g</span>
                <span>F: {meal.nutrients.fats}g</span>
              </div>
            </div>
            
            {/* Actions - responsive visibility */}
            <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 md:opacity-100 transition-opacity">
              <button className="p-1.5 md:p-2 text-accent-500 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors">
                <Edit className="h-3 w-3 md:h-4 md:w-4" />
              </button>
              <button className="p-1.5 md:p-2 text-accent-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                <Trash2 className="h-3 w-3 md:h-4 md:w-4" />
              </button>
              <button className="hidden md:block p-2 text-accent-500 hover:text-accent-700 hover:bg-accent-100 rounded-lg transition-colors">
                <MoreHorizontal className="h-4 w-4" />
              </button>
            </div>
          </div>
          
          {/* Ingredients - responsive display */}
          <div className="mt-2 md:mt-3">
            <p className="text-xs text-accent-600 mb-1">Ingredients:</p>
            <div className="flex flex-wrap gap-1">
              {meal.ingredients.slice(0, window.innerWidth < 768 ? 3 : 4).map((ingredient, index) => (
                <span
                  key={index}
                  className="text-xs bg-white px-2 py-1 rounded-full text-accent-700 border border-accent-200"
                >
                  {ingredient}
                </span>
              ))}
              {meal.ingredients.length > (window.innerWidth < 768 ? 3 : 4) && (
                <span className="text-xs text-accent-500">
                  +{meal.ingredients.length - (window.innerWidth < 768 ? 3 : 4)} more
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};