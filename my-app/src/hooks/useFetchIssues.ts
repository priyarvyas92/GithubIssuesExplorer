const GITHUB_ISSUE_URL = 'https://api.github.com/repos/facebook/react/issues';

export async function fetchIssues() {
  try {
    const response = await fetch(GITHUB_ISSUE_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching issues:', error);
    return [];
  }
}