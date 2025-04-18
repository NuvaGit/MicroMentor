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
    <section id="teachers" className="py-24 bg-white relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-0 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-70"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-4 py-1.5 rounded-full">Expert Mentors</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">Meet Your AI Teachers</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn from specialized AI mentors designed to make your learning experience engaging and effective.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher, index) => (
            <motion.div 
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {/* Card with hover effect */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <div className="relative h-72 overflow-hidden">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                  
                  <Image 
                    src={teacher.image} 
                    alt={teacher.name} 
                    fill
                    style={{objectFit: 'cover'}}
                    className="transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Subject tag */}
                  <div className="absolute top-4 right-4 z-20">
                    <span className="bg-white/90 backdrop-blur-sm text-indigo-800 text-xs font-semibold px-3 py-1 rounded-full">
                      {teacher.subject}
                    </span>
                  </div>
                  
                  {/* Name overlay at bottom */}
                  <div className="absolute left-0 right-0 bottom-0 p-4 z-20">
                    <h3 className="text-xl font-bold text-white">{teacher.name}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600">{teacher.description}</p>
                  
                  <div className="mt-6 flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="flex -space-x-2">
                        {[...Array(3)].map((_, i) => (
                          <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs text-gray-600 font-semibold">
                            {String.fromCharCode(65 + i)}
                          </div>
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-500">+2.4k students</span>
                    </div>
                    
                    <div className="flex items-center space-x-1 text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="text-xs text-gray-600 font-medium">4.9</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teachers;