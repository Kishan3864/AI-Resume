import { Link } from 'react-router-dom';
import { Lightbulb, Award, Globe, Shield, Users, FileText, Sparkles, Target, Zap, Heart } from 'lucide-react';
import SEOHead from '../components/seo/SEOHead';
import AdBanner from '../components/ads/AdBanner';

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We leverage cutting-edge AI technology to revolutionize how people create resumes, making the process smarter and more efficient.',
  },
  {
    icon: Award,
    title: 'Quality',
    description: 'Every template and feature is crafted to meet the highest professional standards, ensuring your resume stands out to employers.',
  },
  {
    icon: Globe,
    title: 'Accessibility',
    description: 'We believe everyone deserves access to professional resume tools. Our core features are free and available to job seekers worldwide.',
  },
  {
    icon: Shield,
    title: 'Trust',
    description: 'Your data privacy and security are paramount. We use industry-standard encryption and never sell your personal information.',
  },
];

const stats = [
  { value: '500K+', label: 'Users Worldwide' },
  { value: '50+', label: 'Professional Templates' },
  { value: '120+', label: 'Countries Served' },
  { value: '2M+', label: 'Resumes Created' },
];

const benefits = [
  {
    icon: Sparkles,
    title: 'AI-Powered Writing',
    description: 'Our advanced AI analyzes job descriptions and suggests tailored content that highlights your most relevant skills and experience.',
  },
  {
    icon: Target,
    title: 'ATS Optimization',
    description: 'Every resume is automatically optimized to pass Applicant Tracking Systems, increasing your chances of landing an interview.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Create a polished, professional resume in minutes, not hours. Our intuitive builder streamlines every step of the process.',
  },
  {
    icon: Heart,
    title: 'Free Forever',
    description: 'Our core resume building features are completely free. No hidden fees, no surprise charges, and no time limits on your resumes.',
  },
];

export default function AboutPage() {
  return (
    <>
      <SEOHead
        title="About Resume AI — Our Mission"
        description="Learn about Resume AI's mission to empower job seekers with free AI-powered resume building tools. Discover our story, values, and commitment to your career success."
        keywords="about resume ai, resume builder company, ai resume mission, career tools, job seeker platform"
        canonicalUrl="https://resumeai.com/about"
      />

      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">About</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Resume AI</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Empowering job seekers worldwide with intelligent, accessible, and professional resume building tools
              that turn career aspirations into opportunities.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Resume AI was born from a simple observation: creating a professional resume should not be a barrier
                  to landing your dream job. Too many talented individuals miss out on opportunities because they
                  struggle to present their skills and experience in a compelling, professionally formatted document.
                </p>
                <p>
                  We set out to change that by combining the latest advances in artificial intelligence with
                  thoughtful, user-centered design. Our platform guides you through every step of the resume
                  creation process, from choosing the right template to crafting impactful bullet points that
                  resonate with hiring managers and pass Applicant Tracking Systems.
                </p>
                <p>
                  Today, Resume AI serves hundreds of thousands of job seekers across more than 120 countries.
                  Whether you are a recent graduate writing your first resume or a seasoned professional pivoting
                  to a new industry, our tools are designed to help you put your best foot forward.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ad Banner */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AdBanner slot="about-mid" format="horizontal" />
        </div>

        {/* Team Values */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Our Values</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              These core principles guide everything we do, from product development to customer support.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-gradient-to-br from-blue-600 to-indigo-700 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-blue-200 text-sm md:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Why Choose Resume AI</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Discover why hundreds of thousands of job seekers trust Resume AI to build their professional resumes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <Users className="w-10 h-10 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Start Building Your Resume Today</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join over 500,000 job seekers who have already created professional, ATS-optimized resumes with Resume AI.
              It is completely free to get started.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/builder"
                className="btn-primary px-8 py-3 text-lg rounded-xl font-semibold inline-flex items-center gap-2"
              >
                <FileText className="w-5 h-5" />
                Create Your Resume
              </Link>
              <Link
                to="/templates"
                className="px-8 py-3 text-lg rounded-xl font-semibold text-blue-600 border-2 border-blue-600 hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
              >
                Browse Templates
              </Link>
            </div>
          </div>
        </section>

        {/* Bottom Ad Banner */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <AdBanner slot="about-bottom" format="horizontal" />
        </div>
      </div>
    </>
  );
}
