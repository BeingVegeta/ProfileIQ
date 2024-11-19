import React from 'react';
import { motion } from 'framer-motion';

interface CardDeckProps {
  isShuffling: boolean;
}

export function CardDeck({ isShuffling }: CardDeckProps) {
  const tests = [
    'Maze Test',
    'Distance Test',
    'Memory Test',
    'Multimodal Memory',
    'Naming Test',
    'Attention Test'
  ];

  return (
    <div className="relative h-[400px] w-[300px] mx-auto">
      {tests.map((test, index) => (
        <motion.div
          key={test}
          className="absolute top-0 left-0 w-full"
          initial={{ 
            rotateY: 0,
            x: 0,
            y: index * 2,
            zIndex: tests.length - index 
          }}
          animate={isShuffling ? {
            rotateY: [0, 180, 360],
            x: [0, -200, 200, 0],
            y: [index * 2, -50, -50, index === 0 ? 0 : 400],
            zIndex: index === 0 ? tests.length : 0
          } : {
            rotateY: 0,
            x: 0,
            y: index === 0 ? 0 : 400,
            zIndex: index === 0 ? tests.length : 0
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.4, 0.6, 1]
          }}
        >
          <div className="w-full h-[200px] rounded-2xl p-6 transform preserve-3d">
            {/* Card Front */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-xl flex flex-col items-center justify-center p-6 backface-hidden">
              <div className="w-16 h-16 rounded-full bg-white/10 mb-4 flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-white text-center">{test}</h3>
            </div>
            
            {/* Card Back */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-900 to-pink-900 shadow-xl flex items-center justify-center p-6 backface-hidden rotateY-180">
              <div className="w-full h-full rounded-xl bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.1)_75%,transparent_75%,transparent)] bg-[length:10px_10px]" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}