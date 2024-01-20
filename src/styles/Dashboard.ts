import styled from "styled-components";
import { darkTheme, lightTheme } from "./themes";
import { Theme } from "../store/type";

export const DashboradView = styled.div<{ bg: string }>`
  width: 100vw;
  height: 100vh;
  background-color: ${(p) => p.bg};
  overflow-x: hidden;
  transition: all ease-in-out 0.3s;
`;

export const DropdownTitle = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 5%;

  @media (min-width: 768px) {
    width: 75%;
  }
`;

export const DropdownImageCon = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    width: 10%;
  }
`;

export const Image = styled.div`
  width: 1.2em;
  height: 1.2em;
`;

export const DropdownImage = styled.div<{ theme: Theme }>`
  width: 1.6em;
  height: 1.6em;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(p) => (p.theme === "light" ? "gray" : "white")};
  border-radius: 4px;
`;

export const DropdownContent = styled.div<{ theme: Theme }>`
  overflow: hidden;
  padding-top: 10px;
  background-color: ${(p) => (p.theme === "light" ? "#E5E4E2" : "#333333")};
  position: absolute;
  align-items: center;
  justify-content: center;
  border: 2px solid gray;
  border-radius: 4px;
  z-index: 10;
  flex-direction: column;
`;

export const DropdownCon = styled.div<{ theme: Theme }>`
  width: 100%;
  height: 100%;
  border: 2px solid gray;
  outline: none;
  background-color: ${(p) => (p.theme === "light" ? "#E5E4E2" : "#333333")};
  font-size: 1em;
  border-radius: 4px;
  display: flex;
  align-items: center;
  position: relative;
  flex-direction: column;
  color: ${(p) =>
    p.theme === "light" ? lightTheme.textColor : darkTheme.textColor};
`;

export const DropdownButton = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const DropdownBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Divider = styled.div`
  width: 1.5px;
  height: 80%;
  background-color: gray;
`;
