import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Search, HelpCircle, MessageCircle } from 'lucide-react';
import SEOHead from '../components/seo/SEOHead';
import AdBanner from '../components/ads/AdBanner';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'Is Resume AI really free to use?',
    answer:
      'Yes! Resume AI offers a robust free tier that includes access to our resume builder, a selection of professional templates, AI-powered content suggestions, and PDF downloads. You can create, edit, and download polished resumes at no cost. We also offer optional premium plans with advanced features such as additional templates, unlimited AI rewrites, and priority support.',
  },
  {
    question: 'How many resume templates are available?',
    answer:
      'We offer over 50 professionally designed resume templates spanning a wide range of industries and career levels. Our collection includes modern, classic, creative, and minimalist designs. All templates are fully customizable, allowing you to adjust colors, fonts, spacing, and layout to match your personal brand. New templates are added regularly based on current hiring trends.',
  },
  {
    question: 'What is ATS optimization and why does it matter?',
    answer:
      'ATS stands for Applicant Tracking System — software used by most employers to filter and rank job applications before a human ever sees them. Our ATS optimization feature analyzes your resume to ensure it uses the right keywords, formatting, and structure so it passes through these automated filters. Studies show that up to 75% of resumes are rejected by ATS before reaching a hiring manager, making optimization critical for your job search.',
  },
  {
    question: 'How does the AI resume writing feature work?',
    answer:
      'Our AI analyzes the job title, industry, and role you are targeting, then generates tailored bullet points, professional summaries, and skill suggestions. Simply provide basic information about your experience, and the AI will craft compelling, results-oriented content that highlights your achievements. You can review, edit, and regenerate suggestions until the content perfectly represents your qualifications.',
  },
  {
    question: 'What file formats can I download my resume in?',
    answer:
      'You can download your completed resume in PDF format, which is the most widely accepted format by employers and ATS systems. PDF ensures your formatting is preserved exactly as designed across all devices and platforms. Premium users also have access to DOCX (Microsoft Word) exports for situations where an employer specifically requests a Word document.',
  },
  {
    question: 'Is my personal information safe and secure?',
    answer:
      'Absolutely. We take data security very seriously. All data is encrypted in transit using SSL/TLS and at rest using industry-standard encryption protocols. We never sell your personal information to third parties. Your resume data is stored securely and only accessible to you. For full details, please review our Privacy Policy.',
  },
  {
    question: 'Can I create multiple resumes for different job applications?',
    answer:
      'Yes! You can create and manage multiple resumes tailored to different positions or industries. This is a best practice in job searching — customizing your resume for each application significantly increases your chances of getting an interview. Our dashboard makes it easy to duplicate, edit, and organize multiple versions of your resume.',
  },
  {
    question: 'What premium features are available?',
    answer:
      'Our premium plans unlock advanced features including access to all 50+ templates, unlimited AI content generation, cover letter builder, advanced ATS scoring with detailed feedback, custom color themes, DOCX export, removal of branding, priority customer support, and LinkedIn profile optimization suggestions. Visit our pricing page for a full comparison of plans.',
  },
  {
    question: 'Do I need to create an account to use Resume AI?',
    answer:
      'You can explore our templates and start building a resume without an account. However, creating a free account allows you to save your progress, manage multiple resumes, access your documents from any device, and receive personalized AI suggestions. Registration takes less than a minute using your email address.',
  },
  {
    question: 'Can Resume AI help me write a cover letter?',
    answer:
      'Yes! Our AI-powered cover letter builder helps you create tailored cover letters that complement your resume. Simply provide the job title and company name, and our AI will generate a personalized cover letter that highlights your relevant experience and expresses genuine interest in the position. This feature is available with our premium plans.',
  },
  {
    question: 'How do I cancel my premium subscription?',
    answer:
      'You can cancel your premium subscription at any time from your account settings page. Simply navigate to Account Settings, then Subscription, and click Cancel Subscription. Your premium features will remain active until the end of your current billing period. No cancellation fees are charged. If you need assistance, our support team is happy to help.',
  },
  {
    question: 'Does Resume AI work on mobile devices?',
    answer:
      'Yes, Resume AI is fully responsive and works on smartphones, tablets, and desktop computers. You can create, edit, and download resumes from any device with a modern web browser. Our mobile-optimized interface ensures a smooth experience even on smaller screens, so you can update your resume on the go.',
  },
  {
    question: 'How often are new templates and features added?',
    answer:
      'We regularly update our platform with new templates, features, and improvements. Our team monitors hiring trends and user feedback to ensure our templates remain current and effective. We typically release new templates monthly and feature updates bi-weekly. Follow us on social media or subscribe to our newsletter to stay informed about the latest additions.',
  },
  {
    question: 'Can I import my existing resume?',
    answer:
      'Yes, you can upload an existing resume in PDF or DOCX format, and our AI will parse the content and populate the builder fields automatically. This allows you to quickly update or redesign your current resume using our professional templates and AI-powered suggestions without starting from scratch.',
  },
];

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFAQs = faqItems.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <SEOHead
        title="Frequently Asked Questions"
        description="Find answers to common questions about Resume AI's free AI-powered resume builder, templates, ATS optimization, premium features, and more."
        keywords="resume ai faq, resume builder help, ats optimization questions, ai resume questions, free resume builder faq, resume templates help"
        canonicalUrl="https://resumeai.com/faq"
        structuredData={faqStructuredData}
      />

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">FAQ</span>
          </nav>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center">
                <HelpCircle className="w-7 h-7 text-blue-600" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about Resume AI. Can't find what you're looking for? Feel free to contact our support team.
            </p>
          </div>

          {/* Search */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-field w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900 bg-white shadow-sm"
            />
          </div>

          {/* Ad Banner */}
          <div className="mb-8">
            <AdBanner slot="faq-top" format="horizontal" />
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-3">
            {filteredFAQs.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center">
                <HelpCircle className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No results found</h3>
                <p className="text-gray-500">
                  Try a different search term or{' '}
                  <Link to="/contact" className="text-blue-600 hover:text-blue-800 underline">
                    contact us
                  </Link>{' '}
                  for help.
                </p>
              </div>
            ) : (
              filteredFAQs.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className="text-lg font-medium text-gray-900 pr-4">{item.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-200 ease-in-out ${
                        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* CTA */}
          <div className="mt-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center">
                <MessageCircle className="w-7 h-7 text-blue-600" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Still have questions?</h2>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">
              Our support team is here to help. Send us a message and we will get back to you within 24 hours.
            </p>
            <Link
              to="/contact"
              className="btn-primary px-8 py-3 rounded-xl font-semibold inline-flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Contact Us
            </Link>
          </div>

          {/* Bottom Ad Banner */}
          <div className="mt-8">
            <AdBanner slot="faq-bottom" format="horizontal" />
          </div>
        </div>
      </div>
    </>
  );
}
