import React, { useState } from 'react';
import { Brain } from 'lucide-react';
import { GlowReveal } from '../components/GlowReveal';

export function Wheel() {
  const [hasStarted, setHasStarted] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),rgba(0,0,0,0))]" />
      <div className="absolute top-20 -left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-20 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 py-20 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-16 space-y-6">
            <div className="inline-flex items-center gap-2 text-purple-400 mb-4">
              <Brain className="w-6 h-6" />
              <span className="text-sm font-medium tracking-wider uppercase">Discover Your Potential</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Let's Explore Beyond the Resume
            </h1>
            
            {!hasStarted && (
              <button
                onClick={() => setHasStarted(true)}
                className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-100 transition-all duration-300"
              >
                Click Start to play
              </button>
            )}
          </div>

          {/* Glow Reveal Container */}
          <div className="relative max-w-3xl mx-auto">
            <GlowReveal autoStart={hasStarted} />
          </div>
        </div>
      </div>
    </div>
  );
}