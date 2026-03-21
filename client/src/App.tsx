import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// Lazy-loaded pages for code splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const BuilderPage = lazy(() => import('./pages/BuilderPage'));
const TemplatesPage = lazy(() => import('./pages/TemplatesPage'));
const AIAnalyzerPage = lazy(() => import('./pages/AIAnalyzerPage'));
const DashboardPage = lazy(() => import('./pages/DashboardPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const ResumeExamplesPage = lazy(() => import('./pages/ResumeExamplesPage'));
const CoverLetterPage = lazy(() => import('./pages/CoverLetterPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-surface-50">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-500 rounded-full animate-spin" />
        <p className="text-surface-500 font-body">Loading...</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/templates" element={<TemplatesPage />} />
        <Route path="/ai-analyzer" element={<AIAnalyzerPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/resume-examples" element={<ResumeExamplesPage />} />
        <Route path="/cover-letter-builder" element={<CoverLetterPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/privacy-policy" element={<PrivacyPage />} />
        <Route path="/terms-of-service" element={<TermsPage />} />

        {/* Auth Pages */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Protected Pages */}
        <Route path="/builder" element={<BuilderPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />

        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
