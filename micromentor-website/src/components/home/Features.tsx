"use client"

import React, { useRef, useEffect } from 'react';
import { FaComments, FaQuestionCircle, FaClipboardList, FaVideo } from 'react-icons/fa';
import { motion, useInView, useAnimation, AnimationControls } from 'framer-motion';

// Define the shape of a feature
interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Feature data with explicit typing
const features: Feature[] = [
  {
    icon: <FaComments size={32} className="text-indigo-600" />,
    title: 'Live Chats with AI "Teachers"',
    description: 'Choose from a curated roster of subject-matter mentors and ask up to 60 questions per session.',
  },
  {
    icon: <FaQuestionCircle size={32} className="text-indigo-600" />,
    title: 'AI-Generated Quizzes',
    description: 'MicroMentor analyzes your chats and automatically generates quizzes at the right difficulty level.',
  },
  {
    icon: <FaClipboardList size={32} className="text-indigo-600" />,
    title: 'Smart Flashcards',
    description: "Reinforce what you've learned with flashcards created on the fly based on your interactions.",
  },
  {
    icon: <FaVideo size={32} className="text-indigo-600" />,
    title: 'Curated Video Library',
    description: 'Dive deeper with handpicked educational videos on topics ranging from science to literature.',
  },
];

// Props for the FeatureItem component
interface FeatureItemProps {
  feature: Feature;
  index: number;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ feature, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.3, once: true });
  const controls: AnimationControls = useAnimation();

  useEffect(() => {
    if (inView) controls.start('show');
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      className="group bg-white dark:bg-gray-800 rounded-2xl border border-transparent hover:border-indigo-500 p-8 flex flex-col items-center text-center transition-all duration-300 shadow-sm hover:shadow-xl"
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      variants={{ show: { opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.1 } } }}
      whileHover={{ scale: 1.03 }}
    >
      <div className="bg-indigo-50 dark:bg-indigo-700/20 p-4 rounded-full mb-4 transition-colors duration-300 group-hover:bg-indigo-100">
        {feature.icon}
      </div>
      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-indigo-600 transition-colors">
        {feature.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
        {feature.description}
      </p>
    </motion.div>
  );
};

const Features: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { amount: 0.1, once: true });
  const controls: AnimationControls = useAnimation();

  useEffect(() => {
    if (inView) controls.start('show');
  }, [inView, controls]);

  return (
    <section id="features" ref={sectionRef} className="relative bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Top wave divider matching features background */}
      <div className="absolute inset-x-0 -top-1">
        <svg
          className="block w-full h-16 text-gray-50 dark:text-gray-900"
          preserveAspectRatio="none"
          viewBox="0 0 1440 320"
        >
          <path
            fill="currentColor"
            d="M0,96L48,112C96,128,192,160,288,181.3C384,203,480,213,576,192C672,171,768,117,864,117.3C960,117,1056,171,1152,181.3C1248,192,1344,160,1392,144L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="relative pt-20 pb-32 max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{ show: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
        >
          <span className="inline-block bg-indigo-100/60 dark:bg-indigo-700/40 text-indigo-800 dark:text-indigo-200 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            Features
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-4">
            Key Features
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Discover how MicroMentor revolutionizes your learning experience with these powerful features.
          </p>
        </motion.div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => (
            <FeatureItem key={idx} feature={feature} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
