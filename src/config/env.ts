export const config = {
  github: {
    repositories: ['sf-android-core', 'sf-ios-core'],
    token: import.meta.env.VITE_GITHUB_TOKEN || '',
  },
  jira: {
    domain: 'successfactors.atlassian.net',
    projectKey: 'MOB',
    token: import.meta.env.VITE_JIRA_TOKEN || '',
  },
  email: {
    provider: 'gmail' as const,
    refreshToken: import.meta.env.VITE_EMAIL_TOKEN || '',
  },
};