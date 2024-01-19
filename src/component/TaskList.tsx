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
      id: task.id
    };
    dispatch(editTask({ id: task.id, updatedTask: editedTask }));
  }

  const theme = useSelector((state: rootState) => state.data.theme);

  return (
    <div
      style={{
        width: "100%",
        marginTop: "30px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "93%",
          height: "50px",
          display: "flex",
          alignItems: "center",
          marginBottom: "15px",
          color: "white",
          fontWeight: 600,
          gap: "10px",
        }}
      >
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
        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "end",
            height: "100%",
          }}
        >
          <Button
            width="5%"
            height="70%"
            title="Add Task"
            icon="add"
            variant={"primary"}
            onClick={() => redirect("/task")}
          />
        </div>
      </div>
      {state.sortedTask.map((task, tindex) => (
        <div
          key={`${tindex}taskid${task.id}`}
          style={{
            color:
              theme === "light" ? lightTheme.textColor : darkTheme.textColor,
            width: "93%",
            height: "70px",
            borderRadius: "8px",
            marginBottom: "15px",
            boxShadow: "0px 0px 7px rgba(0, 0, 0, 0.3)",
            display: "flex",
            alignItems: "center",
            backgroundColor:
              theme === "light" ? lightTheme.cardColor : darkTheme.cardColor,
          }}
        >
          <div
            style={{
              width: "2.5rem",
              height: "2.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#D3D3D3",
              borderRadius: "8px",
              marginLeft: "15px",
            }}
          >
            <div
              style={{ width: "2rem", height: "2rem" }}
              className={task.category}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              height: "100%",
              justifyContent: "center",
              gap: "5px",
              marginLeft: "50px",
            }}
          >
            <div style={{ fontSize: "1.5rem", fontWeight: 600 }}>
              {task.title}
            </div>
            <div
              style={{
                fontSize: "1rem",
                fontWeight: 400,
                display: "flex",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <div>{task.date}</div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "3px" }}
              >
                <div
                  style={{
                    width: "0.5rem",
                    height: "0.5rem",
                    backgroundColor:
                      task.status === "active" ? "#3498db" : "#2ecc71",
                    borderRadius: "50%",
                  }}
                />
                <div>{task.status === "active" ? "Active" : "Completed"}</div>
              </div>
            </div>
          </div>
          <div
            style={{
              width: "20%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <ToggleButton
              selected={task.status}
              onChange={(value: string) => onUpdate(task, value as Status)}
              width="50%"
              height="50%"
              fontSize="0.8rem"
            />
            <div
              style={{ width: "1.7rem", height: "1.7rem", cursor: "pointer" }}
              className="pen"
              onClick={() => navigate(`/task/${task.id}`)}
            />
            <div
              style={{ width: "1.7rem", height: "1.7rem", cursor: "pointer" }}
              className="delete"
              onClick={() => onDelete(task.id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
