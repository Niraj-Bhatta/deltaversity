import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Core pages
import Home from './pages/Home';
import BlogLayout from './pages/BlogLayout';
import CourseDetail from './pages/CourseDetail';
import CoreTeamPage from './pages/CoreTeamPage'; // kept for backward-compat

// About pages
import OurStoryPage     from './pages/about/OurStoryPage';
import MissionPage      from './pages/about/MissionPage';
import ValuesPage       from './pages/about/ValuesPage';
import PartnershipsPage from './pages/about/PartnershipsPage';
import ReviewsPage      from './pages/about/ReviewsPage';

// People pages
import AdvisoryBoardPage     from './pages/people/AdvisoryBoardPage';
import AcademicStandardsPage from './pages/people/AcademicStandardsPage';
import FacultyPage           from './pages/people/FacultyPage';
import CoreTeamPeoplePage    from './pages/people/CoreTeamPeoplePage';

// Contexts
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider }    from './context/ThemeContext';

/* ─────────────────────────────────────────────────────────
   Global intro loader (light sweep animation)
───────────────────────────────────────────────────────── */
const GlobalLoader = () => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div 
          initial={{ opacity: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, filter: 'blur(8px)', scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-secondary flex items-center justify-center overflow-hidden"
        >
          <motion.div
             initial={{ opacity: 0, scale: 0.95, filter: 'blur(4px)' }}
             animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
             transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
             className="relative"
          >
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-gray-300 to-gray-500 tracking-widest relative z-10"
                style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}>
              DELTAVERSITY
            </h1>
            
            {/* Light sweep */}
            <motion.div 
              initial={{ left: '-100%' }}
              animate={{ left: '150%' }}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
              className="absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-white to-transparent opacity-80 blur-md z-20 skew-x-[-20deg]"
              style={{ mixBlendMode: 'overlay' }}
            />
            
            {/* Glow */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.8, 0] }}
              transition={{ duration: 1, delay: 0.6 }}
              className="absolute inset-0 bg-primary/40 blur-3xl z-0"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/* ─────────────────────────────────────────────────────────
   App — full route table
───────────────────────────────────────────────────────── */
function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <GlobalLoader />
          <div className="min-h-screen bg-background dark:bg-slate-950 flex flex-col font-sans transition-colors duration-300">
            <Navbar />
            <Routes>
              {/* ── Home ── */}
              <Route path="/" element={<Home />} />

              {/* ── About Us ── */}
              <Route path="/about/our-story"    element={<OurStoryPage />} />
              <Route path="/about/vision-mission" element={<MissionPage />} />
              <Route path="/about/values"       element={<ValuesPage />} />
              <Route path="/about/partnership"  element={<PartnershipsPage />} />
              <Route path="/about/testimonials" element={<ReviewsPage />} />

              {/* ── Our People ── */}
              <Route path="/people/advisory-board"      element={<AdvisoryBoardPage />} />
              <Route path="/people/academic-standards"  element={<AcademicStandardsPage />} />
              <Route path="/people/faculty"             element={<FacultyPage />} />
              <Route path="/people/core-team"           element={<CoreTeamPeoplePage />} />

              {/* ── Legacy / Other ── */}
              <Route path="/core-team" element={<CoreTeamPage />} />

              {/* ── Courses ── */}
              <Route path="/courses/:id" element={<CourseDetail />} />

              {/* ── Blog ── */}
              <Route path="/blog" element={<BlogLayout />}>
                <Route index element={<div className="text-gray-600 dark:text-gray-400 py-8">Blog listing coming soon.</div>} />
                <Route path=":id" element={<div className="text-gray-600 dark:text-gray-400 py-8">Blog post content coming soon.</div>} />
              </Route>

              {/* ── Contact ── */}
              <Route path="/contact" element={
                <div className="pt-24 pb-16 text-center text-gray-600 dark:text-gray-400 min-h-[60vh]">
                  Contact page — please use the form on the Home page.
                </div>
              } />

              {/* ── 404 catch-all ── */}
              <Route path="*" element={
                <div className="pt-24 pb-16 text-center min-h-[60vh] flex flex-col items-center justify-center gap-4">
                  <p className="text-6xl font-black text-primary">404</p>
                  <p className="text-xl font-semibold text-secondary dark:text-white">Page not found</p>
                  <a href="/" className="text-primary underline hover:text-primary/70 transition-colors">Return home</a>
                </div>
              } />
            </Routes>
            <Footer />
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
