import React from 'react';
import { Smartphone, Monitor, GitPullRequest, BarChart3, Settings } from 'lucide-react';
import { DashboardCard } from './components/DashboardCard';
import { PlatformMetrics } from './components/PlatformMetrics';
import { ReleaseTimeline } from './components/ReleaseTimeline';
import { JiraBoard } from './components/JiraBoard';
import { EmailCard } from './components/EmailCard';
import { useWorkData } from './hooks/useWorkData';
import { config } from './config/env';

function App() {
  const { githubData, jiraData, emailData, loading, error } = useWorkData(config);

  const androidMetrics = {
    buildTime: '8m 45s',
    openPRs: 7,
    criticalBugs: 2,
    rating: 4.6
  };

  const iosMetrics = {
    buildTime: '12m 30s',
    openPRs: 5,
    criticalBugs: 1,
    rating: 4.8
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-red-600">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8 flex justify-between items-center">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <BarChart3 className="text-purple-600" size={32} />
              <h1 className="text-3xl font-bold text-gray-800">SuccessFactors Mobile Dashboard</h1>
            </div>
            <p className="text-gray-600">Mobile Team Development Overview</p>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Settings className="text-gray-600" />
          </button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-6">
          <DashboardCard title="Android Development" icon={Smartphone} accent="green">
            <PlatformMetrics platform="android" metrics={androidMetrics} />
          </DashboardCard>

          <DashboardCard title="iOS Development" icon={Monitor} accent="blue">
            <PlatformMetrics platform="ios" metrics={iosMetrics} />
          </DashboardCard>

          {emailData && <EmailCard data={emailData} />}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          <DashboardCard title="Repository Activity" icon={GitPullRequest} accent="purple">
            <div className="space-y-3">
              {githubData?.pullRequests.map((pr, index) => (
                <a
                  key={index}
                  href={pr.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
                >
                  <h4 className="font-medium text-purple-900">{pr.title}</h4>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-purple-700">{pr.repository}</span>
                    <span className="text-xs bg-purple-200 text-purple-800 py-1 px-2 rounded-full">
                      {pr.status}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </DashboardCard>

          {jiraData && <JiraBoard data={jiraData} />}

          <DashboardCard title="Release Timeline" icon={BarChart3} accent="indigo">
            <ReleaseTimeline />
          </DashboardCard>
        </div>
      </div>
    </div>
  );
}

export default App;