import { useState } from 'react';
import SEOHead from '../components/seo/SEOHead';
import AdBanner from '../components/ads/AdBanner';
import { Upload, FileText, Target, Sparkles, CheckCircle, BarChart3, Zap, ArrowRight } from 'lucide-react';

const features = [
  {
    title: 'ATS Score',
    description: 'Get an instant compatibility score showing how well your resume passes Applicant Tracking Systems.',
    icon: Target,
    color: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'Keyword Analysis',
    description: 'Discover missing keywords and phrases that recruiters and ATS systems are looking for.',
    icon: Sparkles,
    color: 'from-purple-500 to-pink-600',
  },
  {
    title: 'Formatting Check',
    description: 'Ensure your resume formatting is clean, consistent, and optimized for both humans and machines.',
    icon: CheckCircle,
    color: 'from-green-500 to-emerald-600',
  },
  {
    title: 'Industry Matching',
    description: 'See how well your resume aligns with your target industry and specific job roles.',
    icon: BarChart3,
    color: 'from-amber-500 to-orange-600',
  },
];

const steps = [
  {
    num: 1,
    title: 'Upload Your Resume',
    description: 'Drag and drop your resume or click to upload. We support PDF, DOCX, and TXT formats.',
  },
  {
    num: 2,
    title: 'AI Analysis',
    description: 'Our AI engine scans your resume against ATS algorithms and industry best practices in seconds.',
  },
  {
    num: 3,
    title: 'Get Actionable Results',
    description: 'Receive a detailed report with your ATS score, missing keywords, and specific improvement suggestions.',
  },
];

const mockResults = {
  atsScore: 72,
  sections: [
    { name: 'Contact Information', score: 95, status: 'pass' },
    { name: 'Work Experience', score: 80, status: 'pass' },
    { name: 'Keywords Match', score: 58, status: 'warning' },
    { name: 'Formatting', score: 90, status: 'pass' },
    { name: 'Skills Section', score: 65, status: 'warning' },
    { name: 'Education', score: 85, status: 'pass' },
  ],
};

export default function AIAnalyzerPage() {
  const [isDragOver, setIsDragOver] = useState(false);

  return (
    <>
      <SEOHead
        title="AI Resume Analyzer — Free ATS Score Checker"
        description="Analyze your resume with AI. Get your ATS compatibility score, keyword analysis, formatting check, and industry-specific suggestions for free."
        keywords="AI resume analyzer, ATS score checker, resume scanner, ATS compatibility, resume keywords, resume analysis tool, free resume checker"
      />

      {/* Hero */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Free AI-Powered Analysis
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="gradient-text">AI Resume</span> Analyzer
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Upload your resume and get an instant ATS compatibility score, keyword analysis,
            and actionable suggestions to improve your chances of landing interviews.
          </p>

          {/* Upload Area */}
          <div className="max-w-2xl mx-auto mb-16">
            <div
              onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
              onDragLeave={() => setIsDragOver(false)}
              onDrop={(e) => { e.preventDefault(); setIsDragOver(false); }}
              className={`card border-2 border-dashed p-12 cursor-pointer transition-all ${
                isDragOver
                  ? 'border-blue-500 bg-blue-500/5'
                  : 'border-gray-600 hover:border-blue-500/50'
              }`}
            >
              <div className="flex flex-col items-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors ${
                  isDragOver ? 'bg-blue-500/20' : 'bg-gray-700/50'
                }`}>
                  <Upload className={`w-8 h-8 ${isDragOver ? 'text-blue-400' : 'text-gray-400'}`} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {isDragOver ? 'Drop your resume here' : 'Drag & drop your resume'}
                </h3>
                <p className="text-gray-400 mb-4">or click to browse your files</p>
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <FileText className="w-4 h-4" /> PDF
                  </span>
                  <span>|</span>
                  <span className="flex items-center gap-1">
                    <FileText className="w-4 h-4" /> DOCX
                  </span>
                  <span>|</span>
                  <span className="flex items-center gap-1">
                    <FileText className="w-4 h-4" /> TXT
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AdBanner slot="ai-analyzer-top" format="horizontal" className="mb-8" />

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-3xl text-center mb-4">
            What Our AI Analyzes
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Our advanced AI evaluates your resume across multiple dimensions to maximize your chances.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="glass-card p-6 text-center group hover:border-blue-500/30 transition-all">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-3xl text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((step, i) => (
              <div key={step.num} className="text-center relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  {step.num}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400">{step.description}</p>
                {i < steps.length - 1 && (
                  <ArrowRight className="hidden md:block w-6 h-6 text-gray-600 absolute top-5 -right-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Analysis Result */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-3xl text-center mb-4">Sample Analysis Report</h2>
          <p className="text-gray-400 text-center max-w-xl mx-auto mb-12">
            Here&apos;s a preview of the insights you&apos;ll receive when you analyze your resume.
          </p>

          <div className="max-w-2xl mx-auto card p-8">
            {/* Overall Score */}
            <div className="text-center mb-8">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <svg className="w-32 h-32 -rotate-90" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="52" fill="none" stroke="currentColor" strokeWidth="8" className="text-gray-700" />
                  <circle
                    cx="60" cy="60" r="52" fill="none" strokeWidth="8"
                    stroke="url(#scoreGradient)"
                    strokeLinecap="round"
                    strokeDasharray={`${mockResults.atsScore * 3.27} 327`}
                  />
                  <defs>
                    <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">{mockResults.atsScore}%</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white">ATS Compatibility Score</h3>
              <p className="text-sm text-gray-400 mt-1">Your resume needs some improvements</p>
            </div>

            {/* Section Scores */}
            <div className="space-y-3">
              {mockResults.sections.map((section) => (
                <div key={section.name} className="flex items-center justify-between p-3 rounded-lg bg-gray-800/50">
                  <div className="flex items-center gap-3">
                    <CheckCircle className={`w-5 h-5 ${
                      section.status === 'pass' ? 'text-green-400' : 'text-yellow-400'
                    }`} />
                    <span className="text-sm text-gray-300">{section.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          section.score >= 80 ? 'bg-green-500' : section.score >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${section.score}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-300 w-10 text-right">
                      {section.score}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AdBanner slot="ai-analyzer-bottom" format="horizontal" className="my-8" />

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title text-3xl mb-4">
            Ready to Optimize Your Resume?
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            Upload your resume now and get an instant AI-powered analysis with actionable suggestions to beat the ATS.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-3"
          >
            <Upload className="w-5 h-5" />
            Upload Your Resume Now
          </button>
        </div>
      </section>
    </>
  );
}
