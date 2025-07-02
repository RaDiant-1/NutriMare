import React, { useState } from 'react';
import { User, Target, Heart, Award, Settings, Edit, Camera } from 'lucide-react';
import { useUser } from '../context/UserContext';

export const Profile: React.FC = () => {
  const { user, updateUser } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState(user);

  const handleSave = () => {
    updateUser(editForm);
    setIsEditing(false);
  };

  const achievements = [
    { name: '7-Day Streak', icon: '🔥', description: 'Logged meals for 7 consecutive days', earned: true },
    { name: 'Protein Master', icon: '💪', description: 'Met protein goals for 5 days', earned: true },
    { name: 'Veggie Lover', icon: '🥬', description: 'Ate vegetables in 10 meals', earned: false },
    { name: 'Water Champion', icon: '💧', description: 'Met hydration goals for 30 days', earned: false },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white">
        <div className="flex items-center space-x-6">
          <div className="relative">
            <div className="h-24 w-24 bg-white/20 rounded-full flex items-center justify-center">
              <User className="h-12 w-12 text-white" />
            </div>
            <button className="absolute bottom-0 right-0 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
              <Camera className="h-3 w-3 text-white" />
            </button>
          </div>
          
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <h1 className="text-3xl font-bold">{user.name}</h1>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
              >
                <Edit className="h-4 w-4" />
              </button>
            </div>
            <p className="text-primary-100 mb-2">{user.location}</p>
            <div className="flex items-center space-x-4 text-sm">
              <span className="flex items-center space-x-1">
                <Target className="h-4 w-4" />
                <span>{user.targetCalories} cal/day</span>
              </span>
              <span className="flex items-center space-x-1">
                <Heart className="h-4 w-4" />
                <span>{user.healthGoals.join(', ')}</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Information */}
        <div className="lg:col-span-2 space-y-6">
          {/* Personal Information */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-accent-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-accent-900">Personal Information</h2>
              {!isEditing && (
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex items-center space-x-2 px-4 py-2 text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                >
                  <Edit className="h-4 w-4" />
                  <span>Edit</span>
                </button>
              )}
            </div>

            {isEditing ? (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-accent-900 mb-2">Name</label>
                    <input
                      type="text"
                      value={editForm.name}
                      onChange={(e) => setEditForm({...editForm, name: e.target.value})}
                      className="w-full px-4 py-3 border border-accent-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-accent-900 mb-2">Age</label>
                    <input
                      type="number"
                      value={editForm.age}
                      onChange={(e) => setEditForm({...editForm, age: parseInt(e.target.value)})}
                      className="w-full px-4 py-3 border border-accent-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-accent-900 mb-2">Location</label>
                  <input
                    type="text"
                    value={editForm.location}
                    onChange={(e) => setEditForm({...editForm, location: e.target.value})}
                    className="w-full px-4 py-3 border border-accent-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-accent-900 mb-2">Target Calories</label>
                  <input
                    type="number"
                    value={editForm.targetCalories}
                    onChange={(e) => setEditForm({...editForm, targetCalories: parseInt(e.target.value)})}
                    className="w-full px-4 py-3 border border-accent-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                <div className="flex space-x-3 pt-4">
                  <button
                    onClick={handleSave}
                    className="flex-1 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl hover:from-primary-600 hover:to-secondary-600 transition-all duration-200"
                  >
                    Save Changes
                  </button>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="flex-1 py-3 bg-accent-100 text-accent-700 rounded-xl hover:bg-accent-200 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-accent-600 mb-1">Age</label>
                    <p className="text-lg text-accent-900">{user.age} years old</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-accent-600 mb-1">Daily Calorie Goal</label>
                    <p className="text-lg text-accent-900">{user.targetCalories} calories</p>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-accent-600 mb-2">Health Goals</label>
                  <div className="flex flex-wrap gap-2">
                    {user.healthGoals.map((goal, index) => (
                      <span key={index} className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                        {goal}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-accent-600 mb-2">Favorite Dishes</label>
                  <div className="flex flex-wrap gap-2">
                    {user.favoriteDishes.map((dish, index) => (
                      <span key={index} className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm">
                        {dish}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Achievements */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-accent-200">
            <h2 className="text-xl font-semibold text-accent-900 mb-6">Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                    achievement.earned
                      ? 'bg-gradient-to-r from-primary-50 to-secondary-50 border-primary-200'
                      : 'bg-accent-50 border-accent-200 opacity-60'
                  }`}
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-2xl">{achievement.icon}</span>
                    <h3 className="font-medium text-accent-900">{achievement.name}</h3>
                    {achievement.earned && (
                      <Award className="h-4 w-4 text-primary-600" />
                    )}
                  </div>
                  <p className="text-sm text-accent-600">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Stats */}
        <div className="space-y-6">
          {/* Quick Stats */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-accent-200">
            <h3 className="text-lg font-semibold text-accent-900 mb-4">This Week</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-accent-600">Meals Logged</span>
                <span className="font-semibold text-accent-900">18/21</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-accent-600">Avg Calories</span>
                <span className="font-semibold text-accent-900">1,845</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-accent-600">Water Goals Met</span>
                <span className="font-semibold text-accent-900">5/7</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-accent-600">Active Days</span>
                <span className="font-semibold text-accent-900">7/7</span>
              </div>
            </div>
          </div>

          {/* AI Insights */}
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-6 border border-primary-200">
            <h3 className="text-lg font-semibold text-accent-900 mb-4">AI Insights</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <span className="text-lg">📈</span>
                <p className="text-sm text-accent-700">Your protein intake has improved by 25% this month!</p>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-lg">🎯</span>
                <p className="text-sm text-accent-700">You're consistently meeting your hydration goals.</p>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-lg">💡</span>
                <p className="text-sm text-accent-700">Try adding more vegetables to reach your fiber goals.</p>
              </div>
            </div>
          </div>

          {/* Settings */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-accent-200">
            <h3 className="text-lg font-semibold text-accent-900 mb-4">Settings</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-accent-50 rounded-lg transition-colors">
                <Settings className="h-4 w-4 text-accent-600" />
                <span className="text-accent-700">Notification Preferences</span>
              </button>
              <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-accent-50 rounded-lg transition-colors">
                <User className="h-4 w-4 text-accent-600" />
                <span className="text-accent-700">Privacy Settings</span>
              </button>
              <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-accent-50 rounded-lg transition-colors">
                <Heart className="h-4 w-4 text-accent-600" />
                <span className="text-accent-700">Health Integrations</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};