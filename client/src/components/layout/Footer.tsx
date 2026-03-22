import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Youtube, Mail, Heart, FileText, Send } from 'lucide-react';

const productLinks = [
  { label: 'Templates', path: '/templates' },
  { label: 'AI Analyzer', path: '/ai-analyzer' },
  { label: 'Resume Builder', path: '/builder' },
  { label: 'Cover Letter', path: '/cover-letter-builder' },
  { label: 'Resume Examples', path: '/resume-examples' },
];

const resourceLinks = [
  { label: 'Blog', path: '/blog' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Career Tips', path: '/blog' },
];

const legalLinks = [
  { label: 'Privacy Policy', path: '/privacy-policy' },
  { label: 'Terms of Service', path: '/terms-of-service' },
  { label: 'Disclaimer', path: '/terms-of-service' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact', path: '/contact' },
  { label: 'Support', path: '/contact' },
];

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com' },
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: Youtube, label: 'YouTube', href: 'https://youtube.com' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-surface-900 text-surface-300">
      {/* Newsletter Section */}
      <div className="border-b border-surface-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="font-display text-xl font-bold text-white">
                Stay ahead in your career
              </h3>
              <p className="mt-1 text-sm font-body text-surface-400">
                Get resume tips, career advice, and AI updates delivered to your inbox.
              </p>
            </div>
            <form
              onSubmit={handleSubscribe}
              className="flex w-full max-w-md gap-2"
            >
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full pl-10 pr-4 py-2.5 text-sm font-body bg-surface-800 border border-surface-700 rounded-lg text-white placeholder-surface-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-body font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-200 shadow-sm hover:shadow-md whitespace-nowrap"
              >
                <Send className="w-4 h-4" />
                Subscribe
              </button>
            </form>
            {subscribed && (
              <p className="text-sm font-body text-green-400 animate-pulse">
                Thanks for subscribing!
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Footer Columns */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-2 group">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 text-white transition-transform duration-200 group-hover:scale-105">
                <FileText className="w-4 h-4" />
              </div>
              <span className="font-display text-lg font-bold text-white">
                Resume AI
              </span>
            </Link>
            <p className="mt-4 text-sm font-body text-surface-400 leading-relaxed max-w-xs">
              Build professional, ATS-optimized resumes with the power of artificial intelligence. Land your dream job faster.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex items-center justify-center w-9 h-9 rounded-lg bg-surface-800 text-surface-400 hover:bg-surface-700 hover:text-white transition-all duration-200"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Product */}
          <div>
            <h4 className="font-display text-sm font-semibold text-white uppercase tracking-wider">
              Product
            </h4>
            <ul className="mt-4 space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm font-body text-surface-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="font-display text-sm font-semibold text-white uppercase tracking-wider">
              Resources
            </h4>
            <ul className="mt-4 space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm font-body text-surface-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h4 className="font-display text-sm font-semibold text-white uppercase tracking-wider">
              Legal
            </h4>
            <ul className="mt-4 space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm font-body text-surface-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-surface-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm font-body text-surface-500">
              &copy; 2024 Resume AI. All rights reserved.
            </p>
            <div className="flex items-center gap-1.5 text-sm font-body text-surface-500">
              Made with
              <Heart className="w-4 h-4 text-red-400 fill-red-400" />
              &amp; AI
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
