import React from 'react';
import { TrendingUp, Target, Droplets, Utensils, Calendar, Award } from 'lucide-react';
import { useUser } from '../context/UserContext';
import { StatsCard } from '../components/StatsCard';
import { ProgressRing } from '../components/ProgressRing';
import { RecentMeals } from '../components/RecentMeals';
import { AIInsights } from '../components/AIInsights';

export const Dashboard: React.FC = () => {
  const { user, dailyStats } = useUser();
  
  const caloriesProgress = (dailyStats.calories / user.targetCalories) * 100;
  const waterProgress = (dailyStats.water / user.waterIntake) * 100;

  return (
    <div className="space-y-4 md:space-y-6 animate-fade-in">
      {/* Welcome Section - responsive padding and text */}
      <div className="bg-gradient-to-r from-primary-500 via-primary-600 to-secondary-500 rounded-xl md:rounded-2xl p-4 md:p-8 text-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
          <div>
            <h1 className="text-xl md:text-3xl font-bold mb-2">Good morning, {user.name}! 🌅</h1>
            <p className="text-primary-100 text-sm md:text-lg">Ready to nourish your body with some delicious Nigerian cuisine?</p>
          </div>
          <div className="hidden lg:block">
            <div className="text-right">
              <p className="text-xl md:text-2xl font-bold">{new Date().toLocaleDateString('en-NG', { weekday: 'long' })}</p>
              <p className="text-primary-200 text-sm md:text-base">{new Date().toLocaleDateString('en-NG', { month: 'long', day: 'numeric' })}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats Grid - responsive columns */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
        <StatsCard
          title="Calories Today"
          value={`${dailyStats.calories}`}
          target={user.targetCalories}
          icon={Target}
          color="primary"
          progress={caloriesProgress}
        />
        <StatsCard
          title="Water Intake"
          value={`${dailyStats.water}`}
          target={user.waterIntake}
          icon={Droplets}
          color="blue"
          progress={waterProgress}
          unit="glasses"
        />
        <StatsCard
          title="Meals Logged"
          value={`${dailyStats.meals}`}
          target={3}
          icon={Utensils}
          color="secondary"
          progress={(dailyStats.meals / 3) * 100}
        />
        <StatsCard
          title="Weekly Streak"
          value="5"
          target={7}
          icon={Award}
          color="green"
          progress={71}
          unit="days"
        />
      </div>

      {/* Main Content Grid - responsive layout */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-6">
        {/* Nutrition Overview - responsive sizing */}
        <div className="xl:col-span-2 bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-sm border border-accent-200">
          <h2 className="text-lg md:text-xl font-semibold text-accent-900 mb-4 md:mb-6">Today's Nutrition Breakdown</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            <div className="text-center">
              <ProgressRing 
                percentage={(dailyStats.protein / 150) * 100} 
                color="primary"
                size={window.innerWidth < 640 ? 100 : 120}
              />
              <h3 className="font-semibold text-accent-900 mt-3 text-sm md:text-base">Protein</h3>
              <p className="text-xs md:text-sm text-accent-600">{dailyStats.protein}g / 150g</p>
            </div>
            
            <div className="text-center">
              <ProgressRing 
                percentage={(dailyStats.carbs / 250) * 100} 
                color="secondary"
                size={window.innerWidth < 640 ? 100 : 120}
              />
              <h3 className="font-semibold text-accent-900 mt-3 text-sm md:text-base">Carbs</h3>
              <p className="text-xs md:text-sm text-accent-600">{dailyStats.carbs}g / 250g</p>
            </div>
            
            <div className="text-center">
              <ProgressRing 
                percentage={(dailyStats.fats / 65) * 100} 
                color="blue"
                size={window.innerWidth < 640 ? 100 : 120}
              />
              <h3 className="font-semibold text-accent-900 mt-3 text-sm md:text-base">Fats</h3>
              <p className="text-xs md:text-sm text-accent-600">{dailyStats.fats}g / 65g</p>
            </div>
          </div>
        </div>

        {/* AI Insights */}
        <AIInsights />
      </div>

      {/* Recent Meals */}
      <RecentMeals />
    </div>
  );
};