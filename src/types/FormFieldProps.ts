import { Category } from "./task";

export type FormFieldProps = {
    title: string;
    type: 'text' | 'date' | 'dropdown' | 'toggle';
    items?: string[];
    value: string;
    onChange: (value: string) => void;
}