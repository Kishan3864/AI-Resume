import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Search,
  Filter,
  Crown,
  Star,
  Layout,
  Grid3X3,
  List,
  SlidersHorizontal,
  CheckCircle,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import SEOHead from '../components/seo/SEOHead';
import AdBanner from '../components/ads/AdBanner';
import { templates } from '../data/templates/templateData';
import type { ResumeTemplate } from '../types/template';

type CategoryFilter = 'all' | 'classic' | 'modern' | 'creative' | 'industry' | 'premium';
type SortOption = 'popular' | 'ats' | 'name';
type LayoutView = 'grid' | 'list';

const categoryTabs: { key: CategoryFilter; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'classic', label: 'Classic' },
  { key: 'modern', label: 'Modern' },
  { key: 'creative', label: 'Creative' },
  { key: 'industry', label: 'Industry' },
  { key: 'premium', label: 'Premium' },
];

const sortOptions: { key: SortOption; label: string }[] = [
  { key: 'popular', label: 'Popular' },
  { key: 'ats', label: 'ATS Score' },
  { key: 'name', label: 'Name' },
];

function getAtsColor(score: number): string {
  if (score >= 90) return 'bg-green-500';
  if (score >= 75) return 'bg-yellow-500';
  return 'bg-orange-500';
}

function getAtsTextColor(score: number): string {
  if (score >= 90) return 'text-green-600';
  if (score >= 75) return 'text-yellow-600';
  return 'text-orange-600';
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' as const },
  },
};

