import React from "react";

import { BasicInput } from "./style";

export interface InputProps {
  value: string;
  type: string;
  placeholder: string;
  onChange: (value: string) => void;
}

export const Input: React.FC<InputProps> = ({ value, type, placeholder, onChange }) => {
  return (
    <div>
      <BasicInput
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Input;
