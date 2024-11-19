import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, Target, Users, Brain } from 'lucide-react';
import { FeatureCard } from '../components/FeatureCard';

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Logo */}
      <div className="fixed top-8 left-8 z-50">
        <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          ProfileIQ
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 pt-32 pb-24">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Shape Your Future.
                <span className="block text-4xl md:text-6xl mt-2">Own Your Career.</span>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl">
              Play, explore, and discover the path that's meant for <em className="font-bold">you</em>
            </p>

            <button 
              className="group flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-100 transition-all duration-300"
              onClick={() => navigate('/upload')}
            >
              Let's Go
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-3 gap-12">
          <FeatureCard 
            icon={<Brain className="w-8 h-8" />}
            title="Find a job that's made for you"
            description="Get personalized career recommendations based on your unique skills, interests, and goals."
          />
          <FeatureCard 
            icon={<Target className="w-8 h-8" />}
            title="Get Advice"
            description="Assisted guidance on career decisions that matter most."
          />
          <FeatureCard 
            icon={<Users className="w-8 h-8" />}
            title="Own your path"
            description="Navigate your career journey with a clear skills roadmap mapped with industry/market requirements."
          />
        </div>
      </div>

      {/* Social Proof */}
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="flex flex-wrap justify-center gap-8 text-gray-400 text-sm">
          <p>Trusted by students from</p>
          <p>Harvard University</p>
          <p>Stanford University</p>
          <p>MIT</p>
          <p>Yale University</p>
        </div>
      </div>
    </div>
  );
}