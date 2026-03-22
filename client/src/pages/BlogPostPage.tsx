import { useParams, Link } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import AdBanner from '../components/ads/AdBanner';
import {
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Share2,
  User,
} from 'lucide-react';

interface BlogPostData {
  title: string;
  slug: string;
  date: string;
  category: string;
  readTime: string;
  author: string;
  content: string;
}

const blogPostsData: Record<string, BlogPostData> = {
  'how-to-write-a-resume-2024': {
    title: 'How to Write a Resume in 2024',
    slug: 'how-to-write-a-resume-2024',
    date: 'Dec 15, 2024',
    category: 'Resume Tips',
    readTime: '8 min read',
    author: 'Sarah Mitchell',
    content: `
      <h2>Why Your Resume Matters More Than Ever</h2>
      <p>In today's competitive job market, your resume is your first — and sometimes only — chance to make an impression. With hundreds of applicants per position, hiring managers spend an average of just 7.4 seconds scanning each resume. That means every word, every format choice, and every detail counts.</p>
      <p>Whether you're a recent graduate entering the workforce or a seasoned professional looking for your next opportunity, this comprehensive guide will walk you through creating a resume that gets results in 2024.</p>

      <h2>Step 1: Choose the Right Resume Format</h2>
      <p>The format you choose sets the foundation for your entire resume. There are three main formats to consider:</p>
      <ul>
        <li><strong>Chronological:</strong> Lists your work experience from most recent to oldest. Best for candidates with a consistent work history in the same field.</li>
        <li><strong>Functional:</strong> Focuses on skills and abilities rather than chronological work history. Ideal for career changers or those with gaps in employment.</li>
        <li><strong>Combination:</strong> Merges elements of both chronological and functional formats. Great for experienced professionals who want to highlight both skills and career progression.</li>
      </ul>
      <p>For most job seekers in 2024, the chronological or combination format works best, as they're preferred by both hiring managers and Applicant Tracking Systems (ATS).</p>

      <h2>Step 2: Write a Compelling Professional Summary</h2>
      <p>Your professional summary sits at the top of your resume and gives recruiters a quick overview of who you are. Think of it as your elevator pitch — you have 2-3 sentences to hook the reader.</p>
      <p>A strong summary includes:</p>
      <ul>
        <li>Your professional title or area of expertise</li>
        <li>Years of relevant experience</li>
        <li>Key achievements or specializations</li>
        <li>What value you bring to the employer</li>
      </ul>
      <p><strong>Example:</strong> "Results-driven marketing manager with 8+ years of experience in digital strategy and brand development. Proven track record of increasing organic traffic by 150% and managing campaigns with budgets exceeding $2M. Passionate about data-driven decision making and cross-functional team leadership."</p>

      <h2>Step 3: Optimize Your Work Experience</h2>
      <p>Your work experience section is the meat of your resume. For each position, include:</p>
      <ul>
        <li>Job title, company name, location, and dates of employment</li>
        <li>3-6 bullet points describing your key responsibilities and achievements</li>
        <li>Quantifiable results whenever possible (numbers, percentages, dollar amounts)</li>
        <li>Action verbs to start each bullet point (Led, Developed, Increased, Streamlined)</li>
      </ul>

      <h2>Step 4: Highlight Your Skills Strategically</h2>
      <p>Your skills section should be tailored to each job application. Review the job description and include relevant hard skills (technical abilities) and soft skills (interpersonal qualities).</p>
      <p><strong>Pro Tip:</strong> Use the exact keywords from the job posting. ATS software scans for specific terms, and matching the language increases your chances of getting through automated filters.</p>

      <h2>Step 5: Don't Forget the Details</h2>
      <p>Before submitting your resume, make sure you've covered these essentials:</p>
      <ul>
        <li>Professional email address (firstname.lastname@email.com)</li>
        <li>LinkedIn profile URL (customized, not the default)</li>
        <li>Consistent formatting (fonts, spacing, margins)</li>
        <li>PDF format for submission (unless otherwise specified)</li>
        <li>No typos or grammatical errors — proofread at least twice</li>
      </ul>

      <h2>Final Thoughts</h2>
      <p>Writing a great resume takes time and effort, but it's one of the most important investments you can make in your career. Use AI-powered tools like Resume AI to help you craft compelling bullet points, optimize for ATS, and choose the perfect template. Your dream job is just a well-crafted resume away.</p>
    `,
  },
  'ats-resume-tips': {
    title: 'ATS Resume Tips: How to Beat Applicant Tracking Systems',
    slug: 'ats-resume-tips',
    date: 'Dec 10, 2024',
    category: 'Resume Tips',
    readTime: '6 min read',
    author: 'James Chen',
    content: `
      <h2>What is an ATS and Why Should You Care?</h2>
      <p>An Applicant Tracking System (ATS) is software that companies use to manage their recruitment process. Over 98% of Fortune 500 companies use an ATS, and about 75% of all resumes are rejected by these systems before a human ever sees them.</p>
      <p>Understanding how ATS works is crucial to getting your resume past the digital gatekeepers and into the hands of hiring managers.</p>

      <h2>How ATS Software Reads Your Resume</h2>
      <p>ATS software parses your resume by extracting text and categorizing it into fields like contact information, work experience, education, and skills. It then compares this parsed data against the job requirements set by the employer.</p>
      <p>Here's where things can go wrong:</p>
      <ul>
        <li>Complex formatting can confuse the parser</li>
        <li>Graphics and images are completely ignored</li>
        <li>Unusual section headers may not be recognized</li>
        <li>Missing keywords lead to low ranking scores</li>
      </ul>

      <h2>10 Essential ATS Optimization Tips</h2>
      <ul>
        <li><strong>Use standard section headings:</strong> Stick to "Work Experience," "Education," "Skills," and "Summary." Creative headers like "My Journey" or "What I Bring" confuse ATS parsers.</li>
        <li><strong>Avoid tables and columns:</strong> Many ATS systems cannot read multi-column layouts. Use a single-column format for maximum compatibility.</li>
        <li><strong>Skip the graphics:</strong> Logos, icons, photos, and charts are invisible to ATS. Use text only to convey important information.</li>
        <li><strong>Use standard fonts:</strong> Arial, Calibri, Times New Roman, and Helvetica are safe choices that every system can render.</li>
        <li><strong>Include exact keywords:</strong> Mirror the language from the job posting. If they say "project management," don't just write "PM."</li>
        <li><strong>Submit as PDF or DOCX:</strong> These are the most universally accepted formats. When in doubt, check the application instructions.</li>
        <li><strong>Spell out acronyms:</strong> Include both the acronym and the full term: "Search Engine Optimization (SEO)."</li>
        <li><strong>Use standard date formats:</strong> "Jan 2022 - Present" or "01/2022 - Present" work best for ATS parsing.</li>
        <li><strong>Include a skills section:</strong> A dedicated skills section makes it easy for ATS to find and match your qualifications.</li>
        <li><strong>Don't stuff keywords:</strong> While keywords matter, jamming them in unnaturally will hurt you if a human reviews your resume.</li>
      </ul>

      <h2>Testing Your Resume for ATS Compatibility</h2>
      <p>Before submitting your resume, test it:</p>
      <ul>
        <li>Copy and paste your resume into a plain text editor. If it's readable and organized, ATS can likely parse it.</li>
        <li>Use Resume AI's built-in ATS scanner to check your score and get specific recommendations.</li>
        <li>Try converting your PDF to text — if the text comes out garbled, your formatting may be too complex.</li>
      </ul>

      <h2>The Bottom Line</h2>
      <p>Optimizing for ATS doesn't mean creating a boring resume. It means being smart about formatting while still showcasing your qualifications effectively. With the right approach, you can create a resume that satisfies both the robots and the humans in the hiring process.</p>
    `,
  },
  'interview-preparation-guide': {
    title: 'Interview Preparation Guide: From Resume to Offer',
    slug: 'interview-preparation-guide',
    date: 'Oct 3, 2024',
    category: 'Interview',
    readTime: '10 min read',
    author: 'Emily Rodriguez',
    content: `
      <h2>Your Resume Got You In the Door — Now Close the Deal</h2>
      <p>Congratulations! Your carefully crafted resume caught a recruiter's eye, and now you've landed an interview. But the hard work isn't over — in many ways, it's just beginning. This guide will help you prepare thoroughly so you walk into every interview with confidence.</p>

      <h2>Before the Interview: Research and Preparation</h2>
      <p>Preparation is the single biggest differentiator between candidates who get offers and those who don't. Here's your pre-interview checklist:</p>
      <ul>
        <li><strong>Research the company:</strong> Understand their mission, recent news, products/services, culture, and competitors. Check their LinkedIn, Glassdoor reviews, and recent press releases.</li>
        <li><strong>Study the job description:</strong> Identify the key skills and qualifications they're looking for. Prepare specific examples that demonstrate each one.</li>
        <li><strong>Know your resume cold:</strong> Be ready to discuss every item on your resume in detail. If it's on your resume, it's fair game for questions.</li>
        <li><strong>Prepare your STAR stories:</strong> Have 5-8 stories ready using the STAR method (Situation, Task, Action, Result) that showcase different competencies.</li>
        <li><strong>Prepare thoughtful questions:</strong> Have at least 3-5 questions ready for the interviewer. This shows genuine interest and helps you evaluate the opportunity.</li>
      </ul>

      <h2>Common Interview Questions and How to Answer Them</h2>
      <p>While every interview is different, certain questions come up repeatedly. Here are strategies for the most common ones:</p>
      <ul>
        <li><strong>"Tell me about yourself":</strong> Give a 2-minute overview connecting your background to the role. Focus on relevant experience and what excites you about this opportunity.</li>
        <li><strong>"What's your greatest weakness?":</strong> Choose a genuine area for improvement and explain what you're doing to address it. Avoid cliches like "I'm a perfectionist."</li>
        <li><strong>"Why do you want to work here?":</strong> Connect your career goals with the company's mission. Reference specific things you learned during your research.</li>
        <li><strong>"Where do you see yourself in 5 years?":</strong> Show ambition while being realistic. Align your goals with growth opportunities at the company.</li>
        <li><strong>"Why should we hire you?":</strong> Summarize your unique value proposition. Focus on what sets you apart from other qualified candidates.</li>
      </ul>

      <h2>Types of Interviews and How to Handle Each</h2>
      <p>Different interview formats require different strategies:</p>
      <ul>
        <li><strong>Phone screens:</strong> Keep your resume and notes handy. Speak clearly, smile (it affects your tone), and find a quiet location.</li>
        <li><strong>Video interviews:</strong> Test your technology beforehand. Ensure good lighting, a professional background, and look at the camera (not the screen) when speaking.</li>
        <li><strong>Behavioral interviews:</strong> Use the STAR method consistently. Be specific with examples and always quantify your impact when possible.</li>
        <li><strong>Technical interviews:</strong> Practice relevant problems in advance. Think out loud to show your reasoning process, and don't be afraid to ask clarifying questions.</li>
        <li><strong>Panel interviews:</strong> Make eye contact with everyone, not just the person asking questions. Address each panelist by name when possible.</li>
      </ul>

      <h2>After the Interview: Follow-Up</h2>
      <p>The interview doesn't end when you walk out the door:</p>
      <ul>
        <li>Send a personalized thank-you email within 24 hours to each interviewer</li>
        <li>Reference specific topics from your conversation</li>
        <li>Reiterate your enthusiasm for the role</li>
        <li>If you haven't heard back by the stated timeline, send a polite follow-up</li>
      </ul>

      <h2>Final Tips for Interview Success</h2>
      <p>Remember: an interview is a two-way street. You're evaluating the company just as much as they're evaluating you. Be authentic, be prepared, and be yourself. The right opportunity will recognize your value.</p>
    `,
  },
};

