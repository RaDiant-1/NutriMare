import React, { createContext, useContext, useState, ReactNode } from 'react';

interface UserProfile {
  name: string;
  age: number;
  location: string;
  healthGoals: string[];
  dietaryRestrictions: string[];
  favoriteDishes: string[];
  targetCalories: number;
  waterIntake: number;
}

interface UserContextType {
  user: UserProfile;
  updateUser: (updates: Partial<UserProfile>) => void;
  dailyStats: {
    calories: number;
    protein: number;
    carbs: number;
    fats: number;
    water: number;
    meals: number;
  };
  updateDailyStats: (stats: any) => void;
}

const defaultUser: UserProfile = {
  name: 'Amaka',
  age: 28,
  location: 'Lagos, Nigeria',
  healthGoals: ['Weight Management', 'Increased Energy'],
  dietaryRestrictions: [],
  favoriteDishes: ['Jollof Rice', 'Pepper Soup', 'Plantain'],
  targetCalories: 2000,
  waterIntake: 8,
};

const defaultStats = {
  calories: 1240,
  protein: 65,
  carbs: 140,
  fats: 48,
  water: 5,
  meals: 2,
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile>(defaultUser);
  const [dailyStats, setDailyStats] = useState(defaultStats);

  const updateUser = (updates: Partial<UserProfile>) => {
    setUser(prev => ({ ...prev, ...updates }));
  };

  const updateDailyStats = (stats: any) => {
    setDailyStats(prev => ({ ...prev, ...stats }));
  };

  return (
    <UserContext.Provider value={{ user, updateUser, dailyStats, updateDailyStats }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};