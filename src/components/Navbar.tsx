import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navbarClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
  }`;

  const linkClasses = (path: string) => {
    const isActive = location.pathname === path;
    return `font-medium transition-colors duration-200 ${
      isScrolled || isMenuOpen
        ? isActive
          ? 'text-primary-600'
          : 'text-gray-800 hover:text-primary-600'
        : isActive
        ? 'text-white'
        : 'text-white/90 hover:text-white'
    }`;
  };

  return (
    <nav className={navbarClasses}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className={`text-2xl font-bold ${isScrolled ? 'text-primary-600' : 'text-white'}`}>
              TechSphere
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={linkClasses('/')}>
              Home
            </Link>
            <Link to="/services" className={linkClasses('/services')}>
              Services
            </Link>
            <Link to="/about" className={linkClasses('/about')}>
              About
            </Link>
            <Link to="/contact" className={linkClasses('/contact')}>
              Contact
            </Link>
            <Link
              to="/contact"
              className={`btn btn-sm ${
                isScrolled ? 'btn-primary' : 'bg-white text-primary-600 hover:bg-white/90'
              }`}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className={isScrolled ? 'text-gray-800' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-gray-800' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white mt-4 py-4 px-2 rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4">
              <Link to="/" className={linkClasses('/')}>
                Home
              </Link>
              <Link to="/services" className={linkClasses('/services')}>
                Services
              </Link>
              <Link to="/about" className={linkClasses('/about')}>
                About
              </Link>
              <Link to="/contact" className={linkClasses('/contact')}>
                Contact
              </Link>
              <Link to="/contact" className="btn btn-primary btn-sm w-full text-center">
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
