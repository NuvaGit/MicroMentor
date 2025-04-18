"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/images/logo.svg" alt="MicroMentor Logo" width={40} height={40} />
          <h1 className="text-xl font-bold text-indigo-600">MicroMentor</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><Link href="#features" className="font-medium hover:text-indigo-600 transition-colors">Features</Link></li>
            <li><Link href="#teachers" className="font-medium hover:text-indigo-600 transition-colors">Teachers</Link></li>
            <li><Link href="#download" className="font-medium hover:text-indigo-600 transition-colors">Download</Link></li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white">
          <ul className="flex flex-col px-4 py-4">
            <li className="py-2 border-b border-gray-100">
              <Link 
                href="#features" 
                className="block font-medium" 
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
            </li>
            <li className="py-2 border-b border-gray-100">
              <Link 
                href="#teachers" 
                className="block font-medium" 
                onClick={() => setMobileMenuOpen(false)}
              >
                Teachers
              </Link>
            </li>
            <li className="py-2">
              <Link 
                href="#download" 
                className="block font-medium" 
                onClick={() => setMobileMenuOpen(false)}
              >
                Download
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;