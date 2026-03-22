import { Link } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import AdBanner from '../components/ads/AdBanner';
import {
  FileText,
  Sparkles,
  Target,
  Zap,
  ArrowRight,
  CheckCircle,
  PenTool,
  Send,
  Eye,
} from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'AI-Powered Writing',
    description:
      'Our AI analyzes the job description and your resume to generate a tailored cover letter that highlights your most relevant qualifications.',
    color: 'from-purple-500 to-indigo-600',
  },
  {
    icon: Target,
    title: 'Job-Specific Customization',
    description:
      'Every cover letter is custom-crafted for the specific position you are applying for. No generic templates — just personalized, compelling content.',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    icon: FileText,
    title: 'Professional Templates',
    description:
      'Choose from a variety of professionally designed cover letter templates that match your resume style for a cohesive application package.',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    icon: Zap,
    title: 'Ready in Minutes',
    description:
      'Stop spending hours writing cover letters from scratch. Generate a polished, interview-winning cover letter in under 5 minutes.',
    color: 'from-amber-500 to-orange-600',
  },
];

const steps = [
  {
    num: 1,
    icon: PenTool,
    title: 'Paste the Job Description',
    description:
      'Copy and paste the job posting you want to apply for. Our AI will analyze the requirements, key skills, and company tone.',
  },
  {
    num: 2,
    icon: Sparkles,
    title: 'AI Generates Your Letter',
    description:
      'Our AI combines your resume data with the job requirements to create a compelling, personalized cover letter that speaks directly to the employer.',
  },
  {
    num: 3,
    icon: Send,
    title: 'Review, Edit & Send',
    description:
      'Review the generated cover letter, make any edits you like, and export it as a matching PDF alongside your resume. Ready to apply!',
  },
];

const exampleLetters = [
  {
    title: 'Software Engineer Cover Letter',
    industry: 'Technology',
    preview:
      'Dear Hiring Manager, I am writing to express my strong interest in the Senior Software Engineer position at TechCorp. With over 6 years of experience building scalable web applications and leading cross-functional teams, I am confident in my ability to contribute to your engineering team...',
  },
  {
    title: 'Marketing Manager Cover Letter',
    industry: 'Marketing',
    preview:
      'Dear Ms. Johnson, I was thrilled to see the Marketing Manager opening at BrandCo. Having driven a 200% increase in organic traffic and managed $3M+ in campaign budgets at my current role, I bring a data-driven approach to brand growth that aligns perfectly with your goals...',
  },
  {
    title: 'Registered Nurse Cover Letter',
    industry: 'Healthcare',
    preview:
      'Dear Nurse Recruitment Team, As a dedicated Registered Nurse with 4 years of experience in emergency care at Metro General Hospital, I am excited to apply for the ER Nurse position at City Medical Center. My commitment to patient-centered care and clinical excellence...',
  },
];

const benefits = [
  'Tailored to each job application',
  'ATS-optimized formatting',
  'Matches your resume design',
  'Professional tone and language',
  'Highlights transferable skills',
  'Includes quantified achievements',
];

