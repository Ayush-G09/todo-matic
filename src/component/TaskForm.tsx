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
import {
  ButtonCon,
  ButtonWrapper,
  ErrorMessage,
  InvalidTaskCon,
  InvalidTaskHeading,
  SuccessMessage,
  ValidTaskCon,
} from "../styles/TaskForm";

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
      const task = tasks.find((task: Task) => task.id === taskId);
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
    <ValidTaskCon>
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
      <ButtonCon
      >
        <ButtonWrapper
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
        </ButtonWrapper>
        {state.error ? (
          <ErrorMessage>
            All fields are required!
          </ErrorMessage>
        ) : null}
        {state.successMessage !== "" ? (
          <SuccessMessage
          >
            {state.successMessage}
          </SuccessMessage>
        ) : null}
      </ButtonCon>
    </ValidTaskCon>
  ) : (
    <InvalidTaskCon>
      <InvalidTaskHeading>Invalid Task</InvalidTaskHeading>
      <Button
        width={"20%"}
        height={"50px"}
        variant={"error"}
        title="Go Back"
        onClick={() => navigate("/")}
      />
    </InvalidTaskCon>
  );
}

export default TaskForm;
