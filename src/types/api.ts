export interface GithubData {
  pullRequests: {
    title: string;
    url: string;
    status: string;
    repository: string;
    updatedAt: string;
  }[];
  issues: {
    title: string;
    priority: string;
    url: string;
    repository: string;
  }[];
}

export interface JiraData {
  tasks: {
    key: string;
    title: string;
    status: string;
    priority: string;
    dueDate: string;
    url: string;
  }[];
  sprints: {
    name: string;
    startDate: string;
    endDate: string;
    progress: number;
  }[];
}

export interface EmailData {
  unread: number;
  important: {
    subject: string;
    sender: string;
    time: string;
    preview: string;
  }[];
}

export interface ConfigData {
  github: {
    repositories: string[];
    token: string;
  };
  jira: {
    domain: string;
    projectKey: string;
    token: string;
  };
  email: {
    provider: 'gmail' | 'outlook';
    refreshToken: string;
  };
  useMockData: true; // New flag to use mock data
}