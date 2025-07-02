import React from 'react';
import { Bell, Search, User } from 'lucide-react';
import { useUser } from '../context/UserContext';

export const Header: React.FC = () => {
  const { user } = useUser();

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-accent-200 px-4 md:px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Search - responsive width */}
        <div className="flex items-center space-x-4 flex-1 max-w-md">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent-500 h-4 w-4" />
            <input
              type="text"
              placeholder="Search meals, recipes..."
              className="pl-10 pr-4 py-2 w-full bg-white border border-accent-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-sm"
            />
          </div>
        </div>
        
        {/* User section - responsive layout */}
        <div className="flex items-center space-x-2 md:space-x-4">
          {/* Notification bell */}
          <div className="relative">
            <Bell className="h-5 w-5 text-accent-600 hover:text-primary-600 cursor-pointer transition-colors" />
            <span className="absolute -top-1 -right-1 h-2 w-2 bg-secondary-500 rounded-full"></span>
          </div>
          
          {/* User info - hidden on small screens, shown on md+ */}
          <div className="hidden md:flex items-center space-x-3">
            <div className="text-right">
              <p className="text-sm font-medium text-accent-900">{user.name}</p>
              <p className="text-xs text-accent-600">{user.location}</p>
            </div>
            <div className="h-8 w-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
              <User className="h-4 w-4 text-white" />
            </div>
          </div>
          
          {/* Mobile user avatar only */}
          <div className="md:hidden h-8 w-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
            <User className="h-4 w-4 text-white" />
          </div>
        </div>
      </div>
    </header>
  );
};