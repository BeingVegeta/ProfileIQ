import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const tests = [
  { name: 'Maze Test', icon: '🎯' },
  { name: 'Distance Estimation Test', icon: '📏' },
  { name: 'Lexical Memory Test', icon: '🧠' },
  { name: 'Multimodal Lexical Memory', icon: '💭' },
  { name: 'Naming Test', icon: '🏷️' },
  { name: 'Divided Attention Test', icon: '👁️' }
];

interface GlowRevealProps {
  autoStart?: boolean;
}

export function GlowReveal({ autoStart = false }: GlowRevealProps) {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedTest, setSelectedTest] = useState<string | null>(null);
  const [hasStarted, setHasStarted] = useState(false);

  const startAnimation = useCallback(() => {
    if (hasStarted) return;
    
    setIsAnimating(true);
    setHasStarted(true);

    // Simulate random selection animation
    const duration = 2000; // 2 seconds
    const interval = 100; // Switch every 100ms
    let elapsed = 0;

    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * tests.length);
      setSelectedTest(tests[randomIndex].name);
      elapsed += interval;

      if (elapsed >= duration) {
        clearInterval(intervalId);
        setIsAnimating(false);
        // Always end on Maze Test
        setSelectedTest('Maze Test');
      }
    }, interval);
  }, [hasStarted]);

  useEffect(() => {
    if (autoStart) {
      startAnimation();
    }
  }, [autoStart, startAnimation]);

  const handleBeginTest = () => {
    navigate('/skill-map');
  };

  return (
    <div className="relative">
      {/* Test Options Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        {tests.map(({ name, icon }) => (
          <motion.div
            key={name}
            className={`relative p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 ${
              selectedTest === name
                ? 'bg-gradient-to-br from-purple-500/30 to-pink-500/30 ring-2 ring-purple-400'
                : 'bg-white/5 hover:bg-white/10'
            }`}
            animate={{
              scale: selectedTest === name ? 1.05 : 1,
              opacity: selectedTest && selectedTest !== name ? 0.5 : 1
            }}
          >
            {/* Glow Effect */}
            <AnimatePresence>
              {selectedTest === name && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </AnimatePresence>

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-full bg-white/10 mb-4 flex items-center justify-center text-2xl">
                {icon}
              </div>
              <h3 className="text-xl font-semibold">{name}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="space-y-6">
        {selectedTest === 'Maze Test' && !isAnimating && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-purple-400">
              Get Ready for the Maze Test!
            </h2>
            <p className="text-gray-300">
              This engaging challenge will help us understand your problem-solving abilities and spatial awareness.
            </p>
            <button 
              onClick={handleBeginTest}
              className="relative inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-100 transition-all duration-300"
            >
              <span>Begin Test</span>
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}