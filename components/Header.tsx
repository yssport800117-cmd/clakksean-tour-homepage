
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import Button from './Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 z-50">
          <img 
            src="https://i.imgur.com/CtoBAvu.png" 
            alt="Clarksean Symbol" 
            className="h-6 md:h-8 w-auto object-contain" 
          />
          <span className={`text-2xl font-bold tracking-tighter ${
            isScrolled || isMobileMenuOpen ? 'text-primary' : 'text-white'
          }`}>
            클락션투어
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium transition-colors hover:text-secondary ${
                location.pathname === link.path 
                  ? 'text-secondary font-bold' 
                  : (isScrolled ? 'text-gray-700' : 'text-white/90')
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a href="https://open.kakao.com/o/s3ByEJJh" target="_blank" rel="noopener noreferrer">
            <Button variant={isScrolled ? 'primary' : 'secondary'} size="sm">
              견적 요청하기
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden z-50 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`h-0.5 w-full bg-current transform transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
            } ${isScrolled || isMobileMenuOpen ? 'text-black' : 'text-white'}`} />
            <span className={`h-0.5 w-full bg-current transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
            } ${isScrolled || isMobileMenuOpen ? 'text-black' : 'text-white'}`} />
            <span className={`h-0.5 w-full bg-current transform transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
            } ${isScrolled || isMobileMenuOpen ? 'text-black' : 'text-white'}`} />
          </div>
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col pt-24 px-6 ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <nav className="flex flex-col gap-6 text-lg">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-semibold pb-4 border-b border-gray-100 ${
                location.pathname === link.path ? 'text-primary' : 'text-gray-800'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="mt-8 flex flex-col gap-4">
          <Button fullWidth variant="primary" size="lg">카카오톡 상담하기</Button>
          <Button fullWidth variant="outline" size="lg">전화 상담 요청</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
