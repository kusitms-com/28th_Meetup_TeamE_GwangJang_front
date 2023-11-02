import React, { ChangeEvent, FocusEvent } from "react";

import { BasicInput } from "./style";

export interface InputProps {
  value: string;
  type: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  errorLine?: boolean;
}
export const Input: React.FC<InputProps> = ({
  value,
  type,
  placeholder,
  onChange,
  onFocus,
  errorLine,
}) => {
  return (
    <div>
      <BasicInput
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
        errorLine={errorLine}
      />
    </div>
  );
};

export default Input;
