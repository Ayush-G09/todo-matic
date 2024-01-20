import { useSelector } from "react-redux";
import { FormFieldProps } from "../types/FormFieldProps";
import Dropdown from "./Dropdown";
import { rootState } from "../store/type";
import { darkTheme, lightTheme } from "../styles/themes";
import ToggleButton from "./ToggleButton";
import { Status } from "../types/task";
import { Field, FieldCon, FormFieldCon, FormFieldTitle } from "../styles/FormField";

function FormField({ title, type, value, items, onChange }: FormFieldProps) {
  const theme = useSelector((state: rootState) => state.data.theme);
  return (
    <FormFieldCon>
      <FormFieldTitle theme={theme}>{title}</FormFieldTitle>
      <FieldCon>
        {type === "dropdown" ? (
          <Dropdown
            items={items ? items : []}
            selected={value}
            onChange={onChange}
          />
        ) : type === "toggle" ? (
          <ToggleButton selected={value as Status} onChange={onChange} />
        ) : (
          <Field
            theme={theme}
            placeholder={type === 'text' ? "workout" : ''}
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            id={title}
          />
        )}
      </FieldCon>
    </FormFieldCon>
  );
}

export default FormField;
