import styled from "styled-components";
import { darkTheme, lightTheme } from "./themes";
import { Theme } from "../store/type";
import { Status } from "../types/task";

export const EditButton = styled.div`
  width: 1em;
  height: 1em;
  cursor: pointer;
  display: flex;
  rotate: 180deg;
  margin-right: 10px;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const ActionButton = styled.div`
  width: 1.7rem;
  height: 1.7rem;
  cursor: pointer;
`;

export const ActionCon = styled.div`
  width: 40%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: space-around;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const TaskCard = styled.div<{ theme: Theme }>`
  color: ${(p) =>
    p.theme === "light" ? lightTheme.textColor : darkTheme.textColor};
  width: 93%;
  height: 70px;
  border-radius: 8px;
  margin-bottom: 15px;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  backgroundcolor: ${(p) =>
    p.theme === "light" ? lightTheme.cardColor : darkTheme.cardColor};
`;

export const CategoryCon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d3d3d3;
  border-radius: 8px;
  margin-left: 15px;
`;

export const CategoryIcon = styled.div`
  width: 2rem;
  height: 2rem;
`;

export const TaskInfoCon = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  justify-content: center;
  gap: 3px;
  margin-left: 10px;
`;

export const TaskInfoTitle = styled.div`
  font-size: 1.1em;
  font-weight: 500;
`;

export const TaskInfo = styled.div`
  font-size: 0.8em;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const TaskDate = styled.div``;

export const StatusCon = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;

export const StatusIndicator = styled.div<{ status: Status }>`
  width: 0.5rem;
  height: 0.5rem;
  background-color: ${(p) => (p.status === "active" ? "#3498db" : "#2ecc71")};
  border-radius: 50%;
`;

export const Statust = styled.div``;

export const TaskListCon = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TaskListHeader = styled.div`
  width: 93%;
  height: 50px;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  color: white;
  font-weight: 600;
  gap: 10px;
`;

export const AddButtonCon = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: end;
  height: 100%;
`;