const relatedPosts = [
  { title: 'Resume Keywords That Get You Hired', slug: 'resume-keywords-that-get-you-hired' },
  { title: 'Best Resume Format for 2024', slug: 'best-resume-format-2024' },
  { title: 'Top Resume Mistakes to Avoid', slug: 'top-resume-mistakes-to-avoid' },
  { title: 'Resume Summary Examples', slug: 'resume-summary-examples' },
  { title: 'Skills Section Guide', slug: 'skills-section-guide' },
];

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPostsData[slug] : null;

  if (!post) {
    return (
      <>
        <SEOHead
          title="Post Not Found"
          description="The blog post you're looking for could not be found."
        />
        <section className="py-24 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Post Not Found</h1>
            <p className="text-gray-600 mb-8">
              Sorry, the blog post you're looking for doesn't exist or has been moved.
            </p>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <SEOHead
        title={post.title}
        description={`Read our guide on ${post.title.toLowerCase()}. Expert tips and advice from Resume AI.`}
        keywords={`${post.category.toLowerCase()}, resume tips, career advice, ${post.title.toLowerCase()}`}
        canonicalUrl={`https://resumeai.com/blog/${post.slug}`}
        ogType="article"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-white/20 rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-blue-100 text-sm">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <article className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:p-12">
                <div
                  className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-600 prose-li:text-gray-600 prose-strong:text-gray-900 prose-a:text-blue-600"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* In-Article Ad */}
                <div className="my-8 border-t border-b border-gray-100 py-6">
                  <AdBanner slot="blog-article" format="horizontal" className="my-2" />
                </div>
              </article>

              {/* Share Buttons */}
              <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Share2 className="w-5 h-5 text-gray-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Share this article</h3>
                </div>
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-[#1DA1F2] text-white rounded-lg hover:opacity-90 transition-opacity text-sm font-medium">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                    Twitter
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-[#0A66C2] text-white rounded-lg hover:opacity-90 transition-opacity text-sm font-medium">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-[#1877F2] text-white rounded-lg hover:opacity-90 transition-opacity text-sm font-medium">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    Facebook
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Sidebar Ad */}
              <AdBanner slot="blog-sidebar" format="rectangle" className="rounded-xl overflow-hidden" />

              {/* Related Posts */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                  Related Posts
                </h3>
                <ul className="space-y-3">
                  {relatedPosts.map((rp) => (
                    <li key={rp.slug}>
                      <Link
                        to={`/blog/${rp.slug}`}
                        className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors text-sm group"
                      >
                        <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0" />
                        {rp.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl shadow-sm p-6 text-white">
                <h3 className="text-lg font-bold mb-2">Get Career Tips in Your Inbox</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Join 25,000+ professionals getting weekly resume tips and career advice.
                </p>
                <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2.5 rounded-lg text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                  <button
                    type="submit"
                    className="w-full px-4 py-2.5 bg-white text-blue-600 rounded-lg font-semibold text-sm hover:bg-blue-50 transition-colors"
                  >
                    Subscribe Free
                  </button>
                </form>
                <p className="text-blue-200 text-xs mt-3">No spam. Unsubscribe anytime.</p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
