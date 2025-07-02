import React, { ReactNode, useState } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { NavLink } from 'react-router-dom';
import { Home, MessageCircle, Utensils, BookOpen, User, ChefHat, Menu, X } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

const navigation = [
  { name: 'Dashboard', href: '/', icon: Home },
  { name: 'Chat with NutriMate', href: '/chat', icon: MessageCircle },
  { name: 'Meal Log', href: '/meals', icon: Utensils },
  { name: 'Recipes', href: '/recipes', icon: BookOpen },
  { name: 'Profile', href: '/profile', icon: User },
];

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="flex h-screen bg-gradient-to-br from-accent-50 to-accent-100">
      {/* Desktop Sidebar - hidden on mobile */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Mobile Menu Button - only visible on mobile */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="p-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-accent-200 hover:bg-white transition-all duration-200"
          aria-label="Open navigation menu"
        >
          <Menu className="h-6 w-6 text-accent-700" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeMobileMenu}
          />
          
          {/* Mobile Menu */}
          <div className="absolute left-0 top-0 h-full w-80 bg-white/95 backdrop-blur-md border-r border-accent-200 transform transition-transform duration-300 ease-in-out">
            {/* Mobile Menu Header */}
            <div className="p-6 border-b border-accent-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                    <ChefHat className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h1 className="text-xl font-bold text-accent-900">NutriMate</h1>
                    <p className="text-xs text-accent-600">Your AI Meal Assistant</p>
                  </div>
                </div>
                <button
                  onClick={closeMobileMenu}
                  className="p-2 rounded-lg hover:bg-accent-100 transition-colors"
                  aria-label="Close navigation menu"
                >
                  <X className="h-6 w-6 text-accent-600" />
                </button>
              </div>
            </div>
            
            {/* Mobile Navigation */}
            <nav className="flex-1 px-4 py-6 space-y-2">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                        : 'text-accent-700 hover:bg-accent-100 hover:text-accent-900'
                    }`
                  }
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </NavLink>
              ))}
            </nav>
            
            {/* Mobile Menu Footer */}
            <div className="p-4 border-t border-accent-200">
              <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-4 border border-primary-200">
                <h3 className="text-sm font-semibold text-accent-900 mb-2">Pro Tip</h3>
                <p className="text-xs text-accent-700">
                  Try asking NutriMate: "What's a healthy Nigerian breakfast I can make in 15 minutes?"
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header - with mobile padding adjustment */}
        <div className="pl-16 md:pl-0">
          <Header />
        </div>
        
        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-white/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-6 max-w-7xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};