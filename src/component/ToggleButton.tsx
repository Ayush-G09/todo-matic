import { useState } from "react";
import { rootState } from "../store/type";
import { useSelector } from "react-redux";
import { Status } from "../types/task";
import { ToggleButtonProps } from "../types/ToggleButton";
import {
  Toggle,
  ToggleBar,
  ToggleBarStatus,
  ToggleCon,
} from "../styles/ToggleButton";

function ToggleButton({
  selected,
  onChange,
  width = "100%",
  height = "100%",
  fontSize = "1.2rem",
}: ToggleButtonProps) {
  const theme = useSelector((state: rootState) => state.data.theme);
  const [status, setStatus] = useState<Status>(selected);
  const change = () => {
    if (status === "active") {
      setStatus("completed");
      onChange("completed");
    } else {
      setStatus("active");
      onChange("active");
    }
  };
  return (
    <ToggleCon theme={theme} width={width} height={height}>
      <Toggle status={status} fontSize={fontSize}>
        <ToggleBarStatus>Active</ToggleBarStatus>
        <ToggleBarStatus>Completed</ToggleBarStatus>
        <ToggleBar onClick={change} status={status}>
          {status === "active" ? "Completed" : "Active"}
        </ToggleBar>
      </Toggle>
    </ToggleCon>
  );
}

export default ToggleButton;
