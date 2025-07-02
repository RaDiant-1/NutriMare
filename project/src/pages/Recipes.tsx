import React, { useState } from 'react';
import { Search, Filter, Clock, Users, ChefHat, Heart, Star } from 'lucide-react';
import { RecipeCard } from '../components/RecipeCard';

const featuredRecipes = [
  {
    id: 1,
    name: 'Authentic Jollof Rice',
    description: 'The perfect Nigerian jollof rice with aromatic spices and tender chicken',
    image: 'https://images.pexels.com/photos/6544222/pexels-photo-6544222.jpeg?auto=compress&cs=tinysrgb&w=600',
    cookTime: 45,
    servings: 4,
    difficulty: 'Medium',
    calories: 520,
    rating: 4.8,
    cuisine: 'Nigerian',
    tags: ['Rice', 'Main Course', 'Family Favorite'],
    nutrients: { protein: 25, carbs: 68, fats: 18 }
  },
  {
    id: 2,
    name: 'Spicy Fish Pepper Soup',
    description: 'Traditional Nigerian pepper soup that warms the soul',
    image: 'https://images.pexels.com/photos/7363179/pexels-photo-7363179.jpeg?auto=compress&cs=tinysrgb&w=600',
    cookTime: 30,
    servings: 3,
    difficulty: 'Easy',
    calories: 280,
    rating: 4.6,
    cuisine: 'Nigerian',
    tags: ['Soup', 'Spicy', 'Low Carb'],
    nutrients: { protein: 28, carbs: 12, fats: 8 }
  },
  {
    id: 3,
    name: 'Healthy Plantain & Eggs',
    description: 'Quick and nutritious breakfast combining sweet plantain with protein-rich eggs',
    image: 'https://images.pexels.com/photos/4449161/pexels-photo-4449161.jpeg?auto=compress&cs=tinysrgb&w=600',
    cookTime: 15,
    servings: 2,
    difficulty: 'Easy',
    calories: 320,
    rating: 4.5,
    cuisine: 'Nigerian',
    tags: ['Breakfast', 'Quick', 'Protein Rich'],
    nutrients: { protein: 14, carbs: 42, fats: 16 }
  },
  {
    id: 4,
    name: 'Egusi Soup with Spinach',
    description: 'Rich and creamy egusi soup loaded with vegetables and lean protein',
    image: 'https://images.pexels.com/photos/5737389/pexels-photo-5737389.jpeg?auto=compress&cs=tinysrgb&w=600',
    cookTime: 60,
    servings: 6,
    difficulty: 'Hard',
    calories: 450,
    rating: 4.9,
    cuisine: 'Nigerian',
    tags: ['Soup', 'Traditional', 'High Protein'],
    nutrients: { protein: 32, carbs: 15, fats: 35 }
  },
  {
    id: 5,
    name: 'Grilled Suya Beef',
    description: 'Smoky, spicy grilled beef with traditional suya spices',
    image: 'https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&w=600',
    cookTime: 25,
    servings: 4,
    difficulty: 'Medium',
    calories: 380,
    rating: 4.7,
    cuisine: 'Nigerian',
    tags: ['Grilled', 'Spicy', 'Street Food'],
    nutrients: { protein: 35, carbs: 8, fats: 22 }
  },
  {
    id: 6,
    name: 'Moi Moi (Bean Pudding)',
    description: 'Steamed bean pudding packed with protein and flavor',
    image: 'https://images.pexels.com/photos/7362654/pexels-photo-7362654.jpeg?auto=compress&cs=tinysrgb&w=600',
    cookTime: 50,
    servings: 8,
    difficulty: 'Medium',
    calories: 220,
    rating: 4.4,
    cuisine: 'Nigerian',
    tags: ['Steamed', 'Protein Rich', 'Traditional'],
    nutrients: { protein: 18, carbs: 25, fats: 6 }
  }
];

const categories = ['All', 'Breakfast', 'Main Course', 'Soup', 'Snacks', 'Quick Meals'];
const filters = ['Easy', 'Medium', 'Hard', 'Under 30 min', 'High Protein', 'Low Carb'];

export const Recipes: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const filteredRecipes = featuredRecipes.filter(recipe => {
    const matchesSearch = recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recipe.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || 
                           recipe.tags.some(tag => tag.toLowerCase().includes(selectedCategory.toLowerCase()));
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-accent-900 mb-2">Nigerian Recipes</h1>
          <p className="text-accent-600">Discover healthy, traditional recipes tailored for you</p>
        </div>
        
        <div className="flex items-center space-x-3 mt-4 md:mt-0">
          <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-accent-300 rounded-xl hover:bg-accent-50 transition-colors">
            <Heart className="h-4 w-4 text-accent-600" />
            <span className="text-sm text-accent-700">Favorites</span>
          </button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-accent-200">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent-500 h-4 w-4" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search recipes... (e.g., jollof rice, pepper soup)"
              className="w-full pl-10 pr-4 py-3 bg-accent-50 border border-accent-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          
          {/* Filter Button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 px-6 py-3 bg-accent-100 text-accent-700 rounded-xl hover:bg-accent-200 transition-colors"
          >
            <Filter className="h-4 w-4" />
            <span>Filters</span>
          </button>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mt-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white'
                  : 'bg-accent-100 text-accent-700 hover:bg-accent-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Advanced Filters */}
        {showFilters && (
          <div className="mt-4 p-4 bg-accent-50 rounded-xl border border-accent-200 animate-slide-up">
            <h3 className="text-sm font-medium text-accent-900 mb-3">Advanced Filters</h3>
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => {
                    setSelectedFilters(prev =>
                      prev.includes(filter)
                        ? prev.filter(f => f !== filter)
                        : [...prev, filter]
                    );
                  }}
                  className={`px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${
                    selectedFilters.includes(filter)
                      ? 'bg-primary-500 text-white'
                      : 'bg-white text-accent-700 hover:bg-accent-100 border border-accent-300'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* AI Recipe Suggestions */}
      <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-6 border border-primary-200">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg">
            <ChefHat className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-lg font-semibold text-accent-900">AI Recipe Recommendations</h2>
        </div>
        <p className="text-accent-700 mb-4">
          Based on your recent meals and nutritional goals, here are some personalized suggestions:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-4 border border-primary-200">
            <h3 className="font-medium text-accent-900 mb-2">🥗 For More Vegetables</h3>
            <p className="text-sm text-accent-600">Try "Vegetable Soup with Wheat" - it's rich in fiber and vitamins you need!</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-primary-200">
            <h3 className="font-medium text-accent-900 mb-2">🍖 Lean Protein Focus</h3>
            <p className="text-sm text-accent-600">Grilled fish with herbs would be perfect for your protein goals.</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-primary-200">
            <h3 className="font-medium text-accent-900 mb-2">⚡ Quick & Healthy</h3>
            <p className="text-sm text-accent-600">Beans and plantain - ready in 20 minutes with complete nutrition!</p>
          </div>
        </div>
      </div>

      {/* Recipe Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>

      {/* No Results */}
      {filteredRecipes.length === 0 && (
        <div className="text-center py-12">
          <div className="h-16 w-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="h-8 w-8 text-accent-500" />
          </div>
          <h3 className="text-lg font-medium text-accent-900 mb-2">No recipes found</h3>
          <p className="text-accent-600 mb-4">Try adjusting your search or filters</p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('All');
              setSelectedFilters([]);
            }}
            className="px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl hover:from-primary-600 hover:to-secondary-600 transition-all duration-200"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
};