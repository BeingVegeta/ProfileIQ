import React from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import { Brain, Award, Clock, ArrowRight } from 'lucide-react';

interface StepProps {
  title: string;
  skills: string[];
  certification?: string;
  timeframe: string;
  level: number;
  totalLevels: number;
  isLeft: boolean;
}

function Step({ title, skills, certification, timeframe, level, totalLevels, isLeft }: StepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: level * 0.2 }}
      className={`relative ${isLeft ? 'text-right' : 'text-left'}`}
    >
      {/* Step Card */}
      <div 
        className={`w-80 bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10 ${
          isLeft ? 'ml-auto mr-8' : 'ml-8'
        }`}
        data-tooltip-id={`step-${level}`}
      >
        <div className={`flex items-start justify-between mb-4 ${isLeft ? 'flex-row-reverse' : ''}`}>
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <div className="flex items-center gap-2 text-purple-400 text-sm">
            <Clock className="w-4 h-4" />
            <span>{timeframe}</span>
          </div>
        </div>

        <ul className="space-y-2 mb-4">
          {skills.map((skill, index) => (
            <li key={index} className={`flex items-center gap-2 text-gray-300 ${isLeft ? 'flex-row-reverse' : ''}`}>
              <Brain className="w-4 h-4 text-purple-400" />
              <span>{skill}</span>
            </li>
          ))}
        </ul>

        {certification && (
          <div className={`flex items-center gap-2 text-pink-400 mt-4 ${isLeft ? 'flex-row-reverse' : ''}`}>
            <Award className="w-5 h-5" />
            <span className="text-sm font-medium">{certification}</span>
          </div>
        )}
      </div>

      <Tooltip
        id={`step-${level}`}
        place="top"
        content={
          <div className="max-w-xs p-2">
            <p className="text-sm text-gray-200">{`Master ${title.toLowerCase()} skills and progress to the next level of your career journey.`}</p>
          </div>
        }
      />
    </motion.div>
  );
}

export function CareerRoadmap() {
  const steps = [
    {
      title: 'Data Analyst',
      timeframe: '3 months',
      skills: [
        'SQL fundamentals',
        'Data visualization skills',
        'Python basics'
      ],
      certification: 'Tableau Certification'
    },
    {
      title: 'Junior Data Scientist',
      timeframe: '6 months',
      skills: [
        'Machine learning fundamentals',
        'Data preprocessing',
        'Advanced Python libraries'
      ],
      certification: 'ML Certification'
    },
    {
      title: 'Lead AI Engineer',
      timeframe: '1-5 years',
      skills: [
        'Deep learning',
        'Cloud deployment',
        'Statistical analysis',
        'Team leadership',
        'AI ethics'
      ],
      certification: 'Advanced AI Certification'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),rgba(0,0,0,0))]" />
      <div className="absolute top-20 -left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-20 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Path to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                AI Leadership
              </span>
            </h1>
            <p className="text-xl text-gray-300">
              A structured roadmap to guide your journey from Data Analysis to AI Engineering
            </p>
          </div>

          {/* Roadmap */}
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 to-pink-500/50" />

            {/* Steps */}
            <div className="space-y-24 relative z-10">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Timeline Node */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-black" />
                    </div>
                  </motion.div>

                  {/* Step Content */}
                  <Step
                    {...step}
                    level={index}
                    totalLevels={steps.length}
                    isLeft={index % 2 === 0}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Final Achievement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="text-center mt-20"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400">
              <Award className="w-5 h-5" />
              <span>Complete the journey to become a Lead AI Engineer</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}