import { Link } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import { Plus, FileText, Download, TrendingUp, Clock, Sparkles, Layout } from 'lucide-react';

const stats = [
  { label: 'Total Resumes', value: '0', icon: FileText, color: 'from-blue-500 to-indigo-600' },
  { label: 'Downloads', value: '0', icon: Download, color: 'from-green-500 to-emerald-600' },
  { label: 'AI Score Average', value: '—', icon: TrendingUp, color: 'from-purple-500 to-pink-600' },
];

const recentActivity = [
  { action: 'Welcome to Resume AI!', detail: 'Get started by creating your first resume.', time: 'Just now' },
];

const quickActions = [
  { label: 'Create Resume', href: '/builder', icon: Plus, color: 'from-blue-500 to-indigo-600' },
  { label: 'Browse Templates', href: '/templates', icon: Layout, color: 'from-purple-500 to-pink-600' },
  { label: 'AI Analyzer', href: '/ai-resume-analyzer', icon: Sparkles, color: 'from-amber-500 to-orange-600' },
];

export default function DashboardPage() {
  return (
    <>
      <SEOHead
        title="Dashboard — Resume AI"
        description="Manage your resumes, track downloads, and access AI-powered resume tools from your dashboard."
        noindex={true}
      />

      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">
              Welcome back! <span className="wave inline-block">👋</span>
            </h1>
            <p className="text-gray-400">
              Here&apos;s an overview of your resume activity. Start building or improve your existing resumes.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {stats.map((stat) => (
              <div key={stat.label} className="glass-card p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-400">{stat.label}</span>
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <p className="text-3xl font-bold text-white">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="mb-10">
            <h2 className="section-title text-xl mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {quickActions.map((action) => (
                <Link
                  key={action.label}
                  to={action.href}
                  className="glass-card p-5 flex items-center gap-4 hover:border-blue-500/40 transition-all group"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                    <action.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-medium text-white">{action.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* My Resumes */}
            <div className="lg:col-span-2">
              <h2 className="section-title text-xl mb-4">My Resumes</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Empty State / Create New Card */}
                <Link
                  to="/builder"
                  className="card border-2 border-dashed border-gray-600 hover:border-blue-500/50 p-8 flex flex-col items-center justify-center text-center group transition-all min-h-[200px]"
                >
                  <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                    <Plus className="w-7 h-7 text-blue-400" />
                  </div>
                  <p className="font-medium text-white mb-1">Create New Resume</p>
                  <p className="text-sm text-gray-400">Start from scratch or use a template</p>
                </Link>

                {/* Empty State Message */}
                <div className="card p-8 flex flex-col items-center justify-center text-center min-h-[200px]">
                  <FileText className="w-10 h-10 text-gray-600 mb-3" />
                  <p className="text-gray-400 text-sm">
                    Your saved resumes will appear here. Create your first resume to get started!
                  </p>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div>
              <h2 className="section-title text-xl mb-4">Recent Activity</h2>
              <div className="card p-4">
                <div className="space-y-4">
                  {recentActivity.map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Clock className="w-4 h-4 text-blue-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white">{item.action}</p>
                        <p className="text-xs text-gray-400">{item.detail}</p>
                        <p className="text-xs text-gray-500 mt-1">{item.time}</p>
                      </div>
                    </div>
                  ))}

                  {/* Empty Activity */}
                  <div className="text-center py-4 border-t border-gray-700">
                    <p className="text-sm text-gray-500">
                      More activity will appear here as you use Resume AI.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