export default function CoverLetterPage() {
  return (
    <>
      <SEOHead
        title="Free Cover Letter Builder — AI-Powered Cover Letters"
        description="Create professional, job-specific cover letters in minutes with our AI-powered cover letter builder. Tailored content, ATS-optimized, and beautifully formatted."
        keywords="cover letter builder, AI cover letter, free cover letter maker, cover letter generator, professional cover letter, job application letter"
        canonicalUrl="https://resumeai.com/cover-letter"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-8 h-8" />
                <span className="text-blue-200 font-medium text-lg">Cover Letter Builder</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Create Perfect Cover Letters with AI
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Our AI analyzes the job posting and your experience to generate a compelling,
                personalized cover letter that gets you noticed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/builder"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
                >
                  <Sparkles className="w-5 h-5" />
                  Start Building Free
                </Link>
                <a
                  href="#examples"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/30 rounded-lg font-bold text-lg hover:bg-white/20 transition-colors"
                >
                  See Examples
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
                {benefits.slice(0, 3).map((benefit) => (
                  <span key={benefit} className="flex items-center gap-2 text-blue-100 text-sm">
                    <CheckCircle className="w-4 h-4 text-emerald-300" />
                    {benefit}
                  </span>
                ))}
              </div>
            </div>

            {/* Preview Card */}
            <div className="hidden lg:block">
              <div className="bg-white rounded-2xl shadow-2xl p-8 text-gray-900 rotate-1 hover:rotate-0 transition-transform">
                <div className="space-y-4">
                  <div className="text-right text-sm text-gray-400">March 22, 2026</div>
                  <div>
                    <div className="h-2 bg-gray-200 rounded w-1/3 mb-2" />
                    <div className="h-2 bg-gray-200 rounded w-1/2 mb-4" />
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Dear Hiring Manager,
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    I am writing to express my enthusiastic interest in the Software Engineer
                    position at your company. With 5+ years of experience in full-stack
                    development...
                  </p>
                  <div className="space-y-2">
                    <div className="h-2 bg-gray-100 rounded w-full" />
                    <div className="h-2 bg-gray-100 rounded w-full" />
                    <div className="h-2 bg-gray-100 rounded w-4/5" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-gray-100 rounded w-full" />
                    <div className="h-2 bg-gray-100 rounded w-3/4" />
                  </div>
                  <div className="pt-4">
                    <p className="text-sm text-gray-600">Sincerely,</p>
                    <p className="text-sm font-semibold text-gray-800">Alex Johnson</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            Why Use Our Cover Letter Builder?
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Our AI-powered tools help you create cover letters that complement your resume and make
            a lasting impression on employers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature) => {
              const FeatureIcon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="bg-gray-50 rounded-xl p-8 hover:shadow-md transition-shadow border border-gray-100"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 shadow-sm`}
                  >
                    <FeatureIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <AdBanner slot="cover-letter-mid" format="horizontal" className="max-w-5xl mx-auto my-4" />

      {/* How It Works */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Create a professional cover letter in three simple steps.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((step) => {
              const StepIcon = step.icon;
              return (
                <div key={step.num} className="text-center relative">
                  {step.num < 3 && (
                    <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-blue-200 to-transparent" />
                  )}
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg relative">
                    <StepIcon className="w-8 h-8 text-white" />
                    <span className="absolute -top-2 -right-2 w-7 h-7 bg-blue-600 text-white rounded-full text-sm font-bold flex items-center justify-center border-2 border-white">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Example Cover Letters */}
      <section id="examples" className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            Example Cover Letters
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            See what our AI can create. These examples were generated in under 2 minutes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {exampleLetters.map((letter) => (
              <div
                key={letter.title}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group"
              >
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6">
                  <div className="bg-white rounded-lg p-4 shadow-sm text-xs text-gray-500 leading-relaxed line-clamp-6">
                    {letter.preview}
                  </div>
                </div>
                <div className="p-6">
                  <span className="inline-block px-2.5 py-0.5 text-xs font-semibold text-blue-600 bg-blue-50 rounded-full mb-2">
                    {letter.industry}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {letter.title}
                  </h3>
                  <Link
                    to="/builder"
                    className="inline-flex items-center gap-1.5 text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                    Create Similar Letter
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits List */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Every Cover Letter Includes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Writing Your Cover Letter Today
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of job seekers who've landed interviews with AI-powered cover letters.
            It's free to get started.
          </p>
          <Link
            to="/builder"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
          >
            <Sparkles className="w-5 h-5" />
            Create My Cover Letter
          </Link>
          <p className="text-blue-200 text-sm mt-4">No credit card required. Free forever plan available.</p>
        </div>
      </section>

      <AdBanner slot="cover-letter-bottom" format="horizontal" className="max-w-5xl mx-auto my-4" />
    </>
  );
}
