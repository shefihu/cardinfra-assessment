import type { JSX } from "react";

export interface FormInputProps {
  label: string;
  icon: JSX.Element;
  type?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
}
