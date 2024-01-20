import styled from "styled-components";

export const DropdownItem = styled.div`
  width: 95%;
  height: 40px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
    background-color: gray;
  }
`;