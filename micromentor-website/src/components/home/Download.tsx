"use client"

import { FaApple, FaGooglePlay } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Download = () => {
  return (
    <section id="download" className="py-20 bg-gradient-to-r from-indigo-600 to-green-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Download MicroMentor Today</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Transform the way you learn—one chat, quiz, card, and video at a time.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <motion.a 
              href="#" 
              className="flex items-center justify-center space-x-2 bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold text-lg shadow-lg"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <FaApple size={24} />
              <span>App Store</span>
            </motion.a>
            
            <motion.a 
              href="#" 
              className="flex items-center justify-center space-x-2 bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold text-lg shadow-lg"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <FaGooglePlay size={22} />
              <span>Google Play</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Download;