"use client"

import React, { MouseEvent, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
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
    </div>
  );
};

const Hero: React.FC = () => {
  const handleScrollToDownload = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    const downloadSection = document.getElementById('download');
    if (downloadSection) {
      downloadSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-indigo-700 via-indigo-600 to-green-500 overflow-hidden">
      {/* Abstract geometric shapes for background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-indigo-400 opacity-10 blur-3xl"></div>
        <div className="absolute top-1/3 -left-20 w-80 h-80 rounded-full bg-green-400 opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-indigo-300 opacity-10 blur-3xl"></div>
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
                <span className="absolute bottom-1 left-0 w-full h-2 bg-green-400 opacity-50 rounded-full"></span>
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
              {/* Phone frame */}
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-400 to-green-400 rounded-3xl blur opacity-20"></div>
              <div className="relative bg-black rounded-3xl p-4 shadow-2xl">
                <div className="rounded-2xl overflow-hidden relative aspect-[9/19.5] max-w-xs mx-auto">
                  <Image 
                    src="/images/app-preview.png" 
                    alt="MicroMentor App Preview" 
                    fill
                    style={{objectFit: 'cover'}}
                    className="rounded-2xl"
                    quality={100}
                    priority
                  />
                </div>
              </div>
              
              {/* App feature callouts */}
              <motion.div 
                className="absolute -right-10 top-6 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <p className="text-xs font-medium text-indigo-800">AI-Powered Learning</p>
              </motion.div>
              
              <motion.div 
                className="absolute -left-12 top-1/3 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <p className="text-xs font-medium text-indigo-800">Personalized Quizzes</p>
              </motion.div>
              
              <motion.div 
                className="absolute -right-8 bottom-20 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <p className="text-xs font-medium text-indigo-800">Adaptive Flashcards</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white dark:bg-gray-50">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0 left-0">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,181.3C384,203,480,213,576,192C672,171,768,117,864,117.3C960,117,1056,171,1152,181.3C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;