import { Link } from 'react-router-dom';
import {
  FileText,
  Sparkles,
  Shield,
  Layout,
  Eye,
  Download,
  Globe,
  Star,
  CheckCircle,
  ArrowRight,
  Zap,
  Target,
  Award,
  Users,
  ChevronRight,
  Quote,
} from 'lucide-react';
import SEOHead from '../components/seo/SEOHead';
import AdBanner from '../components/ads/AdBanner';
import { templates } from '../data/templates/templateData';

const stats = [
  { label: 'Templates', value: '30+', icon: Layout },
  { label: 'Resumes Built', value: '100K+', icon: Users },
  { label: 'ATS Pass Rate', value: '95%', icon: Shield },
  { label: 'Rating', value: '4.9/5', icon: Star },
];

const companies = ['Google', 'Microsoft', 'Amazon', 'Meta', 'Apple', 'Netflix'];

const steps = [
  {
    num: 1,
    title: 'Choose a Template',
    desc: 'Browse our collection of 30+ professionally designed, ATS-optimized resume templates for every industry.',
    icon: FileText,
    color: 'from-blue-500 to-indigo-600',
  },
  {
    num: 2,
    title: 'Fill Your Details',
    desc: 'Add your experience, skills, and education. Our AI assistant helps you write compelling bullet points.',
    icon: Sparkles,
    color: 'from-purple-500 to-pink-600',
  },
  {
    num: 3,
    title: 'Download & Apply',
    desc: 'Export your polished resume as a PDF and start applying. Track your applications all in one place.',
    icon: Download,
    color: 'from-emerald-500 to-teal-600',
  },
];

const features = [
  {
    icon: Sparkles,
    title: 'AI-Powered Writing',
    desc: 'Let our AI craft impactful bullet points and professional summaries tailored to your target role.',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
  },
  {
    icon: Shield,
    title: 'ATS Optimization',
    desc: 'Every template is tested against major Applicant Tracking Systems to ensure your resume gets seen.',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50',
  },
  {
    icon: Layout,
    title: '30+ Templates',
    desc: 'From classic to creative, find the perfect template for your industry, experience level, and style.',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
  },
  {
    icon: Eye,
    title: 'Real-Time Preview',
    desc: 'See changes instantly as you type. What you see is exactly what you get in your final PDF.',
    color: 'text-amber-500',
    bg: 'bg-amber-50',
  },
  {
    icon: Download,
    title: 'PDF Export',
    desc: 'Download pixel-perfect PDF resumes ready to send to employers. No watermarks, no limits.',
    color: 'text-red-500',
    bg: 'bg-red-50',
  },
  {
    icon: Globe,
    title: 'Multiple Languages',
    desc: 'Create resumes in English, Spanish, French, German, and 10+ more languages with full localization.',
    color: 'text-cyan-500',
    bg: 'bg-cyan-50',
  },
];

const testimonials = [
  {
    name: 'Sarah Chen',
    title: 'Software Engineer at Google',
    quote:
      'Resume AI completely transformed my job search. The AI suggestions helped me highlight achievements I would have overlooked. Landed my dream role in just 3 weeks!',
    rating: 5,
  },
  {
    name: 'Marcus Johnson',
    title: 'Marketing Director at Spotify',
    quote:
      'I tried five different resume builders before finding Resume AI. The ATS optimization alone is worth it — my callback rate went from 5% to over 40%.',
    rating: 5,
  },
  {
    name: 'Priya Patel',
    title: 'Product Manager at Stripe',
    quote:
      'The templates are gorgeous and the AI writing assistant is incredibly smart. It understood my industry perfectly and helped me craft a resume that stood out.',
    rating: 5,
  },
];

const analyzerPoints = [
  'ATS Score Check — See how your resume performs against automated screening systems',
  'Keyword Optimization — Get suggestions for industry-specific keywords you may be missing',
  'Grammar & Style — AI-powered proofreading catches errors and improves clarity',
  'Industry Matching — Tailored recommendations based on your target role and industry',
];

const categoryGradients: Record<string, string> = {
  classic: 'from-slate-600 to-slate-800',
  modern: 'from-indigo-500 to-purple-700',
  creative: 'from-pink-500 to-rose-600',
  industry: 'from-teal-500 to-cyan-700',
  'premium-ultra': 'from-amber-500 to-yellow-600',
  'premium-elite': 'from-violet-600 to-indigo-800',
};

