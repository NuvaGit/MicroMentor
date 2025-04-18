"use client"

import React, { MouseEvent, useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

// Client-side only component to avoid hydration errors
const Bubbles = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Don't render anything on the server
  if (!mounted) return null;
  
  // Predefined bubble configurations to avoid randomness during hydration
  const bubbleConfigs = {
    // Main bubbles
    main: [
      { id: 1, size: 120, left: "15%", delay: 2, duration: 28, color: "bg-indigo-400", blurAmount: "blur-md", opacity: 0.09 },
      { id: 2, size: 85, left: "35%", delay: 0, duration: 32, color: "bg-indigo-500", blurAmount: "blur", opacity: 0.07 },
      { id: 3, size: 150, left: "65%", delay: 4, duration: 25, color: "bg-green-400", blurAmount: "blur-lg", opacity: 0.08 },
      { id: 4, size: 60, left: "80%", delay: 1, duration: 30, color: "bg-indigo-600", blurAmount: "blur-sm", opacity: 0.06 },
      { id: 5, size: 100, left: "25%", delay: 3, duration: 27, color: "bg-green-500", blurAmount: "blur-md", opacity: 0.05 },
      { id: 6, size: 130, left: "55%", delay: 5, duration: 33, color: "bg-indigo-300", blurAmount: "blur", opacity: 0.1 },
      { id: 7, size: 70, left: "85%", delay: 2.5, duration: 29, color: "bg-indigo-400", blurAmount: "blur-lg", opacity: 0.08 },
      { id: 8, size: 110, left: "45%", delay: 1.5, duration: 31, color: "bg-green-400", blurAmount: "blur-sm", opacity: 0.07 },
      { id: 9, size: 90, left: "5%", delay: 3.5, duration: 26, color: "bg-indigo-500", blurAmount: "blur-md", opacity: 0.09 },
      { id: 10, size: 140, left: "75%", delay: 0.5, duration: 34, color: "bg-indigo-300", blurAmount: "blur", opacity: 0.06 },
      { id: 11, size: 80, left: "20%", delay: 4.5, duration: 28, color: "bg-green-500", blurAmount: "blur-lg", opacity: 0.08 },
      { id: 12, size: 115, left: "60%", delay: 6, duration: 30, color: "bg-indigo-600", blurAmount: "blur-sm", opacity: 0.07 },
      { id: 13, size: 95, left: "30%", delay: 2, duration: 25, color: "bg-indigo-400", blurAmount: "blur", opacity: 0.05 },
      { id: 14, size: 125, left: "50%", delay: 3, duration: 32, color: "bg-green-400", blurAmount: "blur-md", opacity: 0.09 },
      { id: 15, size: 75, left: "70%", delay: 1, duration: 27, color: "bg-indigo-500", blurAmount: "blur-lg", opacity: 0.08 }
    ],
    
    // Small particles
    particles: [
      { id: 101, size: 5, left: "10%", delay: 1, duration: 15, color: "bg-white", opacity: 0.2 },
      { id: 102, size: 3, left: "25%", delay: 2, duration: 18, color: "bg-indigo-200", opacity: 0.15 },
      { id: 103, size: 7, left: "40%", delay: 0.5, duration: 12, color: "bg-white", opacity: 0.25 },
      { id: 104, size: 4, left: "55%", delay: 3, duration: 16, color: "bg-indigo-200", opacity: 0.18 },
      { id: 105, size: 6, left: "70%", delay: 1.5, duration: 14, color: "bg-white", opacity: 0.22 },
      { id: 106, size: 2, left: "85%", delay: 2.5, duration: 17, color: "bg-indigo-200", opacity: 0.16 },
      { id: 107, size: 8, left: "15%", delay: 0, duration: 13, color: "bg-white", opacity: 0.24 },
      { id: 108, size: 4, left: "30%", delay: 3.5, duration: 19, color: "bg-indigo-200", opacity: 0.17 },
      { id: 109, size: 6, left: "45%", delay: 1, duration: 15, color: "bg-white", opacity: 0.21 },
      { id: 110, size: 3, left: "60%", delay: 2, duration: 11, color: "bg-indigo-200", opacity: 0.19 },
      { id: 111, size: 5, left: "75%", delay: 0.5, duration: 16, color: "bg-white", opacity: 0.23 },
      { id: 112, size: 4, left: "90%", delay: 3, duration: 14, color: "bg-indigo-200", opacity: 0.14 },
      { id: 113, size: 7, left: "5%", delay: 1.5, duration: 18, color: "bg-white", opacity: 0.26 },
      { id: 114, size: 3, left: "20%", delay: 2.5, duration: 12, color: "bg-indigo-200", opacity: 0.15 },
      { id: 115, size: 5, left: "35%", delay: 0, duration: 17, color: "bg-white", opacity: 0.2 },
      { id: 116, size: 6, left: "50%", delay: 3.5, duration: 13, color: "bg-indigo-200", opacity: 0.18 },
      { id: 117, size: 4, left: "65%", delay: 1, duration: 19, color: "bg-white", opacity: 0.22 },
      { id: 118, size: 8, left: "80%", delay: 2, duration: 15, color: "bg-indigo-200", opacity: 0.17 },
      { id: 119, size: 3, left: "95%", delay: 0.5, duration: 11, color: "bg-white", opacity: 0.24 },
      { id: 120, size: 5, left: "12%", delay: 3, duration: 16, color: "bg-indigo-200", opacity: 0.19 }
    ],
    
    // Large background bubbles
    bg: [
      { id: 201, size: 320, left: "15%", delay: 2, duration: 55, color: "bg-indigo-700", blurAmount: "blur-2xl", opacity: 0.04 },
      { id: 202, size: 380, left: "45%", delay: 0, duration: 50, color: "bg-green-600", blurAmount: "blur-2xl", opacity: 0.03 },
      { id: 203, size: 290, left: "75%", delay: 3, duration: 58, color: "bg-indigo-600", blurAmount: "blur-2xl", opacity: 0.035 },
      { id: 204, size: 350, left: "30%", delay: 1, duration: 52, color: "bg-indigo-700", blurAmount: "blur-2xl", opacity: 0.025 },
      { id: 205, size: 310, left: "60%", delay: 4, duration: 56, color: "bg-green-600", blurAmount: "blur-2xl", opacity: 0.04 }
    ],
    
    // Enhanced interactive particles
    interactive: [
      { id: 301, size: 15, left: "20%", top: "25%", delay: 0.5, duration: 12, color: "bg-indigo-400", opacity: 0.3 },
      { id: 302, size: 12, left: "65%", top: "40%", delay: 1.5, duration: 10, color: "bg-green-400", opacity: 0.25 },
      { id: 303, size: 18, left: "40%", top: "75%", delay: 2.5, duration: 14, color: "bg-indigo-300", opacity: 0.35 },
      { id: 304, size: 10, left: "80%", top: "15%", delay: 1, duration: 11, color: "bg-green-300", opacity: 0.28 },
      { id: 305, size: 14, left: "15%", top: "60%", delay: 0, duration: 13, color: "bg-indigo-500", opacity: 0.32 }
    ]
  };

  // Pre-calculate animation values to ensure consistency
  const animationValues = {
    bg: [
      { y: [0, "-125%"], x: [0, 40], scale: [1, 1.05, 0.95, 1] },
      { y: [0, "-120%"], x: [0, -50], scale: [1, 1.05, 0.95, 1] },
      { y: [0, "-115%"], x: [0, 30], scale: [1, 1.05, 0.95, 1] },
      { y: [0, "-130%"], x: [0, -40], scale: [1, 1.05, 0.95, 1] },
      { y: [0, "-118%"], x: [0, 45], scale: [1, 1.05, 0.95, 1] }
    ],
    main: [
      { y: [0, "-135%"], x: [0, 15, -15, 8, -8, 0], scale: [1, 1.1, 0.9, 1.05, 1] },
      { y: [0, "-125%"], x: [0, -12, 12, -6, 6, 0], scale: [1, 1.1, 0.9, 1.05, 1] },
      { y: [0, "-140%"], x: [0, 18, -18, 9, -9, 0], scale: [1, 1.1, 0.9, 1.05, 1] },
      { y: [0, "-130%"], x: [0, -15, 15, -8, 8, 0], scale: [1, 1.1, 0.9, 1.05, 1] },
      { y: [0, "-138%"], x: [0, 12, -12, 6, -6, 0], scale: [1, 1.1, 0.9, 1.05, 1] }
    ],
    particles: [
      { y: [0, "-140%"], x: [0, 35] },
      { y: [0, "-145%"], x: [0, -40] },
      { y: [0, "-135%"], x: [0, 25] },
      { y: [0, "-150%"], x: [0, -30] },
      { y: [0, "-138%"], x: [0, 42] }
    ],
    interactive: [
      { scale: [1, 1.4, 1], opacity: [0.3, 0.6, 0.3], rotate: [0, 15, 0] },
      { scale: [1, 1.2, 1], opacity: [0.25, 0.5, 0.25], rotate: [0, -10, 0] },
      { scale: [1, 1.3, 1], opacity: [0.35, 0.7, 0.35], rotate: [0, 20, 0] },
      { scale: [1, 1.25, 1], opacity: [0.28, 0.56, 0.28], rotate: [0, -15, 0] },
      { scale: [1, 1.35, 1], opacity: [0.32, 0.64, 0.32], rotate: [0, 12, 0] }
    ]
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large background bubbles */}
      {bubbleConfigs.bg.map((bubble, index) => (
        <motion.div
          key={bubble.id}
          className={`absolute rounded-full ${bubble.color} ${bubble.blurAmount}`}
          style={{
            width: bubble.size,
            height: bubble.size,
            left: bubble.left,
            bottom: "-30%",
            opacity: bubble.opacity,
          }}
          animate={animationValues.bg[index % animationValues.bg.length]}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
      
      {/* Main bubbles */}
      {bubbleConfigs.main.map((bubble, index) => (
        <motion.div
          key={bubble.id}
          className={`absolute rounded-full ${bubble.color} ${bubble.blurAmount}`}
          style={{
            width: bubble.size,
            height: bubble.size,
            left: bubble.left,
            bottom: "-20%",
            opacity: bubble.opacity,
            boxShadow: index % 4 === 0 ? '0 0 20px rgba(255, 255, 255, 0.3)' : 'none', // Glow effect for some bubbles
          }}
          animate={{
            y: animationValues.main[index % animationValues.main.length].y,
            x: animationValues.main[index % animationValues.main.length].x,
            opacity: [bubble.opacity, bubble.opacity * 1.3, bubble.opacity],
            scale: animationValues.main[index % animationValues.main.length].scale,
          }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Small particles */}
      {bubbleConfigs.particles.map((particle, index) => (
        <motion.div
          key={particle.id}
          className={`absolute rounded-full ${particle.color}`}
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.left,
            bottom: "-10%",
            opacity: particle.opacity,
          }}
          animate={{
            y: animationValues.particles[index % animationValues.particles.length].y,
            x: animationValues.particles[index % animationValues.particles.length].x,
            opacity: [particle.opacity, particle.opacity * 1.5, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
      
      {/* Enhanced interactive particles */}
      {bubbleConfigs.interactive.map((particle, index) => (
        <motion.div
          key={particle.id}
          className={`absolute rounded-full ${particle.color}`}
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.left,
            top: particle.top,
            opacity: particle.opacity,
            filter: 'blur(1px)',
          }}
          animate={animationValues.interactive[index % animationValues.interactive.length]}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Types for feature images
type FeatureType = 'main' | 'ai-learning' | 'quizzes' | 'flashcards';

const Hero: React.FC = () => {
  // State for tracking the active feature image
  const [activeFeature, setActiveFeature] = useState<FeatureType>('main');
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  
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
  
  // Set up automatic cycling through features
  useEffect(() => {
    startAutoRotation();
    
    // Cleanup timer on unmount
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);
  
  // Function to start the auto rotation timer
  const startAutoRotation = () => {
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
  };
  
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
      {/* Abstract geometric shapes for background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-indigo-400 opacity-10 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
            x: [0, 20, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/3 -left-20 w-80 h-80 rounded-full bg-green-400 opacity-10 blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.13, 0.1],
            x: [0, -15, 0],
            y: [0, 15, 0]
          }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-indigo-300 opacity-10 blur-3xl"
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.14, 0.1],
            x: [0, 12, 0],
            y: [0, -12, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      {/* Animated bubbles background */}
      <Bubbles />
      
      <div className="container mx-auto px-4 relative z-10 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-16 md:mb-0 text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Knowledge That{" "}
              <span className="relative">
                Grows
                <motion.span 
                  className="absolute bottom-1 left-0 w-full h-2 bg-green-400 opacity-50 rounded-full"
                  animate={{ scaleX: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                ></motion.span>
              </span>{" "}
              With You
            </h1>
            
            <p className="text-xl mb-8 text-indigo-100 md:max-w-lg">
              Your all-in-one, AI-powered study companion designed to help you learn faster and smarter with personalized guidance.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.button
                className="inline-flex items-center justify-center space-x-2 bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform transition-all"
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                onClick={handleScrollToDownload}
              >
                <FaDownload />
                <span>Download Now</span>
              </motion.button>
              
              <motion.a 
                href="#features"
                className="inline-flex items-center justify-center bg-indigo-700/30 text-white border border-indigo-200/30 px-8 py-4 rounded-full font-semibold text-lg hover:bg-indigo-700/50 transition-all"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Learn More
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 md:pl-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Phone frame with animations */}
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-r from-indigo-400 to-green-400 rounded-3xl blur opacity-20"
                animate={{ opacity: [0.2, 0.3, 0.2], scale: [1, 1.02, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              ></motion.div>
              
              {/* iPhone frame with improved seamless design - status bar elements removed */}
              <div className="relative mx-auto max-w-xs">
                {/* iPhone outer frame - refined border and dimensions */}
                <div className="relative bg-[#f5f5f7] rounded-[55px] p-2 shadow-2xl border-[6px] border-[#1d1d1f] overflow-visible">
                  {/* Side buttons - repositioned for better alignment */}
                  <div className="absolute -left-1.5 top-28 w-1 h-12 bg-[#1d1d1f] rounded-l-lg"></div>
                  <div className="absolute -left-1.5 top-44 w-1 h-12 bg-[#1d1d1f] rounded-l-lg"></div>
                  <div className="absolute -left-1.5 top-60 w-1 h-20 bg-[#1d1d1f] rounded-l-lg"></div>
                  <div className="absolute -right-1.5 top-36 w-1 h-14 bg-[#1d1d1f] rounded-r-lg"></div>
                  
                  {/* Inner screen container with integrated notch and no visible gaps */}
                  <div className="relative rounded-[45px] overflow-hidden aspect-[9/19.5] bg-[#f5f5f7]">
                    {/* Dynamic content (full bleed to edges) */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentFeature.id}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.02 }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0 rounded-[45px] overflow-hidden"
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
                    <div className="absolute top-0 left-0 right-0 h-7 z-20 flex items-center justify-center">
                      <div className="w-1/2 h-full bg-black rounded-b-3xl flex justify-center items-center">
                        <div className="w-16 h-4 flex items-center justify-center space-x-1.5">
                          <div className="w-2 h-2 rounded-full bg-[#444]"></div>
                          <div className="w-4 h-1 rounded-full bg-[#444]"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Home indicator line */}
                    <div className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-white rounded-full opacity-90 z-10"></div>
                  </div>
                </div>
                
                {/* Enhanced reflection effect */}
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-full h-12 bg-gradient-to-t from-black/5 to-transparent blur-lg rounded-full"></div>
              </div>
              
              {/* App feature callouts with interactive highlighting */}
              <motion.div 
                className={`absolute -right-10 top-6 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg cursor-pointer transform transition-all ${isFeatureActive('ai-learning') ? 'ring-2 ring-green-400 scale-110' : 'hover:scale-105'}`}
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
                className={`absolute -left-12 top-1/3 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg cursor-pointer transform transition-all ${isFeatureActive('quizzes') ? 'ring-2 ring-green-400 scale-110' : 'hover:scale-105'}`}
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
                className={`absolute -right-8 bottom-20 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg cursor-pointer transform transition-all ${isFeatureActive('flashcards') ? 'ring-2 ring-green-400 scale-110' : 'hover:scale-105'}`}
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