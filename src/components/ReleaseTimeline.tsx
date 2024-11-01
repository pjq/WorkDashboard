import React from 'react';
import { Calendar, CheckCircle2, Clock } from 'lucide-react';

export function ReleaseTimeline() {
  const releases = [
    {
      version: 'v2.15.0',
      platform: 'Android',
      date: 'Mar 20, 2024',
      status: 'upcoming',
      features: ['Biometric auth', 'Dark mode improvements']
    },
    {
      version: 'v2.14.0',
      platform: 'iOS',
      date: 'Mar 15, 2024',
      status: 'in-progress',
      features: ['Performance optimization', 'New UI components']
    },
    {
      version: 'v2.13.0',
      platform: 'Both',
      date: 'Mar 1, 2024',
      status: 'completed',
      features: ['OAuth 2.0 implementation', 'Bug fixes']
    }
  ];

  return (
    <div className="space-y-4">
      {releases.map((release, index) => (
        <div
          key={index}
          className="p-4 bg-indigo-50 rounded-lg border border-indigo-100"
        >
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-medium text-indigo-900">{release.version}</h3>
              <span className="text-sm text-indigo-700">{release.platform}</span>
            </div>
            <span className={`text-xs px-2 py-1 rounded-full ${
              release.status === 'completed' ? 'bg-green-100 text-green-800' :
              release.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
              'bg-blue-100 text-blue-800'
            }`}>
              {release.status === 'completed' ? <CheckCircle2 size={14} /> :
               release.status === 'in-progress' ? <Clock size={14} /> :
               <Calendar size={14} />}
            </span>
          </div>
          <div className="text-sm text-indigo-600 mb-2">{release.date}</div>
          <ul className="text-sm text-indigo-800 space-y-1">
            {release.features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="w-1 h-1 bg-indigo-400 rounded-full"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}