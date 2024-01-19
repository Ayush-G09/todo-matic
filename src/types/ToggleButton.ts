import { Status } from "./task";

export type ToggleButtonProps = {
    selected: Status;
    onChange: (value: string) => void;
    width?: string;
    height?: string;
    fontSize?: string;
}