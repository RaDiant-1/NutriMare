import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  target?: number;
  icon: LucideIcon;
  color: 'primary' | 'secondary' | 'blue' | 'green';
  progress?: number;
  unit?: string;
}

const colorClasses = {
  primary: {
    bg: 'from-primary-500 to-primary-600',
    text: 'text-primary-600',
    light: 'bg-primary-50',
  },
  secondary: {
    bg: 'from-secondary-500 to-secondary-600',
    text: 'text-secondary-600',
    light: 'bg-secondary-50',
  },
  blue: {
    bg: 'from-blue-500 to-blue-600',
    text: 'text-blue-600',
    light: 'bg-blue-50',
  },
  green: {
    bg: 'from-green-500 to-green-600',
    text: 'text-green-600',
    light: 'bg-green-50',
  },
};

export const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  target,
  icon: Icon,
  color,
  progress,
  unit = '',
}) => {
  const colors = colorClasses[color];

  return (
    <div className="bg-white rounded-xl md:rounded-2xl p-3 md:p-6 shadow-sm border border-accent-200 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center justify-between mb-2 md:mb-4">
        <div className={`p-2 md:p-3 rounded-lg md:rounded-xl ${colors.light}`}>
          <Icon className={`h-4 w-4 md:h-6 md:w-6 ${colors.text}`} />
        </div>
        {progress && (
          <div className="text-right">
            <span className={`text-xs md:text-sm font-medium ${colors.text}`}>
              {Math.round(progress)}%
            </span>
          </div>
        )}
      </div>
      
      <div>
        <h3 className="text-xs md:text-sm font-medium text-accent-600 mb-1">{title}</h3>
        <div className="flex items-baseline space-x-1 md:space-x-2">
          <p className="text-lg md:text-2xl font-bold text-accent-900">
            {value}
            {unit && <span className="text-xs md:text-sm text-accent-600 ml-1">{unit}</span>}
          </p>
          {target && (
            <p className="text-xs md:text-sm text-accent-500">/ {target}</p>
          )}
        </div>
      </div>
      
      {progress && (
        <div className="mt-2 md:mt-4">
          <div className="bg-accent-200 rounded-full h-1.5 md:h-2 overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${colors.bg} transition-all duration-300 ease-out`}
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
};