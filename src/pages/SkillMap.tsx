import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import * as d3 from 'd3';
import { useNavigate } from 'react-router-dom';

// ... rest of the imports and interfaces remain the same ...

export function SkillMap() {
  const navigate = useNavigate();
  const svgRef = useRef<SVGSVGElement>(null);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // ... rest of the existing code remains the same until the return statement ...

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),rgba(0,0,0,0))]" />
      <div className="absolute top-20 -left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-20 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl" />

      {/* Central window */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center w-80"
        >
          <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Maze Test: Explore Your Skills
          </h2>
          <p className="text-sm text-gray-300 mb-6">
            This test highlights the cognitive abilities that help you navigate and plan.
          </p>
          <button
            onClick={() => navigate('/maze-game')}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Start Test
          </button>
        </motion.div>
      </div>

      {/* Rest of the SVG and nodes code remains the same */}
      <svg
        ref={svgRef}
        className="w-full h-screen"
        style={{ background: 'transparent' }}
      >
        {/* ... rest of the SVG content remains the same ... */}
      </svg>
    </div>
  );
}