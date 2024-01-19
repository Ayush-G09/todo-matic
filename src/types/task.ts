export type Category = "work" | "personal" | "health" | "learning" | "social";

export type Status = 'active' | 'completed';

export type Task = {
    title: string;
    date: string;
    category:Category;
    status: Status;
    id: string;
}