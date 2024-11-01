import React from 'react';
import { Clock, GitPullRequest, Bug, Star } from 'lucide-react';

interface MetricsProps {
  platform: 'android' | 'ios';
  metrics: {
    buildTime: string;
    openPRs: number;
    criticalBugs: number;
    rating: number;
  };
}

export function PlatformMetrics({ platform, metrics }: MetricsProps) {
  const color = platform === 'android' ? 'green' : 'blue';

  return (
    <div className="space-y-4">
      <div className={`grid grid-cols-2 gap-4`}>
        <div className={`p-3 bg-${color}-50 rounded-lg`}>
          <div className="flex items-center gap-2 mb-2">
            <Clock className={`text-${color}-600`} size={16} />
            <span className={`text-${color}-800 text-sm font-medium`}>Build Time</span>
          </div>
          <p className={`text-${color}-900 font-semibold`}>{metrics.buildTime}</p>
        </div>
        
        <div className={`p-3 bg-${color}-50 rounded-lg`}>
          <div className="flex items-center gap-2 mb-2">
            <GitPullRequest className={`text-${color}-600`} size={16} />
            <span className={`text-${color}-800 text-sm font-medium`}>Open PRs</span>
          </div>
          <p className={`text-${color}-900 font-semibold`}>{metrics.openPRs}</p>
        </div>

        <div className={`p-3 bg-${color}-50 rounded-lg`}>
          <div className="flex items-center gap-2 mb-2">
            <Bug className={`text-${color}-600`} size={16} />
            <span className={`text-${color}-800 text-sm font-medium`}>Critical Bugs</span>
          </div>
          <p className={`text-${color}-900 font-semibold`}>{metrics.criticalBugs}</p>
        </div>

        <div className={`p-3 bg-${color}-50 rounded-lg`}>
          <div className="flex items-center gap-2 mb-2">
            <Star className={`text-${color}-600`} size={16} />
            <span className={`text-${color}-800 text-sm font-medium`}>Rating</span>
          </div>
          <p className={`text-${color}-900 font-semibold`}>{metrics.rating}</p>
        </div>
      </div>
    </div>
  );
}