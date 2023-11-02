import { InputProps } from "@/types";

import { BasicInput } from "./style";

export const Input = ({ value, type, placeholder, onChange, onFocus, errorLine }: InputProps) => {
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
