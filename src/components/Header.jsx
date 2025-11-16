
import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '../redux/themeSlice';
import { Menu, X, Heart } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const dispatch = useDispatch();

  // Redux state
  const favCount = useSelector((state) => state.favorites?.items?.length || 0);
  const theme = useSelector((state) => state.theme.mode);

  // Apply dark/light theme globally
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Memoized nav items
  const navItems = useMemo(
    () => [
      { id: 'home', label: 'Home' },
      { id: 'menu', label: 'Menu' },
      { id: 'about', label: 'About' },
      { id: 'testimonials', label: 'Reviews' },
      { id: 'contact', label: 'Contact' },
    ],
    []
  );

  return (
    <header className="sticky top-0 z-50 transition-colors duration-300 border-b border-gray-200 backdrop-blur bg-white/60 dark:bg-gray-900/60 dark:border-gray-700">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        {/* Logo + Desktop Nav */}
        <div className="flex items-center gap-6">
          <div className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Brew & Co.
          </div>

          {/* Desktop Nav */}
          <nav className="items-center hidden gap-6 md:flex">
            {navItems.map(({ id, label }) => (
              <ScrollLink
                key={id}
                to={id}
                smooth
                duration={500}
                offset={-64} // header height offset
                className="font-medium text-gray-700 transition-colors cursor-pointer hover:text-rose-600 dark:text-gray-300 dark:hover:text-rose-400"
              >
                {label}
              </ScrollLink>
            ))}
          </nav>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          {/* Favorites */}
          <button
            aria-label="Favorites"
            className="relative p-2 transition-colors duration-200 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <Heart className="w-5 h-5 text-rose-500" />
            {favCount > 0 && (
              <span className="absolute -top-2 -right-2 px-1.5 text-xs font-semibold text-white bg-rose-600 rounded-full">
                {favCount}
              </span>
            )}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={() => dispatch(toggle())}
            aria-label="Toggle theme"
            className="p-2 transition-colors duration-200 border border-gray-300 rounded-md dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {theme === 'light' ? '🌞' : '🌜'}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileOpen((prev) => !prev)}
            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
            className="p-2 transition-colors duration-200 rounded-md md:hidden hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <nav className="transition-colors duration-300 border-t border-gray-200 md:hidden bg-white/95 dark:bg-gray-900/95 dark:border-gray-700">
          <div className="flex flex-col gap-4 p-4">
            {navItems.map(({ id, label }) => (
              <ScrollLink
                key={id}
                to={id}
                smooth
                duration={500}
                offset={-64}
                onClick={() => setIsMobileOpen(false)}
                className="font-medium text-gray-700 transition-colors cursor-pointer hover:text-rose-600 dark:text-gray-300 dark:hover:text-rose-400"
              >
                {label}
              </ScrollLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
