import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, MessageCircle, Utensils, BookOpen, User, ChefHat } from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/', icon: Home },
  { name: 'Chat with NutriMate', href: '/chat', icon: MessageCircle },
  { name: 'Meal Log', href: '/meals', icon: Utensils },
  { name: 'Recipes', href: '/recipes', icon: BookOpen },
  { name: 'Profile', href: '/profile', icon: User },
];

export const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-white/90 backdrop-blur-md border-r border-accent-200 flex flex-col">
      <div className="p-6">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
            <ChefHat className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-accent-900">NutriMate</h1>
            <p className="text-xs text-accent-600">Your AI Meal Assistant</p>
          </div>
        </div>
      </div>
      
      <nav className="flex-1 px-4 space-y-2">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) =>
              `flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg transform scale-105'
                  : 'text-accent-700 hover:bg-accent-100 hover:text-accent-900'
              }`
            }
          >
            <item.icon className="h-5 w-5" />
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
      
      <div className="p-4">
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-4 border border-primary-200">
          <h3 className="text-sm font-semibold text-accent-900 mb-2">Pro Tip</h3>
          <p className="text-xs text-accent-700">
            Try asking NutriMate: "What's a healthy Nigerian breakfast I can make in 15 minutes?"
          </p>
        </div>
      </div>
    </div>
  );
};