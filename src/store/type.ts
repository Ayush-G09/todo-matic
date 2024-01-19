import { Task } from "../types/task";

export type Theme = "light" | "dark";

export type AppState = {
  tasks: Task[];
  theme: Theme;
};

export type rootState = {
    data: AppState;
}
