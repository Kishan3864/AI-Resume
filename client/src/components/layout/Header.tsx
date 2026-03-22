import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, FileText, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Templates', path: '/templates' },
  { label: 'AI Analyzer', path: '/ai-analyzer' },
  { label: 'Resume Examples', path: '/resume-examples' },
  { label: 'Blog', path: '/blog' },
  { label: 'Pricing', path: '/pricing' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-md border-b border-surface-100'
          : 'bg-white/60 backdrop-blur-md border-b border-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 text-white transition-transform duration-200 group-hover:scale-105">
              <FileText className="w-5 h-5" />
            </div>
            <span className="font-display text-xl font-bold bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
              Resume AI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-3 py-2 text-sm font-body font-medium rounded-lg transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-primary-500'
                    : 'text-surface-600 hover:text-surface-800 hover:bg-surface-50'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary-500 rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex lg:items-center lg:gap-3">
            <Link
              to="/login"
              className="px-4 py-2 text-sm font-body font-medium text-surface-600 hover:text-surface-800 rounded-lg border border-surface-200 hover:border-surface-300 transition-all duration-200 hover:shadow-sm"
            >
              Login
            </Link>
            <Link
              to="/builder"
              className="px-4 py-2 text-sm font-body font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Build Resume Free
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-surface-500 hover:text-surface-800 hover:bg-surface-100 transition-colors duration-200"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            <div className="relative w-5 h-5">
              <Menu
                className={`w-5 h-5 absolute inset-0 transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'
                }`}
              />
              <X
                className={`w-5 h-5 absolute inset-0 transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="pb-4 pt-2 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center px-3 py-2.5 text-sm font-body font-medium rounded-lg transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-primary-500 bg-primary-50'
                    : 'text-surface-600 hover:text-surface-800 hover:bg-surface-50'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <ChevronDown className="w-4 h-4 ml-auto -rotate-90 text-primary-400" />
                )}
              </Link>
            ))}

            <div className="pt-3 mt-3 border-t border-surface-100 space-y-2">
              <Link
                to="/login"
                className="block w-full px-3 py-2.5 text-sm font-body font-medium text-center text-surface-600 rounded-lg border border-surface-200 hover:border-surface-300 hover:bg-surface-50 transition-all duration-200"
              >
                Login
              </Link>
              <Link
                to="/builder"
                className="block w-full px-3 py-2.5 text-sm font-body font-semibold text-center text-white bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-200 shadow-sm"
              >
                Build Resume Free
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
