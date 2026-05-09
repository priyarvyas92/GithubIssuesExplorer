export interface Issue {
    id: number;
    title: string;
    state: string;
    created_at: string;
    user: {
        login: string;
    };
}

export interface PaginatedIssues {
    issues: Issue[];
    currentPage: number;
    itemsPerPage: number;
}