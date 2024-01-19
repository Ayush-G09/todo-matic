import { Category } from "./task";

export type DropdownProps = {
    items: string[];
    selected: string;
    onChange: (value: string) => void;
}