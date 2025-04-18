"use client"

import React, { MouseEvent, useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

// Types for feature images
type FeatureType = 'main' | 'ai-learning' | 'quizzes' | 'flashcards';

const Hero: React.FC = () => {
  // State for tracking the active feature image
  const [activeFeature, setActiveFeature] = useState<FeatureType>('main');
  const [isMobile, setIsMobile] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  
  // Check for mobile screen size
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIsMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIsMobile);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);
  
  // Define feature callouts with their respective images and details
  const features = [
    { id: 'main', name: 'Overview', image: '/images/app-preview.png', alt: 'MicroMentor App Preview' },
    { id: 'ai-learning', name: 'AI-Powered Learning', image: '/images/ai-learning.png', alt: 'AI-Powered Learning Features' },
    { id: 'quizzes', name: 'Personalized Quizzes', image: '/images/quizzes.png', alt: 'Personalized Quiz Features' },
    { id: 'flashcards', name: 'Adaptive Flashcards', image: '/images/flashcards.png', alt: 'Adaptive Flashcards Features' },
    { id: 'dashboard', name: 'Dashboard', image: '/images/dashboard.png', alt: 'Student Dashboard' },
    { id: 'recommendations', name: 'Recommendations', image: '/images/recomendations.png', alt: 'Personalized Recommendations' },
    { id: 'teacherselection', name: 'Teacher Selection', image: '/images/teacherseclection.png', alt: 'Teacher Selection Interface' }
  ];


  const startAutoRotation = useCallback(() => {
    // Clear any existing timer
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    
    // Set up a new timer to cycle through features every 8 seconds
    timerRef.current = setInterval(() => {
      setActiveFeature(current => {
        // Find the current index
        const currentIndex = features.findIndex(f => f.id === current);
        // Move to next feature or back to the first if at the end
        const nextIndex = (currentIndex + 1) % features.length;
        return features[nextIndex].id as FeatureType;
      });
    }, 8000); // 8 seconds for slower rotation
  }, [features]);
  
  // Set up automatic cycling through features
  useEffect(() => {
    startAutoRotation();
    
    // Cleanup timer on unmount
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [startAutoRotation]);
  
  // Handler for feature callout clicks
  const handleFeatureClick = (feature: FeatureType) => {
    setActiveFeature(feature);
    // Reset the auto-rotation timer when a feature is clicked
    startAutoRotation();
  };
  
  const handleScrollToDownload = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    const downloadSection = document.getElementById('download');
    if (downloadSection) {
      downloadSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // Helper function to determine if a feature is active
  const isFeatureActive = (feature: string): boolean => {
    return activeFeature === feature;
  };
  
  // Find the current active feature object
  const currentFeature = features.find(f => f.id === activeFeature) || features[0];
  
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-indigo-700 via-indigo-600 to-green-500 overflow-hidden">
      {/* Simple abstract background shapes - static, no animations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-indigo-400 opacity-10 blur-3xl"></div>
        <div className="absolute top-1/3 -left-20 w-80 h-80 rounded-full bg-green-400 opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-indigo-300 opacity-10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 pt-20 sm:pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-12 md:mb-0 text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Knowledge That{" "}
              <span className="relative">
                Grows
                <motion.span 
                  className="absolute bottom-1 left-0 w-full h-1.5 sm:h-2 bg-green-400 opacity-50 rounded-full"
                  animate={{ scaleX: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                ></motion.span>
              </span>{" "}
              With You
            </h1>
            
            <p className="text-lg sm:text-xl mb-8 text-indigo-100 md:max-w-lg">
              Your all-in-one, AI-powered study companion designed to help you learn faster and smarter with personalized guidance.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.button
                className="inline-flex items-center justify-center space-x-2 bg-white text-indigo-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform transition-all"
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                onClick={handleScrollToDownload}
              >
                <FaDownload />
                <span>Download Now</span>
              </motion.button>
              
              <motion.a 
                href="#features"
                className="inline-flex items-center justify-center bg-indigo-700/30 text-white border border-indigo-200/30 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-lg hover:bg-indigo-700/50 transition-all"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Learn More
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 md:pl-6 lg:pl-12 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-xs mx-auto">
              {/* Phone frame with animations */}
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-r from-indigo-400 to-green-400 rounded-3xl blur opacity-20"
                animate={{ opacity: [0.2, 0.3, 0.2], scale: [1, 1.02, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              ></motion.div>
              
              {/* iPhone frame with improved seamless design - status bar elements removed */}
              <div className="relative mx-auto">
                {/* iPhone outer frame - refined border and dimensions */}
                <div className="relative bg-[#f5f5f7] rounded-[40px] sm:rounded-[55px] p-1.5 sm:p-2 shadow-2xl border-[4px] sm:border-[6px] border-[#1d1d1f] overflow-visible">
                  {/* Side buttons - visible only on larger screens */}
                  <div className="hidden sm:block absolute -left-1.5 top-28 w-1 h-12 bg-[#1d1d1f] rounded-l-lg"></div>
                  <div className="hidden sm:block absolute -left-1.5 top-44 w-1 h-12 bg-[#1d1d1f] rounded-l-lg"></div>
                  <div className="hidden sm:block absolute -left-1.5 top-60 w-1 h-20 bg-[#1d1d1f] rounded-l-lg"></div>
                  <div className="hidden sm:block absolute -right-1.5 top-36 w-1 h-14 bg-[#1d1d1f] rounded-r-lg"></div>
                  
                  {/* Inner screen container with integrated notch and no visible gaps */}
                  <div className="relative rounded-[35px] sm:rounded-[45px] overflow-hidden aspect-[9/19.5] bg-[#f5f5f7]">
                    {/* Dynamic content (full bleed to edges) */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentFeature.id}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.02 }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0 rounded-[35px] sm:rounded-[45px] overflow-hidden"
                      >
                        <Image 
                          src={currentFeature.image}
                          alt={currentFeature.alt}
                          fill
                          style={{objectFit: 'cover', objectPosition: 'top'}}
                          quality={100}
                          priority={currentFeature.id === 'main'}
                        />
                      </motion.div>
                    </AnimatePresence>
                    
                    {/* Overlay notch only - no status bar elements */}
                    <div className="absolute top-0 left-0 right-0 h-5 sm:h-7 z-20 flex items-center justify-center">
                      <div className="w-1/3 sm:w-1/2 h-full bg-black rounded-b-2xl sm:rounded-b-3xl flex justify-center items-center">
                        <div className="w-8 sm:w-16 h-2 sm:h-4 flex items-center justify-center space-x-1 sm:space-x-1.5">
                          <div className="w-1 sm:w-2 h-1 sm:h-2 rounded-full bg-[#444]"></div>
                          <div className="w-2 sm:w-4 h-0.5 sm:h-1 rounded-full bg-[#444]"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Home indicator line */}
                    <div className="absolute bottom-1 sm:bottom-1.5 left-1/2 transform -translate-x-1/2 w-1/3 h-0.5 sm:h-1 bg-white rounded-full opacity-90 z-10"></div>
                  </div>
                </div>
                
                {/* Enhanced reflection effect */}
                <div className="absolute -bottom-6 sm:-bottom-10 left-1/2 transform -translate-x-1/2 w-full h-8 sm:h-12 bg-gradient-to-t from-black/5 to-transparent blur-lg rounded-full"></div>
              </div>
              
              {/* App feature callouts with interactive highlighting - hidden on mobile */}
              {!isMobile && (
                <>
                  <motion.div 
                    className={`absolute -right-8 top-6 bg-white/90 backdrop-blur-sm rounded-lg p-2 sm:p-3 shadow-lg cursor-pointer transform transition-all ${isFeatureActive('ai-learning') ? 'ring-2 ring-green-400 scale-110' : 'hover:scale-105'}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    onClick={() => handleFeatureClick('ai-learning')}
                    whileHover={{ scale: isFeatureActive('ai-learning') ? 1.1 : 1.05 }}
                  >
                    <p className={`text-xs font-medium ${isFeatureActive('ai-learning') ? 'text-green-600' : 'text-indigo-800'}`}>
                      AI-Powered Learning
                    </p>
                  </motion.div>
                  
                  <motion.div 
                    className={`absolute -left-8 sm:-left-12 top-1/3 bg-white/90 backdrop-blur-sm rounded-lg p-2 sm:p-3 shadow-lg cursor-pointer transform transition-all ${isFeatureActive('quizzes') ? 'ring-2 ring-green-400 scale-110' : 'hover:scale-105'}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    onClick={() => handleFeatureClick('quizzes')}
                    whileHover={{ scale: isFeatureActive('quizzes') ? 1.1 : 1.05 }}
                  >
                    <p className={`text-xs font-medium ${isFeatureActive('quizzes') ? 'text-green-600' : 'text-indigo-800'}`}>
                      Personalized Quizzes
                    </p>
                  </motion.div>
                  
                  <motion.div 
                    className={`absolute -right-6 sm:-right-8 bottom-20 bg-white/90 backdrop-blur-sm rounded-lg p-2 sm:p-3 shadow-lg cursor-pointer transform transition-all ${isFeatureActive('flashcards') ? 'ring-2 ring-green-400 scale-110' : 'hover:scale-105'}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    onClick={() => handleFeatureClick('flashcards')}
                    whileHover={{ scale: isFeatureActive('flashcards') ? 1.1 : 1.05 }}
                  >
                    <p className={`text-xs font-medium ${isFeatureActive('flashcards') ? 'text-green-600' : 'text-indigo-800'}`}>
                      Adaptive Flashcards
                    </p>
                  </motion.div>
                </>
              )}
              
              {/* Mobile feature buttons (visible only on mobile) */}
              {isMobile && (
                <div className="mt-6 flex justify-center space-x-2">
                  {['ai-learning', 'quizzes', 'flashcards'].map((feature) => (
                    <button 
                      key={feature}
                      className={`px-2 py-1 rounded-full text-xs ${
                        isFeatureActive(feature) 
                          ? 'bg-green-500 text-white' 
                          : 'bg-white/80 text-indigo-800'
                      }`}
                      onClick={() => handleFeatureClick(feature as FeatureType)}
                    >
                      {features.find(f => f.id === feature)?.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Wave divider with animation */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white dark:bg-gray-50">
        <motion.svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320" 
          className="absolute bottom-0 left-0"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,181.3C384,203,480,213,576,192C672,171,768,117,864,117.3C960,117,1056,171,1152,181.3C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </motion.svg>
      </div>
    </section>
  );
};

export default Hero;