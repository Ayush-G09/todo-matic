import styled from "styled-components";

export const TaskView = styled.div<{ bg: string }>`
  width: 100vw;
  height: 100vh;
  background-color: ${(p) => p.bg};
  overflow-x: hidden;
  transition: all ease-in-out 0.3s;
`;
