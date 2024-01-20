import styled from "styled-components";
import { Theme } from "../store/type";
import { darkTheme, lightTheme } from "./themes";

export const FormFieldCon = styled.div`
  width: 80%;
  height: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const FormFieldTitle = styled.div<{ theme: Theme }>`
  width: 100%;
  height: 40%;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 500;
  color: ${(p) =>
    p.theme === "light" ? lightTheme.textColor : darkTheme.textColor};
`;

export const FieldCon = styled.div`
  width: 100%;
  height: 60%;
`;

export const Field = styled.input<{ theme: Theme }>`
  width: 100%;
  height: 100%;
  border: 2px solid gray;
  outline: none;
  background-color: ${(p) => (p.theme === "light" ? "#E5E4E2" : "#333333")};
  font-size: 1rem;
  border-radius: 4px;
  color: ${(p) =>
    p.theme === "light" ? lightTheme.textColor : darkTheme.textColor};
  color-scheme: ${(p) => (p.theme === "light" ? "light" : "dark")};
`;
