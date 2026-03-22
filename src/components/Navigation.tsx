import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react@0.487.0';
import { useState } from 'react';

interface NavigationProps {
  currentPage: 'home' | 'menu' | 'about' | 'contact' | 'order';
  onPageChange: (page: 'home' | 'menu' | 'about' | 'contact' | 'order') => void;
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (page: 'home' | 'menu' | 'about' | 'contact' | 'order') => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onPageChange(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#6B8A47]/20 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]">
      <div className="mx-auto px-6 md:px-16 py-3 md:py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            onPageChange('home');
          }}
          className="text-xl md:text-2xl text-[#6B8A47] hover:text-[#D5B36B] transition-colors duration-300 z-50"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Jess Catering
        </button>

        {/* Hamburger Menu Button (Mobile/Tablet) */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden z-50 text-[#6B8A47] hover:text-[#D5B36B] transition-colors duration-300"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-4 md:gap-6 lg:gap-8">
          <button
            onClick={() => handleNavClick('menu')}
            className="relative"
          >
            <span
              className={`text-sm md:text-base transition-colors duration-300 ${
                currentPage === 'menu'
                  ? 'text-[#6B8A47] font-semibold'
                  : 'text-[#6E564A] hover:text-[#D5B36B]'
              }`}
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Menu
            </span>
          </button>

          <button
            onClick={() => handleNavClick('order')}
            className="relative"
          >
            <span
              className={`text-sm md:text-base transition-colors duration-300 ${
                currentPage === 'order'
                  ? 'text-[#6B8A47] font-semibold'
                  : 'text-[#6E564A] hover:text-[#D5B36B]'
              }`}
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <span className="hidden lg:inline">Catering Order</span>
              <span className="lg:hidden">Catering</span>
            </span>
          </button>

          {/* UPDATED LINK HERE */}
          <a
            href="https://cocodevenci.com"
            target="_blank"
            rel="noopener noreferrer"
            className="relative"
          >
            <span
              className="text-sm md:text-base transition-colors duration-300 text-[#6E564A] hover:text-[#D5B36B]"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <span className="hidden lg:inline">Chocolates Order</span>
              <span className="lg:hidden">Chocolates</span>
            </span>
          </a>

          <button
            onClick={() => handleNavClick('about')}
            className="relative"
          >
            <span
              className={`text-sm md:text-base transition-colors duration-300 ${
                currentPage === 'about'
                  ? 'text-[#6B8A47] font-semibold'
                  : 'text-[#6E564A] hover:text-[#D5B36B]'
              }`}
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <span className="hidden sm:inline">About Us</span>
              <span className="sm:hidden">About</span>
            </span>
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className={`px-6 py-4 rounded-lg transition-all duration-300 text-sm md:text-base ${
              currentPage === 'contact'
                ? 'bg-[#6B8A47] text-white'
                : 'bg-[#6B8A47] text-white hover:bg-[#D5B36B]'
            }`}
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      <div
        className={`lg:hidden ${
          isMobileMenuOpen ? 'block' : 'hidden'
        } absolute top-[52px] md:top-[60px] left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-[#6B8A47]/20 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-4 flex flex-col items-center gap-4 md:gap-6 lg:gap-8">
          <button
            onClick={() => handleNavClick('menu')}
            className="relative"
          >
            <span
              className={`text-sm md:text-base transition-colors duration-300 ${
                currentPage === 'menu'
                  ? 'text-[#6B8A47] font-semibold'
                  : 'text-[#6E564A] hover:text-[#D5B36B]'
              }`}
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Menu
            </span>
          </button>

          <button
            onClick={() => handleNavClick('order')}
            className="relative"
          >
            <span
              className={`text-sm md:text-base transition-colors duration-300 ${
                currentPage === 'order'
                  ? 'text-[#6B8A47] font-semibold'
                  : 'text-[#6E564A] hover:text-[#D5B36B]'
              }`}
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <span className="hidden lg:inline">Catering Order</span>
              <span className="lg:hidden">Catering</span>
            </span>
          </button>

          {/* UPDATED LINK HERE */}
          <a
            href="https://cocodevenci.com"
            target="_blank"
            rel="noopener noreferrer"
            className="relative"
          >
            <span
              className="text-sm md:text-base transition-colors duration-300 text-[#6E564A] hover:text-[#D5B36B]"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <span className="hidden lg:inline">Chocolates Order</span>
              <span className="lg:hidden">Chocolates</span>
            </span>
          </a>

          <button
            onClick={() => handleNavClick('about')}
            className="relative"
          >
            <span
              className={`text-sm md:text-base transition-colors duration-300 ${
                currentPage === 'about'
                  ? 'text-[#6B8A47] font-semibold'
                  : 'text-[#6E564A] hover:text-[#D5B36B]'
              }`}
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <span className="hidden sm:inline">About Us</span>
              <span className="sm:hidden">About</span>
            </span>
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className={`px-6 py-4 rounded-lg transition-all duration-300 text-sm md:text-base ${
              currentPage === 'contact'
                ? 'bg-[#6B8A47] text-white'
                : 'bg-[#6B8A47] text-white hover:bg-[#D5B36B]'
            }`}
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
}