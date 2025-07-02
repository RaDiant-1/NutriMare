import React from 'react';
import { Clock, Users, Star, Heart, BookOpen } from 'lucide-react';

interface Recipe {
  id: number;
  name: string;
  description: string;
  image: string;
  cookTime: number;
  servings: number;
  difficulty: string;
  calories: number;
  rating: number;
  cuisine: string;
  tags: string[];
  nutrients: {
    protein: number;
    carbs: number;
    fats: number;
  };
}

interface RecipeCardProps {
  recipe: Recipe;
}

const difficultyColors = {
  Easy: 'bg-green-100 text-green-700',
  Medium: 'bg-yellow-100 text-yellow-700',
  Hard: 'bg-red-100 text-red-700',
};

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-sm border border-accent-200 overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      {/* Recipe Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyColors[recipe.difficulty as keyof typeof difficultyColors]}`}>
            {recipe.difficulty}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
            <Heart className="h-4 w-4 text-accent-600 hover:text-red-500" />
          </button>
        </div>
        <div className="absolute bottom-3 left-3 flex items-center space-x-3 text-white text-sm">
          <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
            <Clock className="h-3 w-3" />
            <span>{recipe.cookTime}m</span>
          </div>
          <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
            <Users className="h-3 w-3" />
            <span>{recipe.servings}</span>
          </div>
        </div>
      </div>

      {/* Recipe Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-accent-900 text-lg leading-tight">{recipe.name}</h3>
          <div className="flex items-center space-x-1 ml-2">
            <Star className="h-4 w-4 text-yellow-500 fill-current" />
            <span className="text-sm font-medium text-accent-700">{recipe.rating}</span>
          </div>
        </div>

        <p className="text-accent-600 text-sm mb-4 line-clamp-2">{recipe.description}</p>

        {/* Nutrition Info */}
        <div className="flex items-center justify-between mb-4 p-3 bg-accent-50 rounded-xl">
          <div className="text-center">
            <p className="text-lg font-bold text-primary-600">{recipe.calories}</p>
            <p className="text-xs text-accent-600">calories</p>
          </div>
          <div className="text-center">
            <p className="text-sm font-semibold text-accent-900">{recipe.nutrients.protein}g</p>
            <p className="text-xs text-accent-600">protein</p>
          </div>
          <div className="text-center">
            <p className="text-sm font-semibold text-accent-900">{recipe.nutrients.carbs}g</p>
            <p className="text-xs text-accent-600">carbs</p>
          </div>
          <div className="text-center">
            <p className="text-sm font-semibold text-accent-900">{recipe.nutrients.fats}g</p>
            <p className="text-xs text-accent-600">fats</p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {recipe.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <button className="w-full flex items-center justify-center space-x-2 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl hover:from-primary-600 hover:to-secondary-600 transition-all duration-200 transform hover:scale-105">
          <BookOpen className="h-4 w-4" />
          <span className="font-medium">View Recipe</span>
        </button>
      </div>
    </div>
  );
};