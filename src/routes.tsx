import { createBrowserRouter } from "react-router-dom";
import Dashborad from "./views/Dashborad";
import Task from "./views/Task";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashborad />,
  },
  {
    path: "/task/:taskId?",
    element: <Task />,
  }
]);