export default function TemplatesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [sortBy, setSortBy] = useState<SortOption>('popular');
  const [layoutView, setLayoutView] = useState<LayoutView>('grid');

  const filteredTemplates = useMemo(() => {
    let result = [...templates];

    // Category filter
    if (activeCategory === 'premium') {
      result = result.filter((t) => t.isPremium);
    } else if (activeCategory !== 'all') {
      result = result.filter((t) => t.category === activeCategory);
    }

    // Search filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.tags.some((tag) => tag.toLowerCase().includes(q)) ||
          t.description.toLowerCase().includes(q) ||
          t.category.toLowerCase().includes(q)
      );
    }

    // Sort
    switch (sortBy) {
      case 'popular':
        result.sort((a, b) => b.popularity - a.popularity);
        break;
      case 'ats':
        result.sort((a, b) => b.atsScore - a.atsScore);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    return result;
  }, [searchQuery, activeCategory, sortBy]);

  // Insert ad placeholders after every 9th card
  const renderTemplateGrid = () => {
    const items: React.ReactNode[] = [];

    filteredTemplates.forEach((template, index) => {
      items.push(
        <motion.div key={template.id} variants={cardVariants}>
          <TemplateCard template={template} />
        </motion.div>
      );

      // After every 9th card, insert an in-feed ad
      if ((index + 1) % 9 === 0 && index < filteredTemplates.length - 1) {
        items.push(
          <div key={`ad-feed-${index}`} className="col-span-1 sm:col-span-2 lg:col-span-3">
            <AdBanner slot="templates-feed" format="horizontal" className="my-4" />
          </div>
        );
      }
    });

    return items;
  };

  return (
    <>
      <SEOHead
        title="30+ Free Resume Templates — Professional Resume Designs 2024"
        description="Browse our collection of 30+ free and premium resume templates. ATS-optimized, professional designs for every industry. Download and customize instantly."
        keywords="resume templates, free resume templates, professional resume templates, ATS resume templates, modern resume templates, creative resume templates"
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 py-16 sm:py-24">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1),transparent_50%)]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-indigo-200 backdrop-blur-sm mb-6">
                <Sparkles className="h-4 w-4" />
                30+ Professional Designs
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                <span className="bg-gradient-to-r from-white via-purple-200 to-indigo-200 bg-clip-text text-transparent">
                  Professional Resume Templates
                </span>
              </h1>
              <p className="mt-4 text-lg sm:text-xl text-indigo-200 max-w-2xl mx-auto">
                Choose from 30+ expertly designed templates. ATS-optimized,
                industry-tested, and ready to customize.
              </p>
            </motion.div>

            {/* Search */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 max-w-xl mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search templates by name, style, or industry..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-xl border-0 bg-white/95 py-3.5 pl-12 pr-4 text-gray-900 shadow-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 backdrop-blur-sm"
                />
              </div>
            </motion.div>

            {/* Category Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap justify-center gap-2"
            >
              {categoryTabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveCategory(tab.key)}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
                    activeCategory === tab.key
                      ? 'bg-white text-indigo-900 shadow-md'
                      : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
                  }`}
                >
                  {tab.key === 'premium' && <Crown className="inline h-3.5 w-3.5 mr-1.5 -mt-0.5" />}
                  {tab.label}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Filter Bar + Content */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          {/* Filter Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Filter className="h-4 w-4" />
              <span>
                Showing{' '}
                <span className="font-semibold text-gray-900">
                  {filteredTemplates.length}
                </span>{' '}
                template{filteredTemplates.length !== 1 ? 's' : ''}
              </span>
            </div>

            <div className="flex items-center gap-4">
              {/* Sort */}
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-500">Sort by:</span>
                <div className="flex rounded-lg border border-gray-200 bg-white overflow-hidden">
                  {sortOptions.map((opt) => (
                    <button
                      key={opt.key}
                      onClick={() => setSortBy(opt.key)}
                      className={`px-3 py-1.5 text-xs font-medium transition-colors ${
                        sortBy === opt.key
                          ? 'bg-indigo-600 text-white'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Layout Toggle */}
              <div className="flex rounded-lg border border-gray-200 bg-white overflow-hidden">
                <button
                  onClick={() => setLayoutView('grid')}
                  className={`p-1.5 transition-colors ${
                    layoutView === 'grid'
                      ? 'bg-indigo-600 text-white'
                      : 'text-gray-400 hover:bg-gray-50'
                  }`}
                  aria-label="Grid view"
                >
                  <Grid3X3 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setLayoutView('list')}
                  className={`p-1.5 transition-colors ${
                    layoutView === 'list'
                      ? 'bg-indigo-600 text-white'
                      : 'text-gray-400 hover:bg-gray-50'
                  }`}
                  aria-label="List view"
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Top Ad */}
          <AdBanner slot="templates-top" format="horizontal" className="mb-8" />

          {/* Template Grid or Empty State */}
          {filteredTemplates.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <div className="rounded-full bg-indigo-100 p-4 mb-4">
                <Search className="h-8 w-8 text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No templates found
              </h3>
              <p className="text-gray-500 max-w-md">
                We couldn't find any templates matching your search. Try adjusting
                your filters or search terms.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className={
                layoutView === 'grid'
                  ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
                  : 'flex flex-col gap-4'
              }
            >
              {renderTemplateGrid()}
            </motion.div>
          )}

          {/* Bottom Ad */}
          <AdBanner slot="templates-bottom" format="horizontal" className="mt-12" />
        </div>
      </div>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Template Card Component                                           */
/* ------------------------------------------------------------------ */

function TemplateCard({ template }: { template: ResumeTemplate }) {
  const layoutLabel = template.layout
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  const categoryLabel =
    template.category === 'premium-ultra'
      ? 'Premium Ultra'
      : template.category === 'premium-elite'
        ? 'Premium Elite'
        : template.category.charAt(0).toUpperCase() + template.category.slice(1);

  return (
    <div className="group relative flex flex-col rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-xl overflow-hidden">
      {/* Premium Badge */}
      {template.isPremium && (
        <div className="absolute top-3 right-3 z-10 flex items-center gap-1 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 px-2.5 py-1 text-xs font-semibold text-white shadow-md">
          <Crown className="h-3 w-3" />
          Premium
        </div>
      )}

      {/* Thumbnail / Gradient Placeholder */}
      <div
        className="relative h-[200px] w-full"
        style={{
          background: `linear-gradient(135deg, ${template.colors.primary} 0%, ${template.colors.accent} 100%)`,
        }}
      >
        {/* Decorative lines to simulate a resume layout */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 opacity-20">
          <div className="h-3 w-24 rounded bg-white" />
          <div className="h-2 w-36 rounded bg-white" />
          <div className="mt-3 h-1.5 w-full rounded bg-white" />
          <div className="h-1.5 w-full rounded bg-white" />
          <div className="h-1.5 w-3/4 rounded bg-white" />
          <div className="mt-2 h-1.5 w-full rounded bg-white" />
          <div className="h-1.5 w-full rounded bg-white" />
          <div className="h-1.5 w-5/6 rounded bg-white" />
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-all duration-300">
          <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Link
              to={`/builder?template=${template.slug}`}
              className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-lg hover:bg-gray-100 transition-colors"
            >
              Preview
            </Link>
            <Link
              to={`/builder?template=${template.slug}`}
              className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-lg hover:bg-indigo-700 transition-colors"
            >
              Use Template
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-1 flex-col p-4">
        {/* Name & Category */}
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="text-base font-semibold text-gray-900 leading-tight">
            {template.name}
          </h3>
          <span className="shrink-0 rounded-full bg-indigo-50 px-2 py-0.5 text-[10px] font-medium text-indigo-700 uppercase tracking-wide">
            {categoryLabel}
          </span>
        </div>

        {/* Description */}
        <p className="mt-1 text-sm text-gray-500 line-clamp-2 leading-relaxed">
          {template.description}
        </p>

        {/* ATS Score */}
        <div className="mt-3 flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <CheckCircle className={`h-3.5 w-3.5 ${getAtsTextColor(template.atsScore)}`} />
            <span className={`text-xs font-semibold ${getAtsTextColor(template.atsScore)}`}>
              ATS {template.atsScore}%
            </span>
          </div>
          <div className="flex-1 h-1.5 rounded-full bg-gray-100 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${getAtsColor(template.atsScore)}`}
              style={{ width: `${template.atsScore}%` }}
            />
          </div>
        </div>

        {/* Layout badge */}
        <div className="mt-3 flex items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded bg-gray-100 px-2 py-0.5 text-[11px] font-medium text-gray-600">
            <Layout className="h-3 w-3" />
            {layoutLabel}
          </span>
          <div className="flex items-center gap-1 text-xs text-gray-400">
            <Star className="h-3 w-3 fill-current text-yellow-400" />
            {template.popularity.toLocaleString()}
          </div>
        </div>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-1">
          {template.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-50 border border-gray-100 px-2 py-0.5 text-[10px] text-gray-500"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-4 flex gap-2 pt-3 border-t border-gray-100">
          <Link
            to={`/builder?template=${template.slug}`}
            className="flex-1 rounded-lg border border-gray-200 py-2 text-center text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Preview
          </Link>
          <Link
            to={`/builder?template=${template.slug}`}
            className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-indigo-600 py-2 text-center text-sm font-medium text-white hover:bg-indigo-700 transition-colors"
          >
            Use This Template
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
