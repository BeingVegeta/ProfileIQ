import React from 'react';
import { motion } from 'framer-motion';

interface SpinningWheelProps {
  isSpinning: boolean;
}

export function SpinningWheel({ isSpinning }: SpinningWheelProps) {
  const sections = [
    'Maze Test',
    'Distance Test',
    'Memory Test',
    'Multimodal Memory',
    'Naming Test',
    'Attention Test'
  ];

  const colors = [
    'bg-purple-600', // Deep Purple
    'bg-pink-500',   // Pink
    'bg-purple-500', // Medium Purple
    'bg-pink-600',   // Deep Pink
    'bg-purple-400', // Light Purple
    'bg-pink-400'    // Light Pink
  ];

  // Always stop at Maze Test (0 degrees)
  const rotate = isSpinning ? 1800 : 0;

  return (
    <div className="relative w-[600px] h-[600px] mx-auto">
      {/* Stationary text layer */}
      <div className="absolute inset-0 z-10">
        {sections.map((section, index) => {
          const rotation = index * 60 + 30;
          return (
            <div
              key={`text-${section}`}
              className="absolute w-full h-full"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              <div 
                className="absolute top-1/2 left-1/2 transform -translate-y-1/2"
                style={{ 
                  transformOrigin: '0 50%',
                  transform: 'translateX(60px) rotate(-90deg)',
                  width: '200px',
                  textAlign: 'center'
                }}
              >
                <p className="text-2xl font-bold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] whitespace-nowrap">
                  {section}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Rotating wheel layer */}
      <motion.div
        className="w-full h-full rounded-full relative overflow-hidden shadow-2xl"
        animate={{ rotate }}
        transition={{
          duration: 3,
          ease: "easeOut"
        }}
      >
        {sections.map((section, index) => {
          const rotation = (index * 60);
          return (
            <div
              key={`segment-${section}`}
              className="absolute w-full h-full"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              {/* Section background */}
              <div 
                className={`absolute top-0 left-0 w-1/2 h-full origin-right ${colors[index]} transition-colors duration-300`}
                style={{
                  transform: 'rotate(30deg) skewY(-30deg)',
                }}
              >
                {/* Inner pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.1)_75%,transparent_75%,transparent)] bg-[length:10px_10px]" />
              </div>

              {/* Divider line */}
              <div className="absolute top-0 left-1/2 h-[48%] w-1 bg-white/50 shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
            </div>
          );
        })}

        {/* Center decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-900 to-pink-900 shadow-lg flex items-center justify-center">
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-purple-700 to-pink-700 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-300 to-pink-300 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-white to-purple-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Pointer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 z-20">
        <div className="w-8 h-8 bg-gradient-to-br from-purple-300 to-pink-300 rotate-45 transform-gpu shadow-lg" />
      </div>

      {/* Outer ring */}
      <div className="absolute inset-0 rounded-full border-[12px] border-gradient-to-br from-purple-900 to-pink-900 shadow-[0_0_30px_rgba(168,85,247,0.3)]" />
    </div>
  );
}