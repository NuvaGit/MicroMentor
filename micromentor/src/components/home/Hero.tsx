"use client"

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-green-500 text-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-12 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Knowledge That Grows With You
            </h1>
            <p className="text-xl mb-8 text-indigo-100">
              Your all-in-one, AI-powered study companion designed to help you learn faster and smarter.
            </p>
            <Link 
              href="#download" 
              className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
            >
              Download Now
            </Link>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <Image 
                src="/images/logo.png" 
                alt="MicroMentor App Preview" 
                width={600} 
                height={400} 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;