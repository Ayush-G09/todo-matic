import styled from "styled-components";

export const ButtonCon = styled.div<{
  width: string;
  height: string;
  variant: "primary" | "icon" | "error";
  iconPosition: "left" | "right";
  active?: boolean;
}>`
  min-width: ${(p) => p.width};
  height: ${(p) => p.height};
  background-color: ${(p) => (p.variant === "primary" ? "#2986D5" : p.variant === "error" ? "crimson" : "#D3D3D3")};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 0px 5px;
  flex-direction: ${(p) => (p.iconPosition === "left" ? "row" : "row-reverse")};
  opacity: ${(p) => ((p.active !== undefined ? p.active : true) ? 1 : 0.7)};
  cursor: pointer;
  &:hover {
    opacity: 0.9;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }
`;

export const ButtonIcon = styled.div`
  width: 0.8em;
  height: 0.8em;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    width: 1em;
    height: 1em;
  }
`;

export const ButtonTitle = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6em;

  @media (min-width: 768px) {
    font-size: 0.8em;
  }
`;
