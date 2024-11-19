import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Star, FileCheck, ArrowRight, X, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface JobProfile {
  job_title: string;
  resume_strength_score: number;
  "Profile Requirement": string;
  Match: string;
}

interface JobListing {
  url: string;
  content: string;
}

export function JobProfiles() {
  const navigate = useNavigate();
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  
  const jobListings: JobListing[] = [
    {
      url: 'https://www.glassdoor.com/Jobs/Vertex-Pharmaceuticals-Jobs-E2080.htm',
      content: '9 hours ago · Boston, MA. $83K - $155K (Glassdoor est.) 9d. Vertex Summer 2025 Intern, Data Science, Computational Science, and Analytics (Boston, MA). Boston, MA. 30d+.'
    },
    {
      url: 'https://www.linkedin.com/company/boston-scientific/jobs',
      content: '18 hours ago · Senior Commercial Data Analyst, PI. Boston Scientific. Maple Grove, MN 2 hours ... Boston Scientific jobs. 967 open jobs · Intern jobs. 48,214 open jobs'
    },
    {
      url: 'https://www.indeed.com/q-data-science-internship-summer-2025-jobs.html',
      content: '15 hours ago · 1904 Data Science Internship Summer 2025 jobs available on Indeed.com. Apply to Data Scientist, Intern, Data Science Intern and more!'
    },
    {
      url: 'https://www.indeed.com/q-Summer-Data-Science-Internship-jobs.html',
      content: '1 day ago · 190 Summer Data Science Internship jobs available on Indeed.com. Apply to Data Science Intern, Data Scientist, Data Engineer and more!'
    }
  ];

  const jobProfiles: JobProfile[] = {
    "suitable_jobs": [
      {
        "job_title": "Data Scientist",
        "resume_strength_score": 92,
        "Profile Requirement": "Expertise in data-oriented programming, visualization, and machine learning application.",
        "Match": "Skills in Python, ReactJS, ArcGIS, and data visualization projects."
      },
      {
        "job_title": "AI Research Scientist",
        "resume_strength_score": 85,
        "Profile Requirement": "Advanced use of AI tools for creating realistic digital personas and conducting AI workshops.",
        "Match": "Experience with generative AI, AI-driven speech projects, and teaching complex AI concepts."
      },
      {
        "job_title": "Business Intelligence Analyst",
        "resume_strength_score": 90,
        "Profile Requirement": "Ability to analyze business data and present actionable intelligence.",
        "Match": "Experience in dynamic data visualization and simplification of complex data for presentations."
      },
      {
        "job_title": "Systems Analyst",
        "resume_strength_score": 78,
        "Profile Requirement": "Skills in software development, database management, and technology integration.",
        "Match": "Development of backend systems using various APIs and integration of complex software solutions."
      },
      {
        "job_title": "Project Manager",
        "resume_strength_score": 83,
        "Profile Requirement": "Leadership in managing tech projects and optimizing team workflows.",
        "Match": "Managed AI-driven project implementations and coordinated with educational staff for system integration."
      }
    ]
  }.suitable_jobs;

  const JobDetailsModal = ({ onClose }: { onClose: () => void }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-gray-900 rounded-2xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Data Scientist</h2>
            <div className="flex items-center gap-2 text-purple-400">
              <Star className="w-5 h-5 fill-current" />
              <span>93% Match</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-6">
          <section>
            <h3 className="text-lg font-semibold mb-3 text-purple-400">Recent Job Listings</h3>
            <div className="space-y-4">
              {jobListings.map((listing, index) => (
                <a
                  key={index}
                  href={listing.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group"
                >
                  <div className="flex justify-between items-start gap-4">
                    <p className="text-gray-300">{listing.content}</p>
                    <ExternalLink className="w-5 h-5 flex-shrink-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>
                </a>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-3 text-purple-400">Skills Required</h3>
            <div className="flex flex-wrap gap-2">
              {['Python', 'Machine Learning', 'SQL', 'Data Visualization', 'Statistical Analysis', 'Deep Learning', 'NLP'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-3 text-purple-400">Career Growth</h3>
            <div className="bg-white/5 rounded-xl p-4">
              <div className="flex items-center gap-4 text-sm">
                <div className="flex-1">
                  <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                  <p className="mt-2">Entry Level</p>
                </div>
                <div className="flex-1">
                  <div className="h-2 bg-white/20 rounded-full" />
                  <p className="mt-2">Mid Level</p>
                </div>
                <div className="flex-1">
                  <div className="h-2 bg-white/20 rounded-full" />
                  <p className="mt-2">Senior Level</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white p-8">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),rgba(0,0,0,0))]" />
      <div className="absolute top-20 -left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-20 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 text-purple-400 mb-4"
          >
            <Briefcase className="w-5 h-5" />
            <span className="text-sm font-medium tracking-wider uppercase">Career Matches</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Your Top Career Matches
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Based on your profile and skills, here are the career paths that best align with your expertise
          </motion.p>
        </div>

        {/* Job Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {jobProfiles.map((job, index) => (
            <motion.div
              key={job.job_title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 3) }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur group-hover:blur-xl transition-all duration-300" />
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 h-full border border-white/10 hover:border-purple-500/50 transition-colors duration-300">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold">{job.job_title}</h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <span className="font-semibold">{job.resume_strength_score}%</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-purple-400 mb-2">Requirements</h4>
                    <p className="text-gray-300 text-sm">{job["Profile Requirement"]}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-green-400 mb-2">Your Match</h4>
                    <p className="text-gray-300 text-sm">{job.Match}</p>
                  </div>

                  <button 
                    className="w-full mt-4 flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white rounded-lg py-2 transition-colors duration-300"
                    onClick={() => job.job_title === "Data Scientist" && setSelectedJob(job.job_title)}
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Career Navigator Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <button
            onClick={() => navigate('/career-roadmap')}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all duration-300"
          >
            <span>View your Career Navigator</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>

      {/* Add the modal */}
      <AnimatePresence>
        {selectedJob === "Data Scientist" && (
          <JobDetailsModal onClose={() => setSelectedJob(null)} />
        )}
      </AnimatePresence>
    </div>
  );
} 