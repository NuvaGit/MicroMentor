"use client"

import React from 'react';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Download: React.FC = () => {
  return (
    <section id="download" className="relative overflow-hidden">
      {/* Top wave divider to blend with Features */}
      <div className="absolute inset-x-0 -top-1">
        <svg
          className="block w-full h-16 text-gray-50 dark:text-gray-900"
          preserveAspectRatio="none"
          viewBox="0 0 1440 320"
        >
          <path
            fill="currentColor"
            d="M0,224L48,202.7C96,181,192,139,288,117.3C384,96,480,96,576,80C672,64,768,32,864,42.7C960,53,1056,107,1152,133.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      {/* Background gradient & shapes */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-green-500"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 -left-20 w-96 h-96 rounded-full bg-white opacity-5 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-white opacity-5 blur-3xl"></div>
        <div className="absolute top-20 right-40 w-32 h-32 rounded-full bg-white opacity-5 blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 py-24 px-4 text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block bg-white/20 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            Download Now
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Transform Your Learning Journey Today
          </h2>
          <p className="text-xl mb-12 text-indigo-100">
            Start learning smarter—one chat, quiz, flashcard, and video at a time with MicroMentor's AI-powered platform.
          </p>

          <div className="flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-8">
            <motion.a
              href="#"
              className="flex items-center justify-center space-x-3 bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg"
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <FaApple size={24} />
              <span>Download on App Store</span>
            </motion.a>

            <motion.a
              href="#"
              className="flex items-center justify-center space-x-3 bg-indigo-900/30 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-full font-semibold text-lg shadow-lg"
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <FaGooglePlay size={22} />
              <span>Get on Google Play</span>
            </motion.a>
          </div>

          <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="text-white text-left">
              <h3 className="text-2xl font-bold mb-2">Ready to get started?</h3>
              <p className="text-indigo-100">Join thousands of students already using MicroMentor.</p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              {['4.9/5 App Store Rating','50K+ Active Users','Used in 40+ Countries'].map((stat, i) => (
                <div key={i} className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  <span className="text-sm text-white">{stat}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom wave divider to next section */}
      <div className="absolute inset-x-0 bottom-0">
        <svg
          className="block w-full h-16 text-white dark:text-gray-900"
          preserveAspectRatio="none"
          viewBox="0 0 1440 320"
        >
          <path
            fill="currentColor"
            d="M0,256L48,234.7C96,213,192,171,288,176C384,181,480,235,576,245.3C672,256,768,224,864,197.3C960,171,1056,149,1152,128C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Download;
