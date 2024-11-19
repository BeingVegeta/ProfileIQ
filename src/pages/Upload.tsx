import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, Shield, MapPin } from 'lucide-react';
import { UploadBox } from '../components/UploadBox';
import { ProgressBar } from '../components/ProgressBar';

export function Upload() {
  const navigate = useNavigate();
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileSelect = (file: File) => {
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const handleContinue = () => {
    navigate('/wheel');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),rgba(0,0,0,0))]" />
      <div className="absolute top-20 -left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-20 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 py-20 relative">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-6">
            <div className="inline-flex items-center gap-2 text-purple-400 mb-4">
              <MapPin className="w-5 h-5" />
              <span className="text-sm font-medium tracking-wider uppercase">Your Journey Begins Here</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              What's Your Story?
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Upload your resume, sit back, and let us do the heavy lifting!
            </p>
          </div>

          {/* Upload Container */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-xl" />
            <div className="relative bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
              <UploadBox onFileSelect={handleFileSelect} />
              
              {uploadProgress > 0 && (
                <div className="mt-8 space-y-4">
                  <ProgressBar progress={uploadProgress} />
                  <p className="text-center text-gray-400 font-medium">
                    {uploadProgress < 100 
                      ? "Mapping your journey..." 
                      : "Your path is taking shape!"}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Alternative Option */}
          <div className="text-center mt-8">
            <button className="text-purple-400 hover:text-purple-300 transition-colors duration-300 text-sm">
              Rather tell us your story another way?
            </button>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12 space-y-6">
            <button 
              onClick={handleContinue}
              className={`group relative inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all duration-300 ${
                uploadProgress === 100 ? 'animate-pulse' : ''
              }`}
            >
              <span>Find My Path</span>
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>

            {/* Security Notice */}
            <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
              <Shield className="w-4 h-4" />
              <p>Your information stays with us. We'll use it only to help you find your direction.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}