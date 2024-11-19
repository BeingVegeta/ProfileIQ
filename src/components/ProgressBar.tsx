import React from 'react';

interface ProgressBarProps {
  progress: number;
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
      <div 
        className="h-full bg-gradient-to-r from-purple-400 to-pink-600 transition-all duration-500"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}