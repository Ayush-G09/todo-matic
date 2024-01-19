import { useSelector } from "react-redux";
import { FormFieldProps } from "../types/FormFieldProps";
import Dropdown from "./Dropdown";
import { rootState } from "../store/type";
import { darkTheme, lightTheme } from "../styles/themes";
import ToggleButton from "./ToggleButton";
import { Status } from "../types/task";

function FormField({ title, type, value, items, onChange }: FormFieldProps) {
  const theme = useSelector((state: rootState) => state.data.theme);
  return (
    <div
      style={{
        width: "40%",
        height: "70px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "40%",
          display: "flex",
          alignItems: "center",
          fontSize: "1.2rem",
          fontWeight: 500,
          color: theme === "light" ? lightTheme.textColor : darkTheme.textColor,
        }}
      >
        {title}
      </div>
      <div style={{ width: "100%", height: "60%" }}>
        {type === "dropdown" ? (
          <Dropdown
            items={items ? items : []}
            selected={value}
            onChange={onChange}
          />
        ) : type === "toggle" ? <ToggleButton selected={value as Status} onChange={onChange}/> : (
          <input
            style={{
              width: "100%",
              height: "100%",
              border: "2px solid gray",
              outline: "none",
              backgroundColor: theme === "light" ? "#E5E4E2" : "#333333",
              fontSize: "1rem",
              borderRadius: "4px",
              color:
                theme === "light" ? lightTheme.textColor : darkTheme.textColor,
              colorScheme: theme === 'light' ? 'light' : 'dark',
            }}
            placeholder="workout"
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            id={title}
          />
        )}
      </div>
    </div>
  );
}

export default FormField;
