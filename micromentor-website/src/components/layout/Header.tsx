// src/components/layout/Header.tsx
"use client"

import React, { MouseEvent, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';

// Define navigation item shape
interface NavItem {
  name: string;
  href: string;
  targetId?: string;
  isExternal?: boolean;
}

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const scrollToSection = (elementId: string): void => {
    const element = document.getElementById(elementId);
    if (element) {
      const rect = element.getBoundingClientRect();
      const top = rect.top + window.pageYOffset;
      const offset = rect.height * 0.2;
      const scrollPos = top - window.innerHeight / 3 + offset;
      window.scrollTo({ top: scrollPos, behavior: 'smooth' });
    }
  };

  const handleNavLinkClick = (
    e: MouseEvent<HTMLAnchorElement>,
    targetId?: string,
    isExternal = false,
    href?: string
  ): void => {
    if (isExternal) {
      setMobileMenuOpen(false);
      return;
    }
    
    e.preventDefault();
    
    // If we're on a different page and trying to navigate to a section on the home page
    if (!isHomePage && targetId && href?.startsWith('#')) {
      // Navigate to home page first, then scroll after a small delay
      router.push('/');
      
      // We'll let the page load first before attempting to scroll to the section
      // This won't execute the setTimeout until after the router completes navigation
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          scrollToSection(targetId);
        }
      }, 100);
    } else if (targetId) {
      // On home page, just scroll to the section
      scrollToSection(targetId);
    } else {
      // Regular navigation
      router.push(href || '/');
    }
    
    setMobileMenuOpen(false);
  };

  const handleLogoClick = (e: MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    
    if (isHomePage) {
      // If already on home page, just scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // If on another page, navigate to home
      router.push('/');
    }
    
    setMobileMenuOpen(false);
  };

  const navItems: NavItem[] = [
    { name: 'Features', href: '#features', targetId: 'features' },
    { name: 'Teachers', href: '#teachers', targetId: 'teachers' },
    { name: 'Download', href: '#download', targetId: 'download' },
    { name: 'Contact', href: 'mailto:micromentor0@gmail.com', isExternal: true },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'top-4' : 'top-0'}`}>
      <div className={`mx-auto transition-all duration-300 ${scrolled ? 'max-w-6xl px-4 sm:px-6 py-2' : 'max-w-full px-0 py-0'}`}>
        <div
          className={`flex items-center justify-between backdrop-blur-sm transition-all duration-300 ease-in-out ${
            scrolled
              ? 'h-14 rounded-xl border border-indigo-600/30 shadow-lg bg-white/90 dark:bg-gray-800/90'
              : 'h-16 rounded-none border-0 bg-transparent'
          }`}
        >
          {/* Branding */}
          <div className="flex items-center px-4">
            <Link
              href="/"
              onClick={handleLogoClick}
              className="flex items-center space-x-2"
            >
              <Image src="/images/logo.svg" alt="MicroMentor Logo" width={40} height={40} />
              <span className={`ml-2 font-bold transition-all duration-300 ${scrolled ? 'text-indigo-600 text-base' : 'text-white text-lg'}`}>
                MicroMentor
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6 px-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavLinkClick(e, item.targetId, item.isExternal, item.href)}
                className={`text-sm font-medium px-3 py-2 rounded-md transition-all duration-300 ${
                  scrolled ? 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50/50' : 'text-white hover:text-white hover:bg-white/20'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Download */}
          <div className="hidden md:flex items-center px-4">
            <Link
              href="#download"
              onClick={(e) => handleNavLinkClick(e, 'download', false, '#download')}
              className={`font-medium text-sm px-4 py-2 rounded-md transition-all duration-300 ${
                scrolled
                  ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              Download Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden px-4">
            <button
              type="button"
              aria-label="Toggle menu"
              className={`inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 ${
                scrolled ? 'text-gray-700 hover:bg-indigo-50 hover:text-indigo-600' : 'text-white hover:bg-white/20 hover:text-white'
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-1 mx-auto max-w-6xl px-4 sm:px-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-indigo-100 dark:border-gray-700 shadow-lg overflow-hidden">
            <div className="space-y-1 px-4 py-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavLinkClick(e, item.targetId, item.isExternal, item.href)}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
                <Link
                  href="#download"
                  onClick={(e) => handleNavLinkClick(e, 'download', false, '#download')}
                  className="block w-full text-center font-medium px-3 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white"
                >
                  Download Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;