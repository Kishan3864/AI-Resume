import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import AdBanner from '../components/ads/AdBanner';
import { Check, X, Crown, Zap, Building2, Star } from 'lucide-react';

const tiers = [
  {
    name: 'Free',
    icon: Zap,
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: 'Perfect for getting started with your first resume.',
    badge: null,
    highlight: false,
    cta: 'Start Free',
    ctaLink: '/register',
    features: [
      { text: '5 resume templates', included: true },
      { text: 'Basic AI writing assistance', included: true },
      { text: 'PDF export', included: true },
      { text: 'Resume AI watermark', included: true },
      { text: '1 resume', included: true },
      { text: 'All premium templates', included: false },
      { text: 'Full AI rewriting & optimization', included: false },
      { text: 'ATS score checker', included: false },
      { text: 'Cover letter builder', included: false },
      { text: 'Priority support', included: false },
      { text: 'API access', included: false },
      { text: 'Team management', included: false },
      { text: 'Custom branding', included: false },
    ],
  },
  {
    name: 'Pro',
    icon: Crown,
    monthlyPrice: 9.99,
    yearlyPrice: 7.99,
    description: 'Everything you need to land your dream job.',
    badge: 'Most Popular',
    highlight: true,
    cta: 'Upgrade to Pro',
    ctaLink: '/register',
    features: [
      { text: 'All 30+ resume templates', included: true },
      { text: 'Full AI writing & optimization', included: true },
      { text: 'PDF & DOCX export', included: true },
      { text: 'No watermark', included: true },
      { text: 'Unlimited resumes', included: true },
      { text: 'All premium templates', included: true },
      { text: 'Full AI rewriting & optimization', included: true },
      { text: 'ATS score checker', included: true },
      { text: 'Cover letter builder', included: true },
      { text: 'Priority support', included: true },
      { text: 'API access', included: false },
      { text: 'Team management', included: false },
      { text: 'Custom branding', included: false },
    ],
  },
  {
    name: 'Enterprise',
    icon: Building2,
    monthlyPrice: 29.99,
    yearlyPrice: 23.99,
    description: 'Advanced features for teams and organizations.',
    badge: null,
    highlight: false,
    cta: 'Contact Sales',
    ctaLink: '/contact',
    features: [
      { text: 'All 30+ resume templates', included: true },
      { text: 'Full AI writing & optimization', included: true },
      { text: 'PDF & DOCX export', included: true },
      { text: 'No watermark', included: true },
      { text: 'Unlimited resumes', included: true },
      { text: 'All premium templates', included: true },
      { text: 'Full AI rewriting & optimization', included: true },
      { text: 'ATS score checker', included: true },
      { text: 'Cover letter builder', included: true },
      { text: 'Priority support', included: true },
      { text: 'API access', included: true },
      { text: 'Team management', included: true },
      { text: 'Custom branding', included: true },
    ],
  },
];

const comparisonFeatures = [
  { name: 'Resume Templates', free: '5 basic', pro: 'All 30+', enterprise: 'All 30+ + Custom' },
  { name: 'AI Writing Assistance', free: 'Basic', pro: 'Full', enterprise: 'Full + Priority' },
  { name: 'Export Formats', free: 'PDF only', pro: 'PDF & DOCX', enterprise: 'PDF, DOCX & HTML' },
  { name: 'Resumes', free: '1', pro: 'Unlimited', enterprise: 'Unlimited' },
  { name: 'ATS Score Checker', free: false, pro: true, enterprise: true },
  { name: 'Cover Letter Builder', free: false, pro: true, enterprise: true },
  { name: 'Watermark-Free', free: false, pro: true, enterprise: true },
  { name: 'Priority Support', free: false, pro: true, enterprise: true },
  { name: 'API Access', free: false, pro: false, enterprise: true },
  { name: 'Team Management', free: false, pro: false, enterprise: true },
  { name: 'Custom Branding', free: false, pro: false, enterprise: true },
  { name: 'Dedicated Account Manager', free: false, pro: false, enterprise: true },
];

