import styled from "styled-components";
import { darkTheme, lightTheme } from "./themes";
import { Theme } from "../store/type";

export const InvalidTaskCon = styled.div<{ theme: Theme }>`
  width: 100%;
  height: 93%;
  display: flex;
  flex-direction: column;
  gap: 3%;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 600;
  color: ${(p) =>
    p.theme === "light" ? lightTheme.textColor : darkTheme.textColor};
`;

export const InvalidTaskHeading = styled.div`
  margin-top: 10%;
`;

export const ValidTaskCon = styled.div`
  width: 100%;
  height: 93%;
  display: flex;
  flex-direction: column;
  gap: 3%;
  align-items: center;
  padding-top: 50px;
`;

export const SuccessMessage = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: limegreen;
`;

export const ErrorMessage = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: red;
`;

export const ButtonCon = styled.div`
  width: 80%;
  font-size: 1.5em;
  font-weight: 500;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 30px;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
