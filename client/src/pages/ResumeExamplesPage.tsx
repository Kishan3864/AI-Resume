import { Link } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import AdBanner from '../components/ads/AdBanner';
import {
  Code,
  Heart,
  GraduationCap,
  DollarSign,
  Megaphone,
  Wrench,
  Palette,
  TrendingUp,
  Scale,
  Hotel,
  ArrowRight,
  Eye,
} from 'lucide-react';

const industries = [
  { name: 'Technology', icon: Code, count: 25, color: 'from-blue-500 to-indigo-600' },
  { name: 'Healthcare', icon: Heart, count: 18, color: 'from-red-500 to-pink-600' },
  { name: 'Education', icon: GraduationCap, count: 15, color: 'from-emerald-500 to-teal-600' },
  { name: 'Finance', icon: DollarSign, count: 20, color: 'from-amber-500 to-orange-600' },
  { name: 'Marketing', icon: Megaphone, count: 16, color: 'from-purple-500 to-violet-600' },
  { name: 'Engineering', icon: Wrench, count: 22, color: 'from-gray-600 to-gray-800' },
  { name: 'Design', icon: Palette, count: 14, color: 'from-pink-500 to-rose-600' },
  { name: 'Sales', icon: TrendingUp, count: 17, color: 'from-green-500 to-emerald-600' },
  { name: 'Legal', icon: Scale, count: 12, color: 'from-indigo-500 to-blue-700' },
  { name: 'Hospitality', icon: Hotel, count: 10, color: 'from-teal-500 to-cyan-600' },
];

const featuredExamples = [
  {
    title: 'Senior Software Engineer',
    industry: 'Technology',
    level: 'Senior (5+ years)',
    description:
      'A results-driven resume showcasing technical leadership, system architecture experience, and quantified impact across multiple product launches. Highlights include cloud infrastructure, team management, and agile methodologies.',
  },
  {
    title: 'Registered Nurse',
    industry: 'Healthcare',
    level: 'Mid-Level (3-5 years)',
    description:
      'A compassionate and detail-oriented nursing resume emphasizing patient care, clinical skills, and certifications. Features HIPAA compliance experience, emergency response training, and patient satisfaction metrics.',
  },
  {
    title: 'Digital Marketing Manager',
    industry: 'Marketing',
    level: 'Senior (5+ years)',
    description:
      'A data-driven marketing resume highlighting campaign ROI, SEO/SEM expertise, and brand strategy. Demonstrates growth in organic traffic, conversion rate optimization, and multi-channel marketing management.',
  },
  {
    title: 'Financial Analyst',
    industry: 'Finance',
    level: 'Entry-Level (0-2 years)',
    description:
      'A sharp, numbers-focused resume for recent graduates entering finance. Showcases internship experience, financial modeling skills, Excel proficiency, and relevant coursework in corporate finance and valuation.',
  },
  {
    title: 'UX/UI Designer',
    industry: 'Design',
    level: 'Mid-Level (3-5 years)',
    description:
      'A visually clean resume demonstrating user-centered design thinking. Highlights portfolio projects, Figma and Sketch proficiency, user research methodologies, and A/B testing experience with measurable UX improvements.',
  },
  {
    title: 'High School Teacher',
    industry: 'Education',
    level: 'Mid-Level (3-5 years)',
    description:
      'An engaging education resume featuring classroom management, curriculum development, and student achievement data. Includes teaching certifications, extracurricular leadership, and innovative instructional methods.',
  },
];

const tips = [
  {
    title: 'Study the Structure',
    description:
      'Pay attention to how each resume is organized. Notice the section order, heading styles, and how information is prioritized for each industry.',
  },
  {
    title: 'Adapt, Don\'t Copy',
    description:
      'Use these examples as inspiration, not templates to copy verbatim. Customize the content to reflect your unique experience, skills, and achievements.',
  },
  {
    title: 'Focus on Achievements',
    description:
      'Notice how the best examples quantify results with numbers, percentages, and dollar amounts. Transform your responsibilities into measurable accomplishments.',
  },
  {
    title: 'Match the Industry Tone',
    description:
      'Each industry has its own communication style. A creative role may use bolder language, while finance and legal resumes tend to be more formal and precise.',
  },
];

