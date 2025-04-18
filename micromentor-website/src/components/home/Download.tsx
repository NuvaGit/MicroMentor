"use client"

import { FaApple, FaGooglePlay } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Download = () => {
  return (
    <section id="download" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-green-500"></div>
      
      {/* Abstract shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 -left-20 w-96 h-96 rounded-full bg-white opacity-5"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-white opacity-5"></div>
        <div className="absolute top-20 right-40 w-32 h-32 rounded-full bg-white opacity-5"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <span className="inline-block bg-white/20 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">Download Now</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Transform Your Learning Journey Today
          </h2>
          <p className="text-xl mb-12 text-indigo-100 max-w-2xl mx-auto">
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
          
          <div className="mt-20 flex flex-col md:flex-row gap-6 justify-center items-center">
            <div className="text-white text-left">
              <h3 className="text-2xl font-bold mb-2">Ready to get started?</h3>
              <p className="text-indigo-100">Join thousands of students already using MicroMentor.</p>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                <span className="text-sm text-white">4.9/5 App Store Rating</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                <span className="text-sm text-white">50K+ Active Users</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                <span className="text-sm text-white">Used in 40+ Countries</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Download;