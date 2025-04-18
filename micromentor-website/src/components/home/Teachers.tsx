"use client"

import Image from 'next/image';
import { motion } from 'framer-motion';

const teachers = [
  {
    name: 'Dr. Caius',
    subject: 'Mathematics',
    description: 'An award-winning mathematician with a passion for making complex concepts simple and accessible.',
    image: '/images/dr-caius.png',
  },
  {
    name: 'Prof. Elara',
    subject: 'Sciences',
    description: 'Specializes in physics and chemistry with years of experience teaching at university level.',
    image: '/images/prof-elara.png',
  },
  {
    name: 'Ms. Thalia',
    subject: 'Literature',
    description: 'A creative writing expert who can help with literary analysis and language arts.',
    image: '/images/ms-thalia.png',
  },
  {
    name: 'Mr. Vansh',
    subject: 'Geography',
    description: 'Passionate about world geography, cultures, and natural landmarks around the globe.',
    image: '/images/mr-vansh.png',
  },
];

const Teachers = () => {
  return (
    <section id="teachers" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Your AI Teachers</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn from specialized AI mentors designed to make your learning experience engaging and effective.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-64">
                <Image 
                  src={teacher.image} 
                  alt={teacher.name} 
                  fill
                  style={{objectFit: 'cover'}}
                  className="transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{teacher.name}</h3>
                <span className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
                  {teacher.subject}
                </span>
                <p className="text-gray-600">{teacher.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teachers;