export default function ResumeExamplesPage() {
  return (
    <>
      <SEOHead
        title="Resume Examples by Industry — Professional Samples"
        description="Browse professional resume examples for every industry. Get inspired by real-world samples for technology, healthcare, finance, marketing, and more."
        keywords="resume examples, resume samples, professional resume, industry resume, resume by industry, resume templates, career resume examples"
        canonicalUrl="https://resumeai.com/resume-examples"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Eye className="w-8 h-8" />
            <span className="text-blue-200 font-medium text-lg">Resume Examples</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Resume Examples for Every Industry
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Browse professionally crafted resume samples across 10+ industries. Find inspiration for
            your next career move.
          </p>
        </div>
      </section>

      {/* Industry Categories */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            Browse by Industry
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Select your industry to explore curated resume examples tailored to your field.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {industries.map((industry) => {
              const IconComponent = industry.icon;
              return (
                <div
                  key={industry.name}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center hover:shadow-md transition-all hover:-translate-y-1 group cursor-pointer"
                >
                  <div
                    className={`w-14 h-14 mx-auto rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center mb-4 shadow-sm`}
                  >
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{industry.name}</h3>
                  <p className="text-xs text-gray-400 mb-3">{industry.count}+ examples</p>
                  <span className="inline-flex items-center gap-1 text-xs text-blue-600 font-medium group-hover:gap-2 transition-all">
                    View Examples
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <AdBanner slot="examples-mid" format="horizontal" className="max-w-5xl mx-auto my-4" />

      {/* Featured Examples */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            Featured Resume Examples
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Explore detailed resume samples with expert commentary on what makes each one effective.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredExamples.map((example) => (
              <article
                key={example.title}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group"
              >
                {/* Preview Header */}
                <div className="h-44 bg-gradient-to-br from-gray-50 to-gray-100 p-6 flex flex-col justify-between relative">
                  <div className="space-y-2">
                    <div className="h-2 bg-gray-200 rounded w-1/3" />
                    <div className="h-1.5 bg-gray-200 rounded w-2/3" />
                    <div className="h-1.5 bg-gray-200 rounded w-1/2" />
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-1 bg-gray-200 rounded w-full" />
                    <div className="h-1 bg-gray-200 rounded w-full" />
                    <div className="h-1 bg-gray-200 rounded w-4/5" />
                    <div className="h-1 bg-gray-200 rounded w-full" />
                    <div className="h-1 bg-gray-200 rounded w-3/4" />
                  </div>
                  <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      View Example
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-0.5 text-xs font-semibold text-blue-600 bg-blue-50 rounded-full">
                      {example.industry}
                    </span>
                    <span className="px-2.5 py-0.5 text-xs font-medium text-gray-500 bg-gray-100 rounded-full">
                      {example.level}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {example.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">{example.description}</p>
                  <Link
                    to="/templates"
                    className="inline-flex items-center gap-1.5 text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors"
                  >
                    View Example
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            How to Use These Examples
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Follow these guidelines to make the most of our resume examples and create a standout
            application.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {tips.map((tip, index) => (
              <div
                key={tip.title}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex gap-4"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold text-sm">{index + 1}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{tip.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Create Your Own Resume?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Stop browsing examples and start building. Use our AI-powered builder to create a
            professional resume in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/builder"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              Build My Resume
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/templates"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/30 rounded-lg font-bold text-lg hover:bg-white/20 transition-colors"
            >
              Browse Templates
            </Link>
          </div>
        </div>
      </section>

      <AdBanner slot="examples-bottom" format="horizontal" className="max-w-5xl mx-auto my-4" />
    </>
  );
}
