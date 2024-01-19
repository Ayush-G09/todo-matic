import { useEffect, useState } from "react";
import FormField from "./FormField";
import Button from "./Button";
import { Category, Status, Task } from "../types/task";
import { generateRandomNumber } from "../utils/Idgenerator";
import { addTask, deleteTask, editTask } from "../store/slice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { rootState } from "../store/type";
import { darkTheme, lightTheme } from "../styles/themes";

type State = {
  title: string;
  date: string;
  category: Category;
  error: boolean;
  successMessage: string;
  status: Status;
  validTask: boolean;
};

function TaskForm() {
  const dispatch = useDispatch();
  const { taskId } = useParams();
  const tasks = useSelector((state: rootState) => state.data.tasks);
  const navigate = useNavigate();
  const theme = useSelector((state: rootState) => state.data.theme);

  const [state, setState] = useState<State>({
    title: "",
    date: "",
    category: "work",
    error: false,
    successMessage: "",
    status: "active",
    validTask: true,
  });

  const onDelete = () => {
    if (taskId) {
      dispatch(deleteTask(taskId));
      navigate("/");
    }
  };

  const onSubmit = () => {
    if (taskId) {
      const editedTask: Task = {
        id: taskId,
        title: state.title,
        date: state.date,
        category: state.category,
        status: state.status,
      };
      dispatch(editTask({ id: taskId, updatedTask: editedTask }));
      setState((prev) => ({
        ...prev,
        successMessage: `Successfully updated ${state.title}.`,
      }));
    } else {
      if (state.title !== "" && state.date !== "") {
        const newTask: Task = {
          id: generateRandomNumber().toString(),
          title: state.title,
          date: state.date,
          category: state.category,
          status: "active",
        };
        dispatch(addTask(newTask));
        setState((prev) => ({
          ...prev,
          successMessage: `Successfully created ${state.title} for ${state.date}.`,
        }));
        setState((prev) => ({ ...prev, error: false, title: "", date: "" }));
      } else {
        setState((prev) => ({ ...prev, error: true }));
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setState((prev) => ({ ...prev, successMessage: "" }));
    }, 3000);
  }, [state.successMessage]);

  useEffect(() => {
    if (taskId) {
      const task = tasks.find((task) => task.id === taskId);
      if (task) {
        setState((prev) => ({
          ...prev,
          title: task.title,
          date: task.date,
          category: task.category,
          status: task.status,
        }));
      } else {
        setState((prev) => ({ ...prev, validTask: false }));
      }
    }
  }, []);

  return state.validTask ? (
    <div
      style={{
        width: "100%",
        height: "93%",
        display: "flex",
        flexDirection: "column",
        gap: "3%",
        alignItems: "center",
        paddingTop: "50px",
      }}
    >
      <FormField
        title="Title"
        type="text"
        onChange={(value: string) =>
          setState((prev) => ({ ...prev, title: value }))
        }
        value={state.title}
      />
      <FormField
        title="Date"
        type="date"
        onChange={(value: string) =>
          setState((prev) => ({ ...prev, date: value }))
        }
        value={state.date}
      />
      <FormField
        title="Category"
        type="dropdown"
        items={["work", "personal", "health", "learning", "social"]}
        value={state.category}
        onChange={(value: string) =>
          setState((prev) => ({ ...prev, category: value as Category }))
        }
      />
      {taskId ? (
        <FormField
          title="Status"
          type="toggle"
          value={state.status}
          onChange={(value: string) =>
            setState((prev) => ({ ...prev, status: value as Status }))
          }
        />
      ) : null}
      <div
        style={{
          width: "40%",
          fontSize: "1.2rem",
          fontWeight: 500,
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          marginTop: "30px",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <Button
            width={"40%"}
            height={"50px"}
            title={taskId ? "Update Task" : "Add Task"}
            variant={"primary"}
            onClick={onSubmit}
          />
          {taskId ? (
            <Button
              width={"40%"}
              height={"50px"}
              title={"Delete Task"}
              variant={"error"}
              onClick={onDelete}
            />
          ) : null}
        </div>
        {state.error ? (
          <div style={{ fontSize: "1rem", fontWeight: 600, color: "red" }}>
            All fields are required!
          </div>
        ) : null}
        {state.successMessage !== "" ? (
          <div
            style={{ fontSize: "1rem", fontWeight: 600, color: "limegreen" }}
          >
            {state.successMessage}
          </div>
        ) : null}
      </div>
    </div>
  ) : (
    <div
      style={{
        width: "100%",
        height: "93%",
        display: "flex",
        flexDirection: "column",
        gap: "3%",
        alignItems: "center",
        fontSize: "1.5rem",
        fontWeight: "600",
        color: theme === "light" ? lightTheme.textColor : darkTheme.textColor,
      }}
    >
      <div
        style={{
          marginTop: '10%'
        }}
      >
        Invalid Task
      </div>
      <Button
        width={"20%"}
        height={"50px"}
        variant={"error"}
        title="Go Back"
        onClick={() => navigate('/')}
      />
    </div>
  );
}

export default TaskForm;
