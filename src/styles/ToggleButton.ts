import styled from "styled-components";
import { Theme } from "../store/type";
import { darkTheme, lightTheme } from "./themes";
import { Status } from "../types/task";

export const ToggleCon = styled.div<{
  theme: Theme;
  width: string;
  height: string;
}>`
  width: ${(p) => p.width};
  height: ${(p) => p.height};
  outline: none;
  background-color: ${(p) => (p.theme === "light" ? "#E5E4E2" : "#333333")};
  font-size: 1em;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${(p) =>
    p.theme === "light" ? lightTheme.textColor : darkTheme.textColor};
`;

export const ToggleBar = styled.div<{ status: Status }>`
  width: 50%;
  height: 100%;
  background-color: white;
  position: absolute;
  color: ${(p) => (p.status === "completed" ? "#3498db" : "#2ecc71")};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  left: ${(p) => (p.status === "active" ? "50%" : "0%")};
  transition: all esae 3s;
`;

export const ToggleBarStatus = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const Toggle = styled.div<{ status: Status; fontSize: string }>`
  width: 99%;
  height: 85%;
  overflow: hidden;
  background-color: ${(p) => (p.status === "active" ? "#3498db" : "#2ecc71")};
  border-radius: 4px;
  box-shadow: inset 0 0 10px 0 rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  position: relative;
  font-size: ${(p) => p.fontSize};
  font-weight: 600;
`;
