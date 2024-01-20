import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoadingContainer = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 10px;
  background: rgba(20, 20, 20, 0.9);
  border-radius: 5px;
  box-shadow: inset 0 0 5px #000, 0 1px 1px rgba(255, 255, 255, 0.1);
`;

export const fadeInOut = keyframes`
  0% { opacity: 0; }
  50% { opacity: 0.8; }
  100% { opacity: 0; }
`;

export const LoadingDot = styled.div`
  float: left;
  width: 8px;
  height: 8px;
  margin: 0 4px;
  background: white;
  border-radius: 50%;
  opacity: 0;
  box-shadow: 0 0 2px black;
  animation: ${fadeInOut} 1s infinite;

  &:nth-child(1) { animation-delay: 0s; }
  &:nth-child(2) { animation-delay: 0.1s; }
  &:nth-child(3) { animation-delay: 0.2s; }
  &:nth-child(4) { animation-delay: 0.3s; }
`;