import React from 'react';
import { Mail } from 'lucide-react';
import { DashboardCard } from './DashboardCard';
import { EmailData } from '../types/api';

interface EmailCardProps {
  data: EmailData;
}

export function EmailCard({ data }: EmailCardProps) {
  return (
    <DashboardCard title={`Email (${data.unread} unread)`} icon={Mail} accent="yellow">
      <div className="space-y-4">
        {data.important.map((email, index) => (
          <div key={index} className="p-3 bg-yellow-50 rounded-lg">
            <div className="flex justify-between items-start">
              <h4 className="font-medium text-yellow-900">{email.subject}</h4>
              <span className="text-xs text-yellow-700">{email.time}</span>
            </div>
            <p className="text-sm text-yellow-800 mt-1">{email.sender}</p>
            <p className="text-sm text-yellow-600 mt-1 line-clamp-2">{email.preview}</p>
          </div>
        ))}
      </div>
    </DashboardCard>
  );
}