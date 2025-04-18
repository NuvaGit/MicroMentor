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
    icon: <FaComments className="text-5xl text-indigo-600" />,
    title: 'Live Chats with AI "Teachers"',
    description: 'Choose from a curated roster of subject-matter mentors and ask up to 60 questions per session.',
  },
  {
    icon: <FaQuestionCircle className="text-5xl text-indigo-600" />,
    title: 'AI-Generated Quizzes',
    description: 'MicroMentor analyzes your chats and automatically generates quizzes at the right difficulty level.',
  },
  {
    icon: <FaClipboardList className="text-5xl text-indigo-600" />,
    title: 'Smart Flashcards',
    description: "Reinforce what you've learned with flashcards created on the fly based on your interactions.",
  },
  {
    icon: <FaVideo className="text-5xl text-indigo-600" />,
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
  // Use a generic ref to HTMLDivElement
  const itemRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(itemRef, { once: false, amount: 0.3 });
  const controls: AnimationControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={itemRef}
      className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1.0] },
        },
      }}
      initial="hidden"
      animate={controls}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      <div className="h-20 flex items-center justify-center mb-6">
        {feature.icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </motion.div>
  );
};

const Features: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const headerControls: AnimationControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      headerControls.start("visible");
    } else {
      headerControls.start("hidden");
    }
  }, [isInView, headerControls]);

  return (
    <section id="features" ref={sectionRef} className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
          }}
          initial="hidden"
          animate={headerControls}
        >
          <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-4 py-1.5 rounded-full">Features</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">Key Features</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how MicroMentor revolutionizes your learning experience with these powerful features.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <FeatureItem key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
