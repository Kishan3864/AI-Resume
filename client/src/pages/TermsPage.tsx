import { Link } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import AdBanner from '../components/ads/AdBanner';

export default function TermsPage() {
  return (
    <>
      <SEOHead
        title="Terms of Service"
        description="Resume AI Terms of Service — Read the terms and conditions governing your use of our AI-powered resume builder platform."
        keywords="terms of service, terms and conditions, user agreement, resume builder terms"
        canonicalUrl="https://resumeai.com/terms"
      />

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Terms of Service</span>
          </nav>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms of Service</h1>
            <p className="text-gray-500 mb-8">Last updated: March 2024</p>

            <div className="prose prose-gray max-w-none space-y-8">
              {/* Agreement */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
                <p className="text-gray-700 mb-3">
                  By accessing or using Resume AI (the "Service"), available at resumeai.com, you agree to be bound by these Terms of Service
                  ("Terms"). If you disagree with any part of these Terms, you do not have permission to access or use the Service.
                </p>
                <p className="text-gray-700">
                  These Terms apply to all visitors, users, and others who access or use the Service. By using the Service, you represent
                  that you are at least 16 years of age and have the legal capacity to enter into a binding agreement. If you are using the
                  Service on behalf of an organization, you represent and warrant that you have the authority to bind that organization to
                  these Terms.
                </p>
              </section>

              {/* Use License */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Use License</h2>
                <p className="text-gray-700 mb-3">
                  Subject to your compliance with these Terms, Resume AI grants you a limited, non-exclusive, non-transferable, and
                  revocable license to access and use the Service for your personal, non-commercial purposes.
                </p>
                <p className="text-gray-700 mb-3">Under this license, you may not:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Modify, copy, or create derivative works based on the Service or its content</li>
                  <li>Use the Service for any commercial purpose or for the benefit of any third party without our prior written consent</li>
                  <li>Reverse engineer, decompile, or disassemble any portion of the Service</li>
                  <li>Remove any copyright, trademark, or other proprietary notices from any content</li>
                  <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                  <li>Use any automated system, including bots, scrapers, or spiders, to access the Service</li>
                  <li>Attempt to gain unauthorized access to any portion of the Service or its related systems</li>
                  <li>Use the Service to generate misleading, fraudulent, or deceptive resumes or documents</li>
                </ul>
                <p className="text-gray-700 mt-3">
                  This license shall automatically terminate if you violate any of these restrictions and may be terminated by Resume AI
                  at any time. Upon termination, you must destroy any downloaded materials in your possession.
                </p>
              </section>

              {/* User Accounts */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Accounts</h2>
                <p className="text-gray-700 mb-3">
                  When you create an account with us, you must provide accurate, complete, and current information. Failure to do so
                  constitutes a breach of the Terms, which may result in immediate termination of your account.
                </p>
                <p className="text-gray-700">
                  You are responsible for safeguarding your account password and for any activities or actions under your account. You agree
                  not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of
                  security or unauthorized use of your account.
                </p>
              </section>

              {/* User Content */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. User Content and Intellectual Property</h2>
                <p className="text-gray-700 mb-3">
                  You retain ownership of the content you create using our Service, including resume text, personal information, and
                  documents you generate. By using our Service, you grant us a limited license to process, store, and display your
                  content solely for the purpose of providing the Service to you.
                </p>
                <p className="text-gray-700 mb-3">
                  The Service and its original content (excluding user-provided content), features, and functionality are and will remain
                  the exclusive property of Resume AI and its licensors. The Service is protected by copyright, trademark, and other laws.
                  Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent
                  of Resume AI.
                </p>
                <p className="text-gray-700">
                  You represent and warrant that: (a) the content you submit is yours or you have the right to use it; (b) the posting of
                  your content does not violate the privacy rights, publicity rights, copyrights, contractual rights, or any other rights of
                  any person.
                </p>
              </section>

              {/* AI Services */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. AI-Powered Services</h2>
                <p className="text-gray-700 mb-3">
                  Our Service utilizes artificial intelligence to provide resume building assistance, including content suggestions,
                  formatting recommendations, and ATS optimization analysis. You acknowledge and agree that:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>AI-generated suggestions are provided as recommendations only and should be reviewed before use</li>
                  <li>We do not guarantee that AI suggestions will result in employment or specific outcomes</li>
                  <li>You are solely responsible for the accuracy and truthfulness of your resume content</li>
                  <li>AI features may be modified, improved, or discontinued at our discretion</li>
                  <li>Your content may be processed by AI systems to provide the Service, but will not be used to train AI models without your consent</li>
                </ul>
              </section>

              {/* Disclaimer */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Disclaimer</h2>
                <p className="text-gray-700 mb-3">
                  THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. RESUME AI AND ITS SUPPLIERS AND LICENSORS HEREBY DISCLAIM
                  ALL WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION THE WARRANTIES OF MERCHANTABILITY, FITNESS
                  FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                </p>
                <p className="text-gray-700">
                  NEITHER RESUME AI NOR ITS SUPPLIERS AND LICENSORS MAKE ANY WARRANTY THAT THE SERVICE WILL BE ERROR-FREE OR THAT ACCESS
                  THERETO WILL BE CONTINUOUS OR UNINTERRUPTED. YOU UNDERSTAND AND AGREE THAT YOUR USE OF THE SERVICE IS AT YOUR SOLE
                  DISCRETION AND RISK.
                </p>
              </section>

              {/* Limitations */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitations of Liability</h2>
                <p className="text-gray-700 mb-3">
                  IN NO EVENT SHALL RESUME AI, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES BE LIABLE FOR ANY
                  INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION LOSS OF PROFITS, DATA,
                  USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Your access to or use of or inability to access or use the Service</li>
                  <li>Any conduct or content of any third party on the Service</li>
                  <li>Any content obtained from the Service</li>
                  <li>Unauthorized access, use, or alteration of your transmissions or content</li>
                  <li>Any employment decisions or outcomes related to resumes created using the Service</li>
                </ul>
                <p className="text-gray-700 mt-3">
                  Our total liability to you for all claims arising from or related to the Service shall not exceed the amount you paid to
                  us, if any, during the twelve (12) months preceding the event giving rise to the liability.
                </p>
              </section>

              {/* Accuracy */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Accuracy of Information</h2>
                <p className="text-gray-700">
                  The materials appearing on the Service may include technical, typographical, or photographic errors. Resume AI does not
                  warrant that any of the materials on its Service are accurate, complete, or current. Resume AI may make changes to the
                  materials contained on its Service at any time without notice. However, Resume AI does not make any commitment to update
                  the materials. AI-generated content and suggestions should be reviewed for accuracy and relevance before being incorporated
                  into any resume or professional document.
                </p>
              </section>

              {/* Links */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Third-Party Links</h2>
                <p className="text-gray-700">
                  The Service may contain links to third-party websites or services that are not owned or controlled by Resume AI. We have
                  no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites
                  or services. You acknowledge and agree that Resume AI shall not be responsible or liable, directly or indirectly, for any
                  damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods,
                  or services available on or through any such third-party websites or services.
                </p>
              </section>

              {/* Modifications */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Modifications to Terms</h2>
                <p className="text-gray-700">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we
                  will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be
                  determined at our sole discretion. By continuing to access or use our Service after those revisions become effective, you
                  agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
                </p>
              </section>

              {/* Termination */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Termination</h2>
                <p className="text-gray-700">
                  We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability,
                  under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of
                  the Terms. Upon termination, your right to use the Service will cease immediately. If you wish to terminate your account,
                  you may simply discontinue using the Service or contact us at support@resumeai.com. All provisions of the Terms which by
                  their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity,
                  and limitations of liability.
                </p>
              </section>

              {/* Governing Law */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Governing Law</h2>
                <p className="text-gray-700 mb-3">
                  These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its
                  conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver
                  of those rights.
                </p>
                <p className="text-gray-700">
                  If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these
                  Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service and supersede
                  and replace any prior agreements we might have had.
                </p>
              </section>

              {/* Contact */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Contact Us</h2>
                <p className="text-gray-700 mb-3">
                  If you have any questions about these Terms, please contact us:
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
            <AdBanner slot="terms-bottom" format="horizontal" />
          </div>
        </div>
      </div>
    </>
  );
}