const faqs = [
  {
    question: 'Can I use Resume AI for free?',
    answer:
      'Absolutely! Our Free plan gives you access to 5 templates, basic AI assistance, and PDF export. You can create a professional resume without paying a cent.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and Apple Pay. All payments are processed securely through Stripe.',
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer:
      "Yes, you can cancel your subscription at any time from your account settings. You'll continue to have access to Pro features until the end of your current billing period.",
  },
  {
    question: "What's the difference between monthly and yearly billing?",
    answer:
      'Yearly billing saves you 20% compared to monthly billing. You pay upfront for the year and enjoy uninterrupted access to all features at a discounted rate.',
  },
  {
    question: 'Do you offer refunds?',
    answer:
      "We offer a 14-day money-back guarantee on all paid plans. If you're not satisfied, contact our support team for a full refund within 14 days of purchase.",
  },
  {
    question: 'What does the Enterprise plan include?',
    answer:
      'The Enterprise plan includes everything in Pro plus API access, team management with role-based permissions, custom branding, a dedicated account manager, and priority support with guaranteed response times.',
  },
];

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <>
      <SEOHead
        title="Pricing — Free & Premium Plans"
        description="Simple, transparent pricing for Resume AI. Start free and upgrade when you're ready. Build professional resumes with AI-powered tools."
        keywords="resume builder pricing, free resume maker, premium resume builder, resume AI pricing, affordable resume builder"
        canonicalUrl="https://resumeai.com/pricing"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-8 h-8 text-yellow-300" />
            <span className="text-blue-200 font-medium text-lg">Pricing</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            Start building your resume for free. Upgrade anytime for premium templates, full AI
            power, and advanced features.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!isYearly ? 'text-white' : 'text-blue-200'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-14 h-7 rounded-full transition-colors ${
                isYearly ? 'bg-emerald-400' : 'bg-white/30'
              }`}
              aria-label="Toggle yearly billing"
            >
              <span
                className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow transition-transform ${
                  isYearly ? 'translate-x-7' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isYearly ? 'text-white' : 'text-blue-200'}`}>
              Yearly
            </span>
            {isYearly && (
              <span className="bg-emerald-400 text-emerald-900 text-xs font-bold px-2.5 py-1 rounded-full">
                Save 20%
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 md:py-20 bg-gray-50 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {tiers.map((tier) => {
              const TierIcon = tier.icon;
              const price = isYearly ? tier.yearlyPrice : tier.monthlyPrice;

              return (
                <div
                  key={tier.name}
                  className={`relative bg-white rounded-2xl shadow-sm overflow-hidden transition-shadow hover:shadow-lg ${
                    tier.highlight
                      ? 'border-2 border-blue-600 ring-4 ring-blue-100'
                      : 'border border-gray-200'
                  }`}
                >
                  {tier.badge && (
                    <div className="bg-blue-600 text-white text-center py-2 text-sm font-semibold">
                      {tier.badge}
                    </div>
                  )}

                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`p-2 rounded-lg ${
                          tier.highlight ? 'bg-blue-100' : 'bg-gray-100'
                        }`}
                      >
                        <TierIcon
                          className={`w-6 h-6 ${
                            tier.highlight ? 'text-blue-600' : 'text-gray-600'
                          }`}
                        />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{tier.name}</h3>
                    </div>

                    <div className="mb-4">
                      <span className="text-4xl font-bold text-gray-900">
                        ${price.toFixed(2)}
                      </span>
                      {price > 0 && (
                        <span className="text-gray-500 text-sm ml-1">/month</span>
                      )}
                      {isYearly && price > 0 && (
                        <p className="text-sm text-gray-400 mt-1">
                          Billed ${(price * 12).toFixed(2)}/year
                        </p>
                      )}
                    </div>

                    <p className="text-gray-600 text-sm mb-6">{tier.description}</p>

                    <Link
                      to={tier.ctaLink}
                      className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                        tier.highlight
                          ? 'bg-blue-600 text-white hover:bg-blue-700'
                          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                      }`}
                    >
                      {tier.cta}
                    </Link>
                  </div>

                  <div className="px-8 pb-8">
                    <div className="border-t border-gray-100 pt-6">
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                        What's included
                      </p>
                      <ul className="space-y-3">
                        {tier.features.map((feature) => (
                          <li key={feature.text} className="flex items-start gap-3">
                            {feature.included ? (
                              <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                            ) : (
                              <X className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                            )}
                            <span
                              className={`text-sm ${
                                feature.included ? 'text-gray-700' : 'text-gray-400'
                              }`}
                            >
                              {feature.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <AdBanner slot="pricing-banner" format="horizontal" className="max-w-5xl mx-auto my-4" />

      {/* Feature Comparison Table */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Feature Comparison
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 pr-4 text-sm font-semibold text-gray-900">
                    Feature
                  </th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-gray-900">
                    Free
                  </th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-blue-600">
                    Pro
                  </th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-gray-900">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, index) => (
                  <tr
                    key={feature.name}
                    className={`border-b border-gray-100 ${
                      index % 2 === 0 ? 'bg-gray-50/50' : ''
                    }`}
                  >
                    <td className="py-4 pr-4 text-sm text-gray-700 font-medium">{feature.name}</td>
                    {(['free', 'pro', 'enterprise'] as const).map((plan) => (
                      <td key={plan} className="text-center py-4 px-4">
                        {typeof feature[plan] === 'boolean' ? (
                          feature[plan] ? (
                            <Check className="w-5 h-5 text-emerald-500 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-gray-300 mx-auto" />
                          )
                        ) : (
                          <span className="text-sm text-gray-600">{feature[plan]}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Your Resume?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join over 100,000 professionals who've built their resumes with Resume AI. Start free
            today — no credit card required.
          </p>
          <Link
            to="/register"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
          >
            <Zap className="w-5 h-5" />
            Start Free Today
          </Link>
        </div>
      </section>
    </>
  );
}
