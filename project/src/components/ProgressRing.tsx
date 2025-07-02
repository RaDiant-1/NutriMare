import React from 'react';

interface ProgressRingProps {
  percentage: number;
  color: 'primary' | 'secondary' | 'blue';
  size?: number;
}

const colorClasses = {
  primary: 'stroke-primary-500',
  secondary: 'stroke-secondary-500',
  blue: 'stroke-blue-500',
};

export const ProgressRing: React.FC<ProgressRingProps> = ({ 
  percentage, 
  color, 
  size = 100 
}) => {
  const radius = 40;
  const circumference = radius * 2 * Math.PI;
  const strokeDasharray = `${circumference} ${circumference}`;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  
  return (
    <div className="relative inline-flex items-center justify-center">
      <svg
        className="transform -rotate-90"
        width={size}
        height={size}
      >
        <circle
          stroke="currentColor"
          className="text-accent-200"
          strokeWidth="8"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          stroke="currentColor"
          className={colorClasses[color]}
          strokeWidth="8"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          style={{ transition: 'stroke-dashoffset 0.5s ease-in-out' }}
        />
      </svg>
      <span className="absolute text-xl font-bold text-accent-900">
        {Math.round(percentage)}%
      </span>
    </div>
  );
};