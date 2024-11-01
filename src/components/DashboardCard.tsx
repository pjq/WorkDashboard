import React, { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface DashboardCardProps {
  title: string;
  icon: LucideIcon;
  children: ReactNode;
  accent: 'purple' | 'blue' | 'green' | 'yellow' | 'indigo';
}

export function DashboardCard({ title, icon: Icon, children, accent }: DashboardCardProps) {
  const accentColors = {
    purple: 'border-purple-200',
    blue: 'border-blue-200',
    green: 'border-green-200',
    yellow: 'border-yellow-200',
    indigo: 'border-indigo-200',
  };

  return (
    <div className={`bg-white rounded-xl shadow-sm border ${accentColors[accent]} p-6`}>
      <div className="flex items-center gap-3 mb-4">
        <Icon className={`text-${accent}-600`} />
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      </div>
      {children}
    </div>
  );
}