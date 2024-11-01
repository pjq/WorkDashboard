import axios from 'axios';
import { Buffer } from 'buffer';
import { GithubData, JiraData, EmailData, ConfigData } from './types/api';

export const fetchGithubData = async (config: ConfigData['github']): Promise<GithubData> => {
  const { repositories, token } = config;
  const headers = {
    Accept: 'application/vnd.github+json',
    Authorization: `Bearer ${token}`,
    'X-GitHub-Api-Version': '2022-11-28'
  };
  const pullRequests = [];
  const issues = [];

  for (const repo of repositories) {
    const prResponse = await axios.get(`https://api.github.com/repos/pjq/${repo}/pulls`, { headers });
    const issueResponse = await axios.get(`https://api.github.com/repos/pjq/${repo}/issues`, { headers });

    pullRequests.push(...prResponse.data);
    issues.push(...issueResponse.data);
  }

  return { pullRequests, issues };
};

export const fetchJiraData = async (config: ConfigData['jira']): Promise<JiraData> => {
  const { domain, projectKey, token } = config;
  const headers = { Authorization: `Basic ${Buffer.from(`:${token}`).toString('base64')}` };

  const tasksResponse = await axios.get(`https://${domain}/rest/api/2/search?jql=project=${projectKey}`, { headers });
  const sprintsResponse = await axios.get(`https://${domain}/rest/agile/1.0/board/1/sprint`, { headers });

  return { tasks: tasksResponse.data.issues, sprints: sprintsResponse.data.values };
};

export const fetchEmailData = async (config: ConfigData['email']): Promise<EmailData> => {
  // Implement email fetching logic based on the provider
  // This is a placeholder implementation
  return { unread: 0, important: [] };
};