import { Link } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import AdBanner from '../components/ads/AdBanner';

export default function PrivacyPage() {
  return (
    <>
      <SEOHead
        title="Privacy Policy"
        description="Resume AI Privacy Policy — Learn how we collect, use, and protect your personal information when you use our AI-powered resume builder."
        keywords="privacy policy, data protection, personal information, resume data privacy"
        canonicalUrl="https://resumeai.com/privacy"
      />

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Privacy Policy</span>
          </nav>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
            <p className="text-gray-500 mb-8">Last updated: March 2024</p>

            <div className="prose prose-gray max-w-none space-y-8">
              {/* Introduction */}
              <section>
                <p className="text-gray-700 leading-relaxed">
                  Resume AI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect,
                  use, disclose, and safeguard your information when you visit our website and use our AI-powered resume building services.
                  Please read this privacy policy carefully. By using our services, you consent to the data practices described in this policy.
                </p>
              </section>

              {/* Information Collection */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>

                <h3 className="text-lg font-medium text-gray-900 mb-2">Personal Information</h3>
                <p className="text-gray-700 mb-3">
                  We may collect personally identifiable information that you voluntarily provide when using our services, including but not limited to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Name, email address, and contact information</li>
                  <li>Professional experience, education, skills, and other resume content you provide</li>
                  <li>Account credentials (email and encrypted password)</li>
                  <li>Payment information (processed securely through third-party payment processors)</li>
                  <li>Communication data when you contact our support team</li>
                </ul>

                <h3 className="text-lg font-medium text-gray-900 mt-6 mb-2">Automatically Collected Information</h3>
                <p className="text-gray-700 mb-3">
                  When you access our website, we may automatically collect certain information about your device and usage, including:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>IP address and geolocation data</li>
                  <li>Browser type, version, and operating system</li>
                  <li>Pages visited, time spent on pages, and navigation paths</li>
                  <li>Referring website addresses</li>
                  <li>Device identifiers and mobile device information</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </section>

              {/* Use of Information */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Use of Your Information</h2>
                <p className="text-gray-700 mb-3">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>To provide, operate, and maintain our resume building services</li>
                  <li>To process and generate AI-powered resume suggestions and improvements</li>
                  <li>To create and manage your user account</li>
                  <li>To process transactions and send related information</li>
                  <li>To send administrative information, updates, and security alerts</li>
                  <li>To respond to your comments, questions, and support requests</li>
                  <li>To analyze usage trends and improve our services</li>
                  <li>To detect, prevent, and address technical issues or fraud</li>
                  <li>To serve personalized advertisements through third-party ad networks</li>
                  <li>To comply with legal obligations and enforce our terms of service</li>
                </ul>
              </section>

              {/* Cookies */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Cookies and Tracking Technologies</h2>
                <p className="text-gray-700 mb-3">
                  We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are
                  small data files placed on your device. You can instruct your browser to refuse all cookies or to indicate when a cookie is
                  being sent. However, if you do not accept cookies, some portions of our service may not function properly.
                </p>
                <p className="text-gray-700 mb-3">Types of cookies we use include:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li><strong>Essential Cookies:</strong> Required for the operation of our website, including session management and security features.</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website by collecting and reporting information anonymously.</li>
                  <li><strong>Advertising Cookies:</strong> Used to deliver relevant advertisements and track the effectiveness of advertising campaigns.</li>
                  <li><strong>Preference Cookies:</strong> Enable the website to remember your settings and choices for a more personalized experience.</li>
                </ul>
              </section>

              {/* Third-Party Services */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Third-Party Services</h2>
                <p className="text-gray-700 mb-3">
                  We may share your information with third-party service providers that perform services on our behalf, including:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Cloud hosting and data storage providers</li>
                  <li>Payment processing services</li>
                  <li>Analytics and performance monitoring services</li>
                  <li>Email delivery and communication platforms</li>
                  <li>Customer support tools</li>
                  <li>Advertising networks and partners</li>
                </ul>
                <p className="text-gray-700 mt-3">
                  These third-party service providers have access to your personal information only to perform specific tasks on our behalf and are
                  obligated not to disclose or use it for any other purpose.
                </p>
              </section>

              {/* Google AdSense */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Google AdSense and Advertising</h2>
                <p className="text-gray-700 mb-3">
                  We use Google AdSense to display advertisements on our website. Google AdSense uses cookies to serve ads based on your
                  prior visits to our website and other websites on the Internet. Google's use of advertising cookies enables it and its
                  partners to serve ads based on your visit to our site and/or other sites on the Internet.
                </p>
                <p className="text-gray-700 mb-3">
                  Third-party vendors, including Google, use cookies to serve ads based on your prior visits to this website or other websites.
                  Google's use of the DoubleClick cookie enables it and its partners to serve ads based on your visits to this site and/or
                  other sites on the Internet.
                </p>
                <p className="text-gray-700 mb-3">
                  You may opt out of personalized advertising by visiting{' '}
                  <a
                    href="https://www.google.com/settings/ads"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    Google Ads Settings
                  </a>
                  . Alternatively, you can opt out of third-party vendor cookies for personalized advertising by visiting{' '}
                  <a
                    href="https://www.aboutads.info/choices/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    www.aboutads.info
                  </a>
                  .
                </p>
                <p className="text-gray-700">
                  We adhere to Google AdSense program policies and the Google Publisher Policies regarding content and ad placement.
                  For more information about how Google manages data in its ads products, please visit the{' '}
                  <a
                    href="https://policies.google.com/technologies/partner-sites"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    Google Privacy & Terms page
                  </a>
                  .
                </p>
              </section>

              {/* Data Security */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data Security</h2>
                <p className="text-gray-700 mb-3">
                  We implement appropriate technical and organizational security measures to protect your personal information against
                  unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Encryption of data in transit using SSL/TLS protocols</li>
                  <li>Encryption of sensitive data at rest</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Access controls limiting employee access to personal information</li>
                  <li>Secure data centers with physical security measures</li>
                </ul>
                <p className="text-gray-700 mt-3">
                  While we strive to use commercially acceptable means to protect your personal information, no method of transmission over
                  the Internet or method of electronic storage is 100% secure. We cannot guarantee absolute security of your data.
                </p>
              </section>

              {/* Data Retention */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Data Retention</h2>
                <p className="text-gray-700">
                  We retain your personal information for as long as your account is active or as needed to provide you with our services.
                  We will also retain and use your information as necessary to comply with our legal obligations, resolve disputes, and
                  enforce our agreements. If you wish to delete your account or request that we no longer use your information, please
                  contact us at support@resumeai.com. We will respond to your request within 30 days.
                </p>
              </section>

              {/* Your Rights */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Your Privacy Rights</h2>
                <p className="text-gray-700 mb-3">
                  Depending on your location, you may have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li><strong>Right to Access:</strong> You may request a copy of the personal information we hold about you.</li>
                  <li><strong>Right to Rectification:</strong> You may request correction of inaccurate or incomplete personal information.</li>
                  <li><strong>Right to Erasure:</strong> You may request deletion of your personal information in certain circumstances.</li>
                  <li><strong>Right to Restrict Processing:</strong> You may request restriction of the processing of your personal information.</li>
                  <li><strong>Right to Data Portability:</strong> You may request a copy of your data in a structured, machine-readable format.</li>
                  <li><strong>Right to Object:</strong> You may object to the processing of your personal information for certain purposes.</li>
                </ul>
                <p className="text-gray-700 mt-3">
                  To exercise any of these rights, please contact us using the information provided below.
                </p>
              </section>

              {/* Children's Privacy */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Children's Privacy</h2>
                <p className="text-gray-700">
                  Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from
                  children under 16. If we become aware that a child under 16 has provided us with personal information, we will take steps
                  to delete such information. If you are a parent or guardian and believe that your child has provided us with personal
                  information, please contact us immediately at support@resumeai.com.
                </p>
              </section>

              {/* Changes */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Changes to This Privacy Policy</h2>
                <p className="text-gray-700">
                  We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements,
                  or other factors. We will notify you of any material changes by posting the new Privacy Policy on this page and updating
                  the "Last updated" date. We encourage you to review this Privacy Policy periodically to stay informed about how we are
                  protecting your information. Your continued use of our services after any modifications indicates your acceptance of the
                  updated Privacy Policy.
                </p>
              </section>

              {/* Contact */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact Us</h2>
                <p className="text-gray-700 mb-3">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
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
            <AdBanner slot="privacy-bottom" format="horizontal" />
          </div>
        </div>
      </div>
    </>
  );
}
