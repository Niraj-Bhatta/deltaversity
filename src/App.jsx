import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import BlogLayout from './pages/BlogLayout';
import CourseDetail from './pages/CourseDetail';
import CoreTeamPage from './pages/CoreTeamPage';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';

const GlobalLoader = () => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div 
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-secondary flex items-center justify-center overflow-hidden"
        >
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1.05 }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="relative"
          >
            {/* The Text */}
            <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-gray-300 to-gray-500 tracking-widest relative z-10"
                style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}>
              DELTAVERSITY
            </h1>
            
            {/* The Light Sweep */}
            <motion.div 
              initial={{ left: '-100%' }}
              animate={{ left: '150%' }}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
              className="absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-white to-transparent opacity-80 blur-md z-20 skew-x-[-20deg]"
              style={{ mixBlendMode: 'overlay' }}
            />
            
            {/* The Glow */}
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

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <GlobalLoader />
          <div className="min-h-screen bg-background dark:bg-slate-950 flex flex-col font-sans transition-colors duration-300">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/courses/:id" element={<CourseDetail />} />
              <Route path="/core-team" element={<CoreTeamPage />} />
              <Route path="/blog" element={<BlogLayout />}>
                 <Route index element={<div className="text-gray-600 dark:text-gray-400">Blog listing page coming soon.</div>} />
                 <Route path=":id" element={<div className="text-gray-600 dark:text-gray-400">Blog post content coming soon.</div>} />
              </Route>
              <Route path="/contact" element={<div className="pt-24 pb-16 text-center text-gray-600 dark:text-gray-400 min-h-[60vh]">Contact page coming soon. Please return to Home.</div>} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
