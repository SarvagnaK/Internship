export interface Task {
    id: number;
    title: string;
    completed: boolean;
    important: boolean;
    dueDate?: string;
}