export default function HomePage() {
  const previewTemplates = templates.slice(0, 6);

  return (
    <>
      <SEOHead
        title="Free AI Resume Builder — Create Professional Resumes Online"
        description="Build stunning, ATS-optimized resumes in minutes with Resume AI. Choose from 30+ free templates, get AI-powered suggestions, and land your dream job. 100% free resume maker."
        keywords="resume builder, AI resume, free resume maker, ATS resume, professional resume template, resume generator, CV builder, online resume creator, resume writing, job application, career tools, resume format, resume design, AI writing assistant, applicant tracking system"
      />

      <div className="min-h-screen">
        {/* ====== HERO SECTION ====== */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white">
          {/* Animated background shapes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-indigo-500/20 blur-3xl animate-pulse" />
            <div className="absolute top-1/2 -left-20 w-72 h-72 rounded-full bg-purple-500/15 blur-3xl animate-pulse [animation-delay:1s]" />
            <div className="absolute bottom-0 right-1/3 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl animate-pulse [animation-delay:2s]" />
            <div className="absolute top-20 left-1/4 w-2 h-2 rounded-full bg-white/30 animate-ping [animation-delay:0.5s]" />
            <div className="absolute top-40 right-1/4 w-1.5 h-1.5 rounded-full bg-indigo-300/40 animate-ping [animation-delay:1.5s]" />
            <div className="absolute bottom-32 left-1/3 w-1 h-1 rounded-full bg-purple-300/50 animate-ping [animation-delay:2.5s]" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-28 sm:pb-32">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-sm text-indigo-200 mb-8">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span>Powered by Advanced AI Technology</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
                <span className="block">Build Your Perfect</span>
                <span className="block mt-2 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Resume with AI
                </span>
              </h1>

              <p className="mt-6 sm:mt-8 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Create stunning, ATS-optimized resumes in minutes. Our AI-powered builder helps you
                craft the perfect resume that gets past automated screening and lands interviews.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/builder"
                  className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold text-lg shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 hover:scale-105 transition-all duration-300"
                >
                  Build My Resume Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/templates"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-white/20 text-white font-semibold text-lg hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                >
                  View Templates
                </Link>
              </div>

              {/* Stats Row */}
              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 mb-3">
                      <stat.icon className="w-5 h-5 text-indigo-300" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold">{stat.value}</div>
                    <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Ad: Hero Bottom */}
        <AdBanner slot="hero-bottom" format="horizontal" className="max-w-7xl mx-auto my-4" />

        {/* ====== TRUSTED BY SECTION ====== */}
        <section className="py-12 bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm font-medium text-slate-500 uppercase tracking-wider mb-8">
              Trusted by professionals from
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16">
              {companies.map((company) => (
                <span
                  key={company}
                  className="text-xl sm:text-2xl font-bold text-slate-300 hover:text-slate-500 transition-colors duration-300 select-none"
                >
                  {company}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ====== HOW IT WORKS SECTION ====== */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold mb-4">
                Simple Process
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                Build Your Resume in 3 Easy Steps
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                No complicated forms or lengthy processes. Get from zero to a polished resume in minutes.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step) => (
                <div
                  key={step.num}
                  className="relative group bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-xl hover:border-slate-300 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} text-white shadow-lg`}
                    >
                      <step.icon className="w-6 h-6" />
                    </div>
                    <span className="text-5xl font-extrabold text-slate-100 group-hover:text-slate-200 transition-colors">
                      {String(step.num).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====== FEATURES SECTION ====== */}
        <section className="py-20 sm:py-28 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-purple-50 text-purple-600 text-sm font-semibold mb-4">
                Powerful Features
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                Everything You Need to Land the Job
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                From AI-powered writing to ATS optimization, we have every tool you need to create a
                winning resume.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-xl hover:scale-[1.02] hover:border-slate-300 transition-all duration-300"
                >
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${feature.bg} mb-5`}
                  >
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ad: Features Bottom */}
        <AdBanner slot="features-bottom" format="horizontal" className="max-w-7xl mx-auto my-4" />

        {/* ====== TEMPLATE PREVIEW SECTION ====== */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-sm font-semibold mb-4">
                Template Gallery
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                Choose from 30+ Professional Templates
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Every template is crafted by professional designers and optimized for ATS systems.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {previewTemplates.map((tpl) => (
                <div
                  key={tpl.id}
                  className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-slate-300 transition-all duration-300"
                >
                  {/* Gradient thumbnail placeholder */}
                  <div
                    className={`relative h-52 bg-gradient-to-br ${categoryGradients[tpl.category] || 'from-slate-500 to-slate-700'} flex items-center justify-center`}
                  >
                    <FileText className="w-16 h-16 text-white/30" />
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium capitalize">
                        {tpl.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{tpl.name}</h3>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1.5 text-sm text-slate-500">
                        <Shield className="w-4 h-4 text-emerald-500" />
                        <span>ATS Score: {tpl.atsScore}%</span>
                      </div>
                      {tpl.isPremium && (
                        <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 text-xs font-semibold">
                          Premium
                        </span>
                      )}
                    </div>
                    <Link
                      to={`/builder?template=${tpl.slug}`}
                      className="block w-full text-center py-2.5 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-colors"
                    >
                      Use Template
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/templates"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 text-slate-700 font-semibold hover:bg-slate-200 transition-colors"
              >
                View All Templates
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ====== AI ANALYZER SECTION ====== */}
        <section className="py-20 sm:py-28 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Text side */}
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-indigo-200 text-sm font-semibold mb-6">
                  <Target className="w-4 h-4" />
                  AI-Powered Analysis
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                  AI Resume Analyzer
                </h2>
                <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                  Upload your existing resume and get instant, actionable feedback powered by
                  advanced AI. Our analyzer checks ATS compatibility, keyword optimization, grammar,
                  and industry alignment to help you stand out.
                </p>

                <ul className="space-y-4 mb-10">
                  {analyzerPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{point}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/ai-analyzer"
                  className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 hover:scale-105 transition-all duration-300"
                >
                  Analyze Your Resume
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Visual side */}
              <div className="relative flex items-center justify-center">
                <div className="relative w-full max-w-md mx-auto">
                  {/* Main card */}
                  <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
                        <Award className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-white">Resume Score</div>
                        <div className="text-sm text-slate-400">AI Analysis Complete</div>
                      </div>
                    </div>

                    {/* Score circle */}
                    <div className="flex justify-center mb-8">
                      <div className="relative w-36 h-36 rounded-full border-8 border-emerald-500/20 flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full border-8 border-emerald-400 border-t-transparent border-l-transparent rotate-45" />
                        <span className="text-4xl font-extrabold text-emerald-400">92</span>
                      </div>
                    </div>

                    {/* Score breakdown */}
                    <div className="space-y-3">
                      {[
                        { label: 'ATS Compatibility', value: 95, color: 'bg-emerald-400' },
                        { label: 'Keyword Match', value: 88, color: 'bg-blue-400' },
                        { label: 'Grammar & Style', value: 96, color: 'bg-purple-400' },
                        { label: 'Industry Fit', value: 90, color: 'bg-amber-400' },
                      ].map((item) => (
                        <div key={item.label}>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-slate-300">{item.label}</span>
                            <span className="text-white font-semibold">{item.value}%</span>
                          </div>
                          <div className="h-2 rounded-full bg-white/10">
                            <div
                              className={`h-2 rounded-full ${item.color}`}
                              style={{ width: `${item.value}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Decorative blur */}
                  <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====== TESTIMONIALS SECTION ====== */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 text-amber-600 text-sm font-semibold mb-4">
                Testimonials
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                Loved by Job Seekers Worldwide
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Join thousands of professionals who landed their dream jobs with Resume AI.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-xl hover:border-slate-300 transition-all duration-300"
                >
                  <Quote className="w-8 h-8 text-indigo-200 mb-4" />
                  <p className="text-slate-700 leading-relaxed mb-6">"{t.quote}"</p>
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{t.name}</div>
                    <div className="text-sm text-slate-500">{t.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ad: Pre-CTA */}
        <AdBanner slot="pre-cta" format="rectangle" className="max-w-7xl mx-auto my-4" />

        {/* ====== CTA SECTION ====== */}
        <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-20 sm:py-28">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
              Ready to Land Your Dream Job?
            </h2>
            <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Join 100,000+ professionals who have built winning resumes with Resume AI. Your next
              career move starts here.
            </p>
            <Link
              to="/builder"
              className="group inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-white text-indigo-700 font-bold text-lg shadow-2xl shadow-black/20 hover:shadow-3xl hover:scale-105 transition-all duration-300"
            >
              Create Your Resume Now — It's Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
