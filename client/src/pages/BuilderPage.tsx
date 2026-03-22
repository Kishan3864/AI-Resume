import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import { Download, Printer, Save, ChevronDown, Plus, Eye, Layout } from 'lucide-react';

const editorSections = [
  { id: 'personal', title: 'Personal Info', description: 'Name, contact details, summary' },
  { id: 'experience', title: 'Experience', description: 'Work history and achievements' },
  { id: 'education', title: 'Education', description: 'Degrees, certifications, courses' },
  { id: 'skills', title: 'Skills', description: 'Technical and soft skills' },
  { id: 'additional', title: 'Additional Sections', description: 'Projects, languages, awards' },
];

const tips = [
  'Use action verbs to start bullet points for maximum impact.',
  'Quantify your achievements with numbers and percentages.',
  'Tailor your resume to each job description for better ATS scores.',
  'Keep your resume to 1-2 pages for most industries.',
];

export default function BuilderPage() {
  const [searchParams] = useSearchParams();
  const selectedTemplate = searchParams.get('template') || 'professional';
  const [expandedSection, setExpandedSection] = useState<string | null>('personal');
  const [showTemplateDropdown, setShowTemplateDropdown] = useState(false);

  const templates = ['Professional', 'Modern', 'Creative', 'Minimal', 'Executive', 'Tech'];

  return (
    <>
      <SEOHead
        title="Resume Builder — Create Your Resume"
        description="Build your professional resume with our intuitive drag-and-drop builder. Choose from ATS-optimized templates and export to PDF."
        noindex={true}
      />

      <div className="min-h-screen flex flex-col">
        {/* Top Toolbar */}
        <div className="border-b border-gray-700 bg-gray-900/80 backdrop-blur-sm sticky top-0 z-30">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Template Selector */}
              <div className="relative">
                <button
                  onClick={() => setShowTemplateDropdown(!showTemplateDropdown)}
                  className="btn-secondary flex items-center gap-2 text-sm"
                >
                  <Layout className="w-4 h-4" />
                  <span className="capitalize">{selectedTemplate}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {showTemplateDropdown && (
                  <div className="absolute top-full left-0 mt-1 w-48 card p-2 space-y-1 z-40">
                    {templates.map((t) => (
                      <button
                        key={t}
                        onClick={() => setShowTemplateDropdown(false)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                          t.toLowerCase() === selectedTemplate
                            ? 'bg-blue-500/20 text-blue-400'
                            : 'text-gray-300 hover:bg-gray-700/50'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button className="btn-secondary flex items-center gap-2 text-sm">
                <Eye className="w-4 h-4" />
                <span className="hidden sm:inline">Preview</span>
              </button>
              <button className="btn-secondary flex items-center gap-2 text-sm">
                <Printer className="w-4 h-4" />
                <span className="hidden sm:inline">Print</span>
              </button>
              <button className="btn-secondary flex items-center gap-2 text-sm">
                <Save className="w-4 h-4" />
                <span className="hidden sm:inline">Save</span>
              </button>
              <button className="btn-primary flex items-center gap-2 text-sm">
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Download</span>
              </button>
            </div>
          </div>
        </div>

        {/* Two-Panel Layout */}
        <div className="flex-1 flex flex-col lg:flex-row">
          {/* Left Panel - Editor */}
          <div className="lg:w-1/2 xl:w-5/12 border-r border-gray-700 overflow-y-auto">
            <div className="p-6 space-y-3">
              <h2 className="text-lg font-semibold text-white mb-4">Edit Your Resume</h2>

              {editorSections.map((section) => (
                <div key={section.id} className="card overflow-hidden">
                  <button
                    onClick={() =>
                      setExpandedSection(expandedSection === section.id ? null : section.id)
                    }
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-700/30 transition-colors"
                  >
                    <div>
                      <h3 className="font-medium text-white">{section.title}</h3>
                      <p className="text-sm text-gray-400">{section.description}</p>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 transition-transform ${
                        expandedSection === section.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {expandedSection === section.id && (
                    <div className="border-t border-gray-700 p-4">
                      {section.id === 'personal' && (
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-300 mb-1.5">
                                First Name
                              </label>
                              <input
                                type="text"
                                className="input-field w-full"
                                placeholder="John"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-300 mb-1.5">
                                Last Name
                              </label>
                              <input
                                type="text"
                                className="input-field w-full"
                                placeholder="Doe"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1.5">
                              Job Title
                            </label>
                            <input
                              type="text"
                              className="input-field w-full"
                              placeholder="Software Engineer"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1.5">
                              Email
                            </label>
                            <input
                              type="email"
                              className="input-field w-full"
                              placeholder="john@example.com"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1.5">
                              Phone
                            </label>
                            <input
                              type="tel"
                              className="input-field w-full"
                              placeholder="+1 (555) 000-0000"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1.5">
                              Professional Summary
                            </label>
                            <textarea
                              className="input-field w-full h-24 resize-none"
                              placeholder="Brief summary of your professional background..."
                            />
                          </div>
                        </div>
                      )}

                      {section.id !== 'personal' && (
                        <div className="text-center py-6">
                          <p className="text-gray-400 text-sm mb-3">
                            No {section.title.toLowerCase()} added yet.
                          </p>
                          <button className="btn-secondary inline-flex items-center gap-2 text-sm">
                            <Plus className="w-4 h-4" />
                            Add {section.title}
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel - Preview */}
          <div className="lg:w-1/2 xl:w-7/12 bg-gray-800/30 overflow-y-auto">
            <div className="p-6">
              <h2 className="text-lg font-semibold text-white mb-4">Resume Preview</h2>

              {/* Resume Preview Placeholder */}
              <div className="bg-white rounded-lg shadow-2xl mx-auto max-w-[612px] aspect-[8.5/11] p-8">
                {/* Header */}
                <div className="border-b-2 border-gray-300 pb-4 mb-4">
                  <div className="h-8 w-48 bg-gray-200 rounded mb-2" />
                  <div className="h-4 w-32 bg-gray-100 rounded mb-3" />
                  <div className="flex gap-4">
                    <div className="h-3 w-28 bg-gray-100 rounded" />
                    <div className="h-3 w-28 bg-gray-100 rounded" />
                    <div className="h-3 w-28 bg-gray-100 rounded" />
                  </div>
                </div>

                {/* Summary */}
                <div className="mb-4">
                  <div className="h-4 w-24 bg-gray-200 rounded mb-2" />
                  <div className="space-y-1.5">
                    <div className="h-3 w-full bg-gray-100 rounded" />
                    <div className="h-3 w-11/12 bg-gray-100 rounded" />
                    <div className="h-3 w-3/4 bg-gray-100 rounded" />
                  </div>
                </div>

                {/* Experience */}
                <div className="mb-4">
                  <div className="h-4 w-28 bg-gray-200 rounded mb-2" />
                  <div className="mb-3">
                    <div className="h-3.5 w-40 bg-gray-150 rounded mb-1" />
                    <div className="h-3 w-32 bg-gray-100 rounded mb-2" />
                    <div className="space-y-1.5 pl-3">
                      <div className="h-2.5 w-full bg-gray-50 rounded" />
                      <div className="h-2.5 w-5/6 bg-gray-50 rounded" />
                      <div className="h-2.5 w-4/5 bg-gray-50 rounded" />
                    </div>
                  </div>
                  <div>
                    <div className="h-3.5 w-36 bg-gray-150 rounded mb-1" />
                    <div className="h-3 w-28 bg-gray-100 rounded mb-2" />
                    <div className="space-y-1.5 pl-3">
                      <div className="h-2.5 w-full bg-gray-50 rounded" />
                      <div className="h-2.5 w-3/4 bg-gray-50 rounded" />
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div className="mb-4">
                  <div className="h-4 w-24 bg-gray-200 rounded mb-2" />
                  <div className="h-3.5 w-44 bg-gray-150 rounded mb-1" />
                  <div className="h-3 w-36 bg-gray-100 rounded" />
                </div>

                {/* Skills */}
                <div>
                  <div className="h-4 w-16 bg-gray-200 rounded mb-2" />
                  <div className="flex flex-wrap gap-2">
                    <div className="h-6 w-16 bg-gray-100 rounded-full" />
                    <div className="h-6 w-20 bg-gray-100 rounded-full" />
                    <div className="h-6 w-14 bg-gray-100 rounded-full" />
                    <div className="h-6 w-18 bg-gray-100 rounded-full" />
                    <div className="h-6 w-16 bg-gray-100 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tip Bar */}
        <div className="border-t border-gray-700 bg-gray-900/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-3">
            <p className="text-sm text-gray-400">
              <span className="text-blue-400 font-medium">Tip:</span>{' '}
              {tips[Math.floor(Date.now() / 10000) % tips.length]}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
