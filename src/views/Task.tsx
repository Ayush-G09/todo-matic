import React from "react";
import { TaskView } from "../styles/Task";
import Header from "../component/Header";
import { useSelector } from "react-redux";
import { darkTheme, lightTheme } from "../styles/themes";
import { rootState } from "../store/type";
import TaskForm from "../component/TaskForm";

function Task() {
  const theme = useSelector((state: rootState) => state.data.theme);
  return (
    <TaskView
      className="hidescrollbar"
      bg={
        theme === "light"
          ? lightTheme.backgroundColor
          : darkTheme.backgroundColor
      }
    >
      <Header />
      <TaskForm />
    </TaskView>
  );
}

export default Task;
