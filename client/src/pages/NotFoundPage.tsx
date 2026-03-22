import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import { Home, Search, FileText, ArrowLeft, BookOpen } from 'lucide-react';

export default function NotFoundPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const quickLinks = [
    { label: 'Home', href: '/', icon: Home },
    { label: 'Templates', href: '/templates', icon: FileText },
    { label: 'Resume Builder', href: '/builder', icon: FileText },
    { label: 'Blog', href: '/blog', icon: BookOpen },
  ];

  return (
    <>
      <SEOHead
        title="Page Not Found (404)"
        description="The page you are looking for does not exist. Browse our resume templates, use the resume builder, or return to the homepage."
        noindex={true}
      />

      <section className="py-20 min-h-[80vh] flex items-center">
        <div className="container mx-auto px-4 text-center">
          {/* CSS Illustration - Abstract Shapes */}
          <div className="relative mx-auto w-64 h-48 mb-8">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-xl" />
            <div className="absolute top-4 left-12 w-16 h-16 rounded-lg bg-blue-500/10 border border-blue-500/20 rotate-12" />
            <div className="absolute top-8 right-12 w-12 h-12 rounded-full bg-purple-500/10 border border-purple-500/20" />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-20 h-20 rounded-lg bg-cyan-500/10 border border-cyan-500/20 -rotate-6" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-blue-400/30" />
          </div>

          {/* Big 404 */}
          <h1 className="text-8xl md:text-9xl font-black mb-4">
            <span className="gradient-text">404</span>
          </h1>

          {/* Heading & Description */}
          <h2 className="section-title text-2xl md:text-3xl mb-4">Oops! Page not found</h2>
          <p className="text-gray-400 text-lg max-w-md mx-auto mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-md mx-auto mb-10">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-field pl-12 pr-24 w-full"
                placeholder="Search the site..."
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 btn-primary px-4 py-1.5 text-sm"
              >
                Search
              </button>
            </div>
          </form>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="glass-card px-5 py-3 flex items-center gap-2 hover:border-blue-500/40 transition-colors"
              >
                <link.icon className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300 text-sm">{link.label}</span>
              </Link>
            ))}
          </div>

          {/* Go Back Home Button */}
          <Link to="/" className="btn-primary inline-flex items-center gap-2">
            <ArrowLeft className="w-5 h-5" />
            Go Back Home
          </Link>
        </div>
      </section>
    </>
  );
}
