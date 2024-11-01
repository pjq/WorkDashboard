import React from 'react';
import { CheckSquare, Clock } from 'lucide-react';
import { DashboardCard } from './DashboardCard';
import { JiraData } from '../types/api';

interface JiraBoardProps {
  data: JiraData;
}

export function JiraBoard({ data }: JiraBoardProps) {
  return (
    <DashboardCard title="Jira Tasks" icon={CheckSquare} accent="blue">
      <div className="space-y-6">
        <div className="space-y-3">
          {data.tasks.map((task, index) => (
            <a
              key={index}
              href={task.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs font-medium text-blue-700">{task.key}</span>
                  <h4 className="font-medium text-blue-900 mt-1">{task.title}</h4>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  task.priority === 'High' ? 'bg-red-100 text-red-800' :
                  task.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {task.priority}
                </span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <Clock size={14} className="text-blue-600" />
                <span className="text-xs text-blue-700">Due: {task.dueDate}</span>
              </div>
            </a>
          ))}
        </div>

        <div className="border-t border-blue-100 pt-4">
          <h4 className="text-sm font-medium text-blue-900 mb-3">Sprint Progress</h4>
          {data.sprints.map((sprint, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-blue-800">{sprint.name}</span>
                <span className="text-blue-600">{sprint.progress}%</span>
              </div>
              <div className="h-2 bg-blue-100 rounded-full">
                <div
                  className="h-full bg-blue-500 rounded-full transition-all duration-500"
                  style={{ width: `${sprint.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardCard>
  );
}