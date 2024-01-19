import React, { useState } from "react";
import { Theme, rootState } from "../store/type";
import styled from "styled-components";
import { darkTheme, lightTheme } from "../styles/themes";
import { useSelector } from "react-redux";
import { Status } from "../types/task";
import { ToggleButtonProps } from "../types/ToggleButton";

function ToggleButton({selected, onChange}: ToggleButtonProps) {
  const theme = useSelector((state: rootState) => state.data.theme);
  const [status, setStatus] = useState<Status>(selected);
  const change = () => {
    if(status === 'active'){
        setStatus('completed');
        onChange('completed');
    }else{
        setStatus('active');
        onChange('active');
    }
  }
  return (
    <ToggleCon theme={theme}>
      <div
        style={{ width: "99%", height: "85%", overflow: 'hidden', backgroundColor: status === 'active' ? '#3498db' : '#2ecc71', borderRadius: '4px', boxShadow: 'inset 0 0 10px 0 rgba(0, 0, 0, 0.3)', display: 'flex', alignItems: 'center', position: 'relative', fontSize: '1.2rem', fontWeight: '600'}}
      >
        <div style={{width: '50%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white'}}>Active</div>
        <div style={{width: '50%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white'}}>Completed</div>
        <div style={{width: '50%', height: '100%', backgroundColor: 'white', position: 'absolute', color: status === 'completed' ? '#3498db' : '#2ecc71', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', left: status === 'active' ? '50%' : '0%', transition: 'all esae 3s'}} onClick={change}>{status === 'active' ? 'Completed' : 'Active'}</div>
      </div>
    </ToggleCon>
  );
}

const ToggleCon = styled.div<{ theme: Theme }>`
  width: 100%;
  height: 100%;
  border: 2px solid gray;
  outline: none;
  background-color: ${(p) => (p.theme === "light" ? "#E5E4E2" : "#333333")};
  font-size: 1rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${(p) =>
    p.theme === "light" ? lightTheme.textColor : darkTheme.textColor};
`;

export default ToggleButton;
