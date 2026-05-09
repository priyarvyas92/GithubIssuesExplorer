import type { PaginatedIssues } from "../types/issues";

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

export async function fetchIssuesWithPagination(page: number, perPage: number): Promise<PaginatedIssues> {
  try {
    const response = await fetch(`${GITHUB_ISSUE_URL}?page=${page}&per_page=${perPage}`);
    const data = await response.json();
    return {
      issues: data,
      currentPage: page,
      itemsPerPage: data.length,
    };
    
  } catch (error) {
    console.error('Error fetching issues with pagination:', error);
    return {
      issues: [],
      currentPage: page,
      itemsPerPage: 0
    };
  }
}