import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Menu, X, Moon, Sun, Download } from 'lucide-react';
import { useTheme } from '../ThemeContext';
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navLinks = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Categories',
    path: '/categories'
  },
  {
    name: 'Downloads',
    path: '/downloads'
  },
  {
    name: 'Admin',
    path: '/admin'
  }];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };
  return (
    <nav className="sticky top-0 z-40 w-full backdrop-blur-md bg-cream/90 dark:bg-warmDark/90 border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-navy dark:bg-gold p-2 rounded-lg group-hover:scale-105 transition-transform">
                <BookOpen className="h-5 w-5 text-gold dark:text-navy" />
              </div>
              <span className="font-heading font-bold text-xl text-navy dark:text-cream tracking-tight">
                Kingdom Study Hub
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-gold ${isActive(link.path) ? 'text-gold dark:text-gold' : 'text-gray-600 dark:text-gray-300'}`}>

                {link.name}
              </Link>
            )}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300"
              aria-label="Toggle dark mode">

              {theme === 'dark' ?
              <Sun className="h-5 w-5" /> :

              <Moon className="h-5 w-5" />
              }
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-600 dark:text-gray-300">

              {theme === 'dark' ?
              <Sun className="h-5 w-5" /> :

              <Moon className="h-5 w-5" />
              }
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-navy dark:hover:text-white">

              {isOpen ?
              <X className="h-6 w-6" /> :

              <Menu className="h-6 w-6" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen &&
      <div className="md:hidden bg-cream dark:bg-warmDark border-b border-gray-200 dark:border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) =>
          <Link
            key={link.name}
            to={link.path}
            onClick={() => setIsOpen(false)}
            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(link.path) ? 'bg-navy/5 text-navy dark:bg-gold/10 dark:text-gold' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50'}`}>

                {link.name}
              </Link>
          )}
          </div>
        </div>
      }
    </nav>);

}