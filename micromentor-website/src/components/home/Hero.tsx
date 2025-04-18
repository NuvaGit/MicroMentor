"use client"

import React, { MouseEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

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
