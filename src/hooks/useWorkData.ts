import { useState, useEffect } from 'react';
import { GithubData, JiraData, EmailData, ConfigData } from '../types/api';

export function useWorkData(config: ConfigData) {
  const [githubData, setGithubData] = useState<GithubData | null>(null);
  const [jiraData, setJiraData] = useState<JiraData | null>(null);
  const [emailData, setEmailData] = useState<EmailData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulated API calls - replace with actual API integration
        const mockData = {
          github: {
            pullRequests: [
              {
                title: "Feature: Add biometric authentication",
                url: "https://github.com/sf-mobile/sf-android-core/pull/123",
                status: "review_required",
                repository: "sf-android-core",
                updatedAt: "2024-03-15T10:30:00Z"
              }
            ],
            issues: [
              {
                title: "Crash on Android 14 devices",
                priority: "high",
                url: "https://github.com/sf-mobile/sf-android-core/issues/456",
                repository: "sf-android-core"
              }
            ]
          },
          jira: {
            tasks: [
              {
                key: "MOB-123",
                title: "Implement OAuth 2.0 flow",
                status: "In Progress",
                priority: "High",
                dueDate: "2024-03-20",
                url: "https://successfactors.atlassian.net/browse/MOB-123"
              }
            ],
            sprints: [
              {
                name: "Mobile Sprint 24",
                startDate: "2024-03-01",
                endDate: "2024-03-15",
                progress: 75
              }
            ]
          },
          email: {
            unread: 5,
            important: [
              {
                subject: "Release Planning Meeting",
                sender: "Product Manager",
                time: "10:30 AM",
                preview: "Let's discuss the upcoming release..."
              }
            ]
          }
        };

        setGithubData(mockData.github);
        setJiraData(mockData.jira);
        setEmailData(mockData.email);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch data');
        setLoading(false);
      }
    };

    fetchData();
  }, [config]);

  return { githubData, jiraData, emailData, loading, error };
}