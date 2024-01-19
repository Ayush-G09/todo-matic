import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppState } from "./type";
import { Task } from "../types/task";

const initialState: AppState = {
  tasks: [],
  theme: "light",
};

export const slice = createSlice({
  name: "data",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    editTask: (
      state,
      action: PayloadAction<{ id: string; updatedTask: Partial<Task> }>
    ) => {
      const { id, updatedTask } = action.payload;
      const existingTask = state.tasks.find((task) => task.id === id);
      if (existingTask) {
        Object.assign(existingTask, updatedTask);
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      const idToDelete = action.payload;
      state.tasks = state.tasks.filter((task) => task.id !== idToDelete);
    },
  },
});

export const { toggleTheme, addTask, editTask, deleteTask } = slice.actions;

export default slice.reducer;
