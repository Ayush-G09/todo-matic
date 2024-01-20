import styled from "styled-components";
import { Theme } from "../store/type";

export const HeaderView = styled.div`
  height: 7%;
  width: 100%;
  display: flex;
`;

export const HeaderCon = styled.div<{ width: string; color?: string }>`
  height: 100%;
  width: ${(p) => p.width};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.3em;
  font-weight: 500;
  color: ${(p) => p.color};

  @media (min-width: 320px) {
    width: ${(p) => p.width === '5%' ? '20%' : '60%'}
  }

  @media (min-width: 375px) {
    width: ${(p) => p.width === '5%' ? '15%' : '70%'}
  }

  @media (min-width: 425px) {
    width: ${(p) => p.width === '5%' ? '10%' : '80%'}
  }

  @media (min-width: 1440px) {
    font-size: 1.5em;
  }
`;

export const HeaderIcon = styled.div`
  height: 1.2em;
  width: 1.2em;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1020px) {
    height: 1.5em;
    width: 1.5em;
  }

  @media (min-width: 1440px) {
    height: 1.8em;
    width: 1.8em;
  }
`;

export const BackIconCon = styled.div<{ theme: Theme }>`
  width: 1.1em;
  height: 1.1em;
  border-radius: 4px;
  background-color: ${(p) => (p.theme === "light" ? "lightgray" : "darkgray")};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BackIcon = styled.div<{ theme: Theme }>`
  width: 0.7em;
  height: 0.7em;
`;
