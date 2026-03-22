import { Link } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import AdBanner from '../components/ads/AdBanner';

export default function DisclaimerPage() {
  return (
    <>
      <SEOHead
        title="Disclaimer"
        description="Resume AI Disclaimer — Important information about the use of our AI-powered resume builder, limitations of liability, and professional advice."
        keywords="disclaimer, website disclaimer, resume builder disclaimer, ai disclaimer, legal notice"
        canonicalUrl="https://resumeai.com/disclaimer"
      />

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Disclaimer</span>
          </nav>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Disclaimer</h1>
            <p className="text-gray-500 mb-8">Last updated: March 2024</p>

            <div className="prose prose-gray max-w-none space-y-8">
              {/* General Disclaimer */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. General Information</h2>
                <p className="text-gray-700 mb-3">
                  The information provided by Resume AI ("we," "us," or "our") on resumeai.com (the "Site") and through
                  our AI-powered resume building services is for general informational purposes only. All information on the
                  Site is provided in good faith. However, we make no representation or warranty of any kind, express or implied,
                  regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
                </p>
                <p className="text-gray-700">
                  UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED
                  AS A RESULT OF THE USE OF THE SITE OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE. YOUR USE OF THE
                  SITE AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS SOLELY AT YOUR OWN RISK.
                </p>
              </section>

              {/* Not Professional Advice */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Not Professional Career Advice</h2>
                <p className="text-gray-700 mb-3">
                  The Site and its content, including AI-generated resume suggestions, templates, and career-related tips, are
                  not intended to be and do not constitute professional career counseling, employment advice, or human resources
                  consultation. The information is provided for self-service resume creation purposes only.
                </p>
                <p className="text-gray-700">
                  You should not rely solely on the information provided through our Service when making career decisions. We
                  recommend consulting with qualified career counselors, professional resume writers, or industry-specific advisors
                  for personalized guidance tailored to your individual circumstances.
                </p>
              </section>

              {/* AI Content */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. AI-Generated Content</h2>
                <p className="text-gray-700 mb-3">
                  Our Service uses artificial intelligence to generate resume content suggestions, including professional summaries,
                  bullet points, and skill descriptions. While we strive to provide high-quality, relevant suggestions, AI-generated
                  content has inherent limitations:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>AI-generated text may not always be perfectly accurate or contextually appropriate for your specific situation</li>
                  <li>Content suggestions are based on patterns in training data and may not reflect the latest industry-specific requirements</li>
                  <li>You are solely responsible for reviewing, verifying, and editing all AI-generated content before including it in your resume</li>
                  <li>We do not guarantee that AI-generated content will result in job interviews, offers, or any specific employment outcome</li>
                  <li>AI suggestions should be treated as a starting point, not a final product</li>
                </ul>
              </section>

              {/* No Employment Guarantee */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. No Employment Guarantee</h2>
                <p className="text-gray-700">
                  Resume AI does not guarantee employment, job interviews, or any specific career outcomes as a result of using our
                  Service. The effectiveness of a resume depends on numerous factors beyond our control, including the job market,
                  employer preferences, applicant qualifications, and interview performance. While our tools are designed to help you
                  create professional, ATS-optimized resumes, success in job searching depends on many variables that are outside the
                  scope of our Service.
                </p>
              </section>

              {/* ATS Optimization */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. ATS Optimization</h2>
                <p className="text-gray-700">
                  Our ATS (Applicant Tracking System) optimization features are designed to improve the compatibility of your resume
                  with common ATS software. However, each employer may use different ATS systems with varying algorithms and criteria.
                  We cannot guarantee that your resume will pass every ATS or receive a specific score in any employer's system.
                  ATS scores and recommendations provided by our Service are estimates based on general best practices and should be
                  used as guidelines rather than definitive assessments.
                </p>
              </section>

              {/* External Links */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. External Links</h2>
                <p className="text-gray-700">
                  The Site may contain links to other websites or content belonging to or originating from third parties, or links
                  to websites and features in banners or other advertising. Such external links are not investigated, monitored, or
                  checked for accuracy, adequacy, validity, reliability, availability, or completeness by us. We do not warrant,
                  endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by
                  third-party websites linked through the Site or any website or feature linked in any banner or other advertising.
                  We will not be a party to or in any way be responsible for monitoring any transaction between you and third-party
                  providers of products or services.
                </p>
              </section>

              {/* Advertising Disclaimer */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Advertising Disclaimer</h2>
                <p className="text-gray-700 mb-3">
                  This Site displays advertisements provided by third-party advertising networks, including Google AdSense. These
                  advertisements are clearly distinguished from our editorial content. We do not endorse or guarantee the products,
                  services, or information presented in third-party advertisements displayed on our Site.
                </p>
                <p className="text-gray-700">
                  Third-party advertisers may use cookies and similar technologies to serve ads based on your prior visits to this
                  and other websites. You may opt out of personalized advertising by visiting your{' '}
                  <a
                    href="https://www.google.com/settings/ads"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    Google Ads Settings
                  </a>{' '}
                  or the{' '}
                  <a
                    href="https://www.aboutads.info/choices/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    Digital Advertising Alliance opt-out page
                  </a>
                  .
                </p>
              </section>

              {/* Testimonials */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Testimonials and Reviews</h2>
                <p className="text-gray-700">
                  Any testimonials or reviews displayed on the Site reflect the personal experiences and opinions of the individual
                  users who provided them. Testimonials are not intended to represent or guarantee that any user will achieve the
                  same or similar results. Individual results may vary. Testimonials are displayed in good faith and are not indicative
                  of future performance or success for any particular user.
                </p>
              </section>

              {/* Errors and Omissions */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Errors and Omissions</h2>
                <p className="text-gray-700">
                  While we have made every attempt to ensure that the information contained on this Site is accurate and up to date,
                  we are not responsible for any errors or omissions, or for the results obtained from the use of this information.
                  All information on this Site is provided "as is," with no guarantee of completeness, accuracy, timeliness, or of
                  the results obtained from the use of this information, and without warranty of any kind, express or implied.
                </p>
              </section>

              {/* Changes */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Changes to This Disclaimer</h2>
                <p className="text-gray-700">
                  We reserve the right to modify this Disclaimer at any time. Changes and clarifications will take effect immediately
                  upon their posting on the Site. We encourage you to review this page periodically to stay informed about our
                  disclaimers. Your continued use of the Site after any changes to this Disclaimer constitutes your acceptance of
                  those changes.
                </p>
              </section>

              {/* Contact */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact Us</h2>
                <p className="text-gray-700 mb-3">
                  If you have any questions about this Disclaimer, please contact us:
                </p>
                <ul className="list-none space-y-2 text-gray-700">
                  <li><strong>Email:</strong> support@resumeai.com</li>
                  <li><strong>Website:</strong>{' '}
                    <Link to="/contact" className="text-blue-600 hover:text-blue-800 underline">
                      Contact Form
                    </Link>
                  </li>
                </ul>
              </section>
            </div>
          </div>

          {/* Ad Banner */}
          <div className="mt-8">
            <AdBanner slot="disclaimer-bottom" format="horizontal" />
          </div>
        </div>
      </div>
    </>
  );
}
