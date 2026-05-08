export interface Issue {
    id: number;
    title: string;
    state: string;
    created_at: string;
    user: {
        login: string;
    };
}