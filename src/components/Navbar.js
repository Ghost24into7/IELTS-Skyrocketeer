import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent leading-tight">IELTS Mastery</h1>
              <p className="text-xs text-gray-500 font-medium">Excellence in Education</p>
            </div>
            <h1 className="sm:hidden text-xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">IELTS</h1>
          </motion.div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <a 
              href="#home" 
              className="text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200"
            >
              Home
            </a>
            <a 
              href="#courses" 
              className="text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200"
            >
              Courses
            </a>
            <a 
              href="#about" 
              className="text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200"
            >
              About
            </a>
            <a 
              href="#contact" 
              className="text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200"
            >
              Contact
            </a>
            <div className="flex items-center space-x-2 ml-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-indigo-600 text-indigo-600 px-5 py-2 rounded-full hover:bg-indigo-50 transition-all duration-300 font-semibold text-sm"
              >
                Sign In
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(79, 70, 229, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 text-white px-6 py-2 rounded-full hover:from-indigo-700 hover:via-blue-700 hover:to-cyan-600 transition-all duration-300 font-semibold shadow-lg text-sm"
              >
                Enroll Now
              </motion.button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none focus:text-indigo-600 p-2 rounded-lg hover:bg-indigo-50 transition-colors"
              aria-label="Toggle mobile menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200 overflow-hidden">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <a
              href="#home"
              className="flex items-center text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 px-4 py-3 rounded-lg text-base font-semibold transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </a>
            <a
              href="#courses"
              className="flex items-center text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 px-4 py-3 rounded-lg text-base font-semibold transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Courses
            </a>
            <a
              href="#about"
              className="flex items-center text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 px-4 py-3 rounded-lg text-base font-semibold transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              About
            </a>
            <a
              href="#contact"
              className="flex items-center text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 px-4 py-3 rounded-lg text-base font-semibold transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact
            </a>
            <div className="pt-2 space-y-2">
              <button className="w-full text-center border-2 border-indigo-600 text-indigo-600 px-4 py-3 rounded-lg hover:bg-indigo-50 transition-all duration-200 font-semibold">
                Sign In
              </button>
              <button className="w-full text-center bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 text-white px-4 py-3 rounded-lg hover:from-indigo-700 hover:via-blue-700 hover:to-cyan-600 transition-all duration-200 font-semibold shadow-lg">
                Enroll Now
              </button>
            </div>
          </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;