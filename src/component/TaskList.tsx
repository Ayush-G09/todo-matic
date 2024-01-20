import React, { useEffect, useState } from "react";
import { TaskListProps } from "../types/TaskList";
import Button from "./Button";
import { Status, Task } from "../types/task";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { darkTheme, lightTheme } from "../styles/themes";
import { rootState } from "../store/type";
import { deleteTask, editTask } from "../store/slice";
import ToggleButton from "./ToggleButton";
import {
  ActionButton,
  ActionCon,
  AddButtonCon,
  CategoryCon,
  CategoryIcon,
  EditButton,
  StatusCon,
  StatusIndicator,
  Statust,
  TaskCard,
  TaskDate,
  TaskInfo,
  TaskInfoCon,
  TaskInfoTitle,
  TaskListCon,
  TaskListHeader,
} from "../styles/TaskList";
type State = {
  selected: "all" | "active" | "completed";
  sortedTask: Task[];
};

function TaskList({ tasks }: TaskListProps) {
  const [state, setState] = useState<State>({
    selected: "all",
    sortedTask: [],
  });

  const OnSelect = (value: "all" | "active" | "completed") => {
    setState((prev) => ({ ...prev, selected: value }));
  };

  const sortByDate = (a: { date: string }, b: { date: string }): number => {
    const dateA = new Date(a.date.split("/").reverse().join("/"));
    const dateB = new Date(b.date.split("/").reverse().join("/"));
    return dateA.getTime() - dateB.getTime();
  };

  const sortingFunctions = {
    all: () => [...tasks].sort(sortByDate),
    active: () => tasks.filter((task) => task.status === "active"),
    completed: () => tasks.filter((task) => task.status === "completed"),
  };

  useEffect(() => {
    const selectedOption = state.selected;

    setState((prev) => ({
      ...prev,
      sortedTask: sortingFunctions[selectedOption]
        ? sortingFunctions[selectedOption]()
        : tasks,
    }));
  }, [tasks, state.selected]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const redirect = (path: string) => {
    if (path) {
      navigate(path);
    }
  };

  const onDelete = (taskId: string) => {
    dispatch(deleteTask(taskId));
    navigate("/");
  };

  const onUpdate = (task: Task, status: Status) => {
    const editedTask: Task = {
      title: task.title,
      date: task.date,
      category: task.category,
      status: status,
      id: task.id,
    };
    dispatch(editTask({ id: task.id, updatedTask: editedTask }));
  };

  const theme = useSelector((state: rootState) => state.data.theme);

  return (
    <TaskListCon>
      <TaskListHeader>
        <Button
          width="5%"
          height="70%"
          title="All Task"
          variant={"primary"}
          active={state.selected === "all"}
          onClick={() => OnSelect("all")}
        />
        <Button
          width="5%"
          height="70%"
          title="Active Task"
          variant={"primary"}
          active={state.selected === "active"}
          onClick={() => OnSelect("active")}
        />
        <Button
          width="5%"
          height="70%"
          title="Completed Task"
          variant={"primary"}
          active={state.selected === "completed"}
          onClick={() => OnSelect("completed")}
        />
        <AddButtonCon>
          <Button
            width="5%"
            height="70%"
            title="Add Task"
            icon="add"
            variant={"primary"}
            onClick={() => redirect("/task")}
          />
        </AddButtonCon>
      </TaskListHeader>
      {state.sortedTask.map((task, tindex) => (
        <TaskCard key={`${tindex}taskid${task.id}`} theme={theme}>
          <CategoryCon>
            <CategoryIcon className={task.category} />
          </CategoryCon>
          <TaskInfoCon>
            <TaskInfoTitle>{task.title}</TaskInfoTitle>
            <TaskInfo>
              <TaskDate>{task.date}</TaskDate>
              <StatusCon>
                <StatusIndicator status={task.status} />
                <Statust>
                  {task.status === "active" ? "Active" : "Completed"}
                </Statust>
              </StatusCon>
            </TaskInfo>
          </TaskInfoCon>
          <ActionCon>
            <ToggleButton
              selected={task.status}
              onChange={(value: string) => onUpdate(task, value as Status)}
              width="60%"
              height="50%"
              fontSize="0.8rem"
            />
            <ActionButton
              className="pen"
              onClick={() => navigate(`/task/${task.id}`)}
            />
            <ActionButton
              className="delete"
              onClick={() => onDelete(task.id)}
            />
          </ActionCon>
          <EditButton className={theme === 'light' ? "leftArrow" : "leftArrowWhite"} onClick={() => navigate(`/task/${task.id}`)}/>
        </TaskCard>
      ))}
    </TaskListCon>
  );
}

export default TaskList;
