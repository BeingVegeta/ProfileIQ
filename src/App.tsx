import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Upload } from './pages/Upload';
import { Wheel } from './pages/Wheel';
import { SkillMap } from './pages/SkillMap';
import { CareerRoadmap } from './pages/CareerRoadmap';
import { MazeGame } from './pages/MazeGame';
import { JobProfiles } from './pages/JobProfiles';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/wheel" element={<Wheel />} />
        <Route path="/skill-map" element={<SkillMap />} />
        <Route path="/career-roadmap" element={<CareerRoadmap />} />
        <Route path="/maze-game" element={<MazeGame />} />
        <Route path="/job-profiles" element={<JobProfiles />} />
      </Routes>
    </Router>
  );
}

export default App;