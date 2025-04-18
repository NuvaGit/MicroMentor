"use client"

import { FaComments, FaQuestionCircle, FaClipboardList, FaVideo } from 'react-icons/fa';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <FaComments className="text-5xl text-indigo-600 mb-6" />,
    title: 'Live Chats with AI "Teachers"',
    description: 'Choose from a curated roster of subject-matter mentors and ask up to 60 questions per session.',
  },
  {
    icon: <FaQuestionCircle className="text-5xl text-indigo-600 mb-6" />,
    title: 'AI-Generated Quizzes',
    description: 'MicroMentor analyzes your chats and automatically generates quizzes at the right difficulty level.',
  },
  {
    icon: <FaClipboardList className="text-5xl text-indigo-600 mb-6" />,
    title: 'Smart Flashcards',
    description: 'Reinforce what youve learned with flashcards created on the fly based on your interactions.',
  },
  {
    icon: <FaVideo className="text-5xl text-indigo-600 mb-6" />,
    title: 'Curated Video Library',
    description: 'Dive deeper with handpicked educational videos on topics ranging from science to literature.',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how MicroMentor revolutionizes your learning experience with these powerful features.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg p-8 shadow-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {feature.icon}
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;