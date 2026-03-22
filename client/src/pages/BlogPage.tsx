import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import AdBanner from '../components/ads/AdBanner';
import { Calendar, Clock, ArrowRight, BookOpen, Tag } from 'lucide-react';

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    title: 'How to Write a Resume in 2024',
    excerpt:
      'Learn the essential steps to craft a modern resume that stands out. From formatting to content, we cover everything you need to know to land your dream job.',
    date: 'Dec 15, 2024',
    category: 'Resume Tips',
    readTime: '8 min read',
    slug: 'how-to-write-a-resume-2024',
  },
  {
    title: 'ATS Resume Tips',
    excerpt:
      'Discover how Applicant Tracking Systems work and how to optimize your resume to pass ATS filters. Beat the bots and get your resume seen by real recruiters.',
    date: 'Dec 10, 2024',
    category: 'Resume Tips',
    readTime: '6 min read',
    slug: 'ats-resume-tips',
  },
  {
    title: 'Resume Keywords That Get You Hired',
    excerpt:
      'The right keywords can make or break your resume. Learn which industry-specific and action-oriented keywords recruiters are searching for in 2024.',
    date: 'Dec 5, 2024',
    category: 'Job Search',
    readTime: '7 min read',
    slug: 'resume-keywords-that-get-you-hired',
  },
  {
    title: 'Cover Letter vs Resume',
    excerpt:
      'Understand the key differences between cover letters and resumes, when you need each, and how they work together to land you interviews.',
    date: 'Nov 28, 2024',
    category: 'Career Advice',
    readTime: '5 min read',
    slug: 'cover-letter-vs-resume',
  },
  {
    title: 'Resume for Career Changers',
    excerpt:
      'Switching careers? Learn how to highlight transferable skills, reframe your experience, and create a compelling resume that opens doors in a new industry.',
    date: 'Nov 22, 2024',
    category: 'Career Advice',
    readTime: '9 min read',
    slug: 'resume-for-career-changers',
  },
  {
    title: 'Top Resume Mistakes to Avoid',
    excerpt:
      'Avoid the most common resume pitfalls that can cost you job opportunities. From typos to poor formatting, learn what NOT to do on your resume.',
    date: 'Nov 15, 2024',
    category: 'Resume Tips',
    readTime: '6 min read',
    slug: 'top-resume-mistakes-to-avoid',
  },
  {
    title: 'How AI is Changing Job Search',
    excerpt:
      'Artificial intelligence is transforming how companies hire and how candidates apply. Stay ahead of the curve with these insights on AI in recruitment.',
    date: 'Nov 8, 2024',
    category: 'Job Search',
    readTime: '7 min read',
    slug: 'how-ai-is-changing-job-search',
  },
  {
    title: 'Best Resume Format for 2024',
    excerpt:
      'Chronological, functional, or combination? Discover which resume format works best for your experience level, industry, and career goals.',
    date: 'Nov 1, 2024',
    category: 'Resume Tips',
    readTime: '8 min read',
    slug: 'best-resume-format-2024',
  },
  {
    title: 'Resume Summary Examples',
    excerpt:
      'A strong resume summary can grab attention in seconds. Explore proven examples and templates for writing a powerful professional summary.',
    date: 'Oct 25, 2024',
    category: 'Resume Tips',
    readTime: '6 min read',
    slug: 'resume-summary-examples',
  },
  {
    title: 'Skills Section Guide',
    excerpt:
      'Your skills section is prime real estate on your resume. Learn how to choose, organize, and present your skills to maximize impact with hiring managers.',
    date: 'Oct 18, 2024',
    category: 'Resume Tips',
    readTime: '5 min read',
    slug: 'skills-section-guide',
  },
  {
    title: 'Remote Job Resume Tips',
    excerpt:
      'Landing a remote position requires a tailored approach. Highlight the right skills and experience to show employers you thrive in remote work environments.',
    date: 'Oct 10, 2024',
    category: 'Job Search',
    readTime: '7 min read',
    slug: 'remote-job-resume-tips',
  },
  {
    title: 'Interview Preparation Guide',
    excerpt:
      'Your resume got you the interview — now what? Comprehensive tips on preparing for behavioral, technical, and panel interviews to seal the deal.',
    date: 'Oct 3, 2024',
    category: 'Interview',
    readTime: '10 min read',
    slug: 'interview-preparation-guide',
  },
];

const categories = ['All', 'Resume Tips', 'Career Advice', 'Job Search', 'Interview'];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts =
    activeCategory === 'All'
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  const renderPostCard = (post: BlogPost) => (
    <article
      key={post.slug}
      className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group"
    >
      <div className="h-48 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <BookOpen className="w-12 h-12 text-blue-300" />
      </div>

      <div className="p-6">
        <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-50 rounded-full mb-3">
          {post.category}
        </span>

        <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>

        <div className="flex items-center justify-between text-xs text-gray-400">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>
          <Link
            to={`/blog/${post.slug}`}
            className="flex items-center gap-1 text-blue-600 font-medium hover:text-blue-700 transition-colors"
          >
            Read More
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );

  return (
    <>
      <SEOHead
        title="Resume Tips & Career Advice Blog"
        description="Expert resume tips, career advice, and job search strategies. Learn how to write a winning resume, ace interviews, and advance your career."
        keywords="resume tips, career advice, job search blog, resume writing, interview tips, ATS resume, career change, resume examples"
        canonicalUrl="https://resumeai.com/blog"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen className="w-8 h-8" />
            <span className="text-blue-200 font-medium text-lg">Our Blog</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Resume Tips &amp; Career Advice
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Expert insights to help you craft the perfect resume, ace your interviews,
            and land your dream job.
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <span className="flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5" />
                  {category}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No posts found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => {
                const elements = [renderPostCard(post)];

                if ((index + 1) % 6 === 0 && index < filteredPosts.length - 1) {
                  elements.push(
                    <div
                      key={`ad-${index}`}
                      className="md:col-span-2 lg:col-span-3"
                    >
                      <AdBanner slot="blog-feed" format="horizontal" className="my-4" />
                    </div>
                  );
                }

                return elements;
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
