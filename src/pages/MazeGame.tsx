import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface MazeProps {
  onComplete: (success: boolean) => void;
  isPractice?: boolean;
}

export function MazeGame({ onComplete, isPractice = true }: MazeProps) {
  const navigate = useNavigate();
  const [showInstructions, setShowInstructions] = useState(true);
  const [attempts, setAttempts] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedTest, setSelectedTest] = useState('');
  const [tests, setTests] = useState([
    { name: 'Maze Test', path: '/maze-game' },
    { name: 'Skill Map', path: '/skill-map' },
    { name: 'Glow Reveal', path: '/glow-reveal' },
  ]);

  const startGame = () => {
    setShowInstructions(false);
    if (!isPractice) {
      setAttempts((prev) => prev + 1);
    }
  };

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

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 p-4">
      {showInstructions ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl shadow-2xl p-10 max-w-md w-full text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">How to Play</h2>
          <p className="text-gray-200 mb-2">Use the arrow keys to navigate the ball through the maze.</p>
          <p className="text-gray-200 mb-6">Reach the bottom-left corner before the time runs out.</p>
          <button
            onClick={startGame}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform"
          >
            {isPractice ? 'Start Practice' : 'Start Game'}
          </button>
        </motion.div>
      ) : (
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="relative w-[320px] h-[320px] rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="/Screenshot 2024-11-16 153433.png" 
              alt="Maze Game Interface" 
              className="w-full h-full object-cover"
            />
            {!isPractice && (
              <div className="absolute top-4 right-4 text-sm text-white bg-black/50 px-3 py-1 rounded-full">
                Attempt {attempts}/6
              </div>
            )}
          </div>
          <div className="flex flex-col gap-4">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              onClick={() => navigate('/job-profiles')}
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all duration-300"
            >
              <span>Ready to explore your career</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      )}
    </div>
  );